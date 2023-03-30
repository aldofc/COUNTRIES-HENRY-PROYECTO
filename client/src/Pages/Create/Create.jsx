import React , { useEffect, useState } from 'react'
import { postActivity} from '../../Redux/Actions/Activities'
import {useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { getCountries } from '../../Redux/Actions'
import './Create.css'

function Create(){
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector(state=>state.countries)
  const createdActivity = useSelector(state => state.newActivity)

  const [newActivity, setNewActivity] = useState({
    name: { text: '', error: false },
    difficulty: '1',
    duration: { hours: '', error: false },
    season: { name: '', error: false },
    countries: { all: [], error: false }
  });

  const [ errors , setErrors ] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",

  })

  const [input , setInput] = useState({
    id:"",
    name:"",
    difficulty:"",
    image:"",
    duration:"",
    season:"",
    countries:[],

  })

  useEffect(() =>{
    dispatch(getCountries())
  },[dispatch])

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name] :e.target.value
    }))
  }


  function handleRemoveClick(e){
    e.preventDefault()
    const id = e.target.id
    const countries = newActivity.countries.all.filter(c => c !== id);
    setNewActivity(state => {
      return{
        ...state,
        countries:{
          all: countries, error: false
        }
      }
    })

    
  }


  function validate(input){
    let errors ={};
    if(!input.name){
      errors.name="name required"
    }if(input.difficulty > 5 || input.difficulty < 0){
      errors.difficulty= "the difficulty must be between 0 and 5"         
    }if(input.duration == ""){
      errors.duration = "duration required"
    }if(input.season == ""){
      errors.season = "season required"
    }

    return errors
  }

  function handleSubmit(e){
    e.preventDefault();
    if(input.name === ""){
      return alert("please enter a name")
    }
    if(input.difficulty > 5 || input.difficulty < 0 ){
      return alert("Please enter a number from 0 to 5")
    }
    if(input.duration === ""){
      return alert("please enter a duration")
    }
    if(input.season === ""){
      return alert("please enter a season")
    }
    if(input.image === ""){
      setInput({
        ...input,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhealth.gov%2Fespanol%2Fmoveyourway%2Fget-kids-active&psig=AOvVaw2s7IojmiF9upJGZW0TKF6o&ust=1680295996693000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiZgbzEhP4CFQAAAAAdAAAAABA8"
      })
    }

  dispatch(postActivity(input))
  alert("the activity was created correctly")
  setInput({
    name:"",
    difficulty:"",
    image:"",
    duration:"",
    season:"",
    countries:[],
  })
  history.push('/home')
}

return(
    <div>


      <div>
        <form onSubmit={e => handleSubmit(e)}>
        <p> CREATE ACTIVITY</p>
     


      <div>

    <div>
          <label >Name:</label>
          <input autoComplete='off' type="text" value={input.name}  name='name'  onChange={handleChange}/>
        </div>
             {errors.name && (<p>{errors.name}</p>)}



      <div>
        <label >difficulty:</label>
        <input autoComplete='off' type="number" value={input.difficulty}  name='difficulty'  onChange={handleChange}/>
      </div>
            {errors.difficulty && (<p>{errors.difficulty}</p>)}


      <div>
        <label>duration:</label>
        <input autoComplete='off' type="text" value={input.duration}  name='duration'  onChange={handleChange}/>
      </div>
           {errors.duration && (<p>{errors.duration}</p>)}


      <div>
        
        <select name="season" id="season" onChange={handleChange}>
         <option value="none"> select season</option>
         <option value="Summer">Summer</option>
         <option value="Autumn">Autumn</option>
         <option value="Winter">Winter</option>
         <option value="Spring">Spring</option>
         </select>
         </div>
           {errors.season && (<p>{errors.season}</p>)}



<div>
  <select name="countries" id="countries" onChange={handleChange} >
  <option value="">select a country</option>
  {countries?.map((country) =>{
    return <option key={country.id} value={country.id} >{country.name}</option>
  })}
  </select>
</div>








<div className='selectedCountriesContainer'>
  <h4>selected countries</h4>
  <div>
    {newActivity.countries.all.length ? 
  
  <div >
    {newActivity.countries?.all.map(country => {
      const actualCountry = countries?.find((c) => c.id === country)
      if(actualCountry){
        return(
          <div key={actualCountry.id} className='actualCountriesContainer' >
            <a href="#" onClick={handleRemoveClick} id={actualCountry.id}>&times;</a>
            <img src={actualCountry.image} alt={`${actualCountry.id} image`} />
            <span>{actualCountry.id}</span>
          </div>
        )
      }
      return <div className='actualCountriesContainer'></div>
    })}
</div> : <p>none</p>}
</div>
</div>





</div>

<div>
  <button type='submit'>CREATE ACTIVITY</button>
</div>

    </form>
    </div>
    </div>
  )
}

export default Create