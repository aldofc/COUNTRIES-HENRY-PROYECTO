import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../Redux/Actions'
import { postActivity } from '../../Redux/Actions/index'
import { useHistory } from 'react-router-dom'
import validate from "./Validate";
import './Create.css'



function Create() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)


  const history = useHistory();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  let countriesList = countries.map(country => {
    return ({
      name: country.name,
      image: country.image
    })
  });
  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState({ firstTry: true });
  const [activity, setActivity] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    image: '',
    countries: []
  })

  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });
    if (!errors.firstTry) {
      setErrors(validate({
        ...activity,
        [e.target.name]: e.target.value
      }))
    }
  }

  function handleSeasons(e) {
    if (e.target.value !== 'Seleccionar' && !activity.season.includes(e.target.value)) {
      setActivity({
        ...activity,
        season: e.target.value
      })
      if (!errors.firstTry) {
        setErrors(validate({
          ...activity,
          season: e.target.value
        }))
      }
    }
  }

  function handleCountries(e) {
    if (e.target.value !== 'Seleccionar' && !activity.countries.includes(e.target.value)) {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value]
      })
      if (!errors.firstTry) {
        setErrors(validate({
          ...activity,
          countries: [...activity.countries, e.target.value]
        }))
      }

    }
  }

  function deleteCountry(e) {
    setActivity({
      ...activity,
      countries: activity.countries.filter(country => country !== e.target.value)
    })
    if (!errors.firstTry) {
      setErrors(validate({
        ...activity,
        countries: activity.countries.filter(country => country !== e.target.value)
      }))
    }
  };

  function handleCheckErrors(e) {
    e.preventDefault();
    setErrors(validate({
      ...activity,
      [e.target.name]: e.target.value,
      countries: [...activity.countries, e.target.value]
    }))
    handleSubmit(e)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (activity.name && activity.difficulty && activity.duration && activity.season && activity.countries.length >= 1) {
      dispatch(postActivity(activity));
      alert('Activity created successfully');
      setActivity({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      });
      errors.firstTry = false
      history.push('/home')
    }
    if (errors.firstTry) {
      alert('Complete the corresponding fields')
    }
  }


  return (
    <div className="conainerForm">
      <div>
        
        <h1 className='heading1'>New Activity</h1>
        <form className="formActivity" onSubmit={e => handleSubmit(e)}>
          <div className="inputs">
            <div className="inputBox">
              <label className="label">Name : </label>
              <input
              className='input'
                type='text'
                name='name'
                autoComplete="off"
                value={activity.name}
                onChange={e => handleChange(e)}
              />
              
            </div>
            {errors.name && (<p>{errors.name}</p>)}
            <div className="inputBox">
              <label >Difficulty (from 1 to 5) : </label>
              <input
              className='input'
                type='number'
                name='difficulty'
                autoComplete="off"
                value={activity.difficulty}
                onChange={e => handleChange(e)}
              />
            </div>
            {errors.difficulty && (<p>{errors.difficulty}</p>)}
            <div className="inputBox">
              <label>Duration (24h format) : </label>
              <input
              className='input'
                type='number'
                autoComplete="off"
                name='duration'
                value={activity.duration}
                onChange={e => handleChange(e)}
              />
            </div>
            {errors.duration && (<p>{errors.duration}</p>)}
          </div>
          <div>
            <div>
            <div className='content-select2'>
                <h3 className="heading2">Season: </h3>
                <select onChange={e => handleSeasons(e)}>
                  <option>Select</option>
                  <option value='Spring'>Spring</option>
                  <option value='Summer'>Summer</option>
                  <option value='Autumn'>Autumn</option>
                  <option value='Winter'>Winter</option>
                </select>
              </div>
              {errors.season && (<p>{errors.season}</p>)}
            </div>
            <div>
            <div className='content-select2'>
                <h3 className="heading2">Countries: </h3>
                <select value={selected} onChange={e => [handleCountries(e), setSelected(e)]}>
                  <option >Select</option>
                  {countriesList?.map(country => {
                    return (
                      <option key={country.name}>
                        {country.name}
                      </option>
                    )
                  })}
                </select>
               
              </div>
              <br></br> <br></br>
              {errors.countries && (<p>{errors.countries}</p>)}
              <div className="countriesContainer">
                {activity.countries.map((country) => {
                  return (
                    <div className="paisesSelect" key={country}>
                      <button className="buttonClose" onClick={e => { deleteCountry(e) }} value={country}>X</button>
                      <p   >{country}</p>
                      
                      
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            {errors.name ||
              errors.activity ||
              errors.duration ||
              errors.season ||
              errors.countries ?
              <button disabled className="crear">Create Activity</button>
              : <button className="crear" onClick={e => handleCheckErrors(e)}>Create Activity</button>}
          </div>
        </form>
      </div>
    </div>
  )
};

export default Create;