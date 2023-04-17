import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import { getCountries, orderByName, orderByAscOrDesc, filterContinent, Loading , activitiesFilter, getAllActivities} from '../../Redux/Actions/index'
import Paginado from '../../Components/Paginado/Paginado'
import Loader from '../../Components/Loader/Loader'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)
  const allActivities = useSelector(state => state.allActivities)

  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [activities, setActivities] = useState([])


  

 

  const countriesPerPage = 10;
  const lastCardIndex = currentPage * countriesPerPage
  const firstCardIndex = lastCardIndex - countriesPerPage
  const currentCountries = countries.slice(firstCardIndex, lastCardIndex)

 
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {

    dispatch(Loading())
    dispatch(getCountries())
    dispatch(Loading())

  }, [dispatch])

  function handlerSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setOrden(`Ordenado ${e.target.value}`)
    setCurrentPage(1)
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByAscOrDesc(e.target.value))
    setOrden(`Ordenado ${e.target.value}`)
    setCurrentPage(1)
  }

  function handleCLick(e) {

    e.preventDefault()
    //dispatch(Loading())
    dispatch(getCountries())
    // dispatch(Loading())
    setCurrentPage(1)
  }

  function handleSortContinent(e) {
    e.preventDefault();
    dispatch(filterContinent(e.target.value))
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(activitiesFilter(activities))
}, [dispatch, activities])


  function handleActivity(e){
    
    if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
      setActivities([...activities, e.target.value])
  }

    
  }




  function handleDeleteActivities(e) {
    setActivities(activities.filter(activity => activity !== e.target.value))
}


 
  return (


    <div>


      <div className='nabvar'>
        <Navbar />

      </div>

      <section>

        <div >
          <div >
            <nav>
              <div className='content-select'>

                <select onChange={e => handleSortContinent(e)}>

                  <option value="All"> ORDER BY CONTINENT </option>
                  <option value="Africa">AFRICA</option>
                  <option value="Antarctica">ANTARTICA</option>
                  <option value="Asia">ASIA</option>
                  <option value="Europe">EUROPE</option>
                  <option value="South America">SOUTH AMERICA</option>
                  <option value="North America">NORTH AMERICA</option>
                  <option value="Oceania">OCEANIA</option>

                </select>

                <select onChange={e => handlerSortName(e)}>

                  <option value=""> ALPHABETICAL ORDER </option>
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>

                </select>


                <select onChange={e => handleSortPopulation(e)}>

                  <option value=""> ORDER BY POPULATION </option>
                  <option value="hdesc">HIGHER TO LESS </option>
                  <option value="hasc">MINOR TO MAJOR</option>
                </select>

                <select onChange={e => handleActivity(e)}>
                        <option >Seleccionar</option>
                        <option >all</option>
                        {allActivities.map(acti => {
                            return(
                                <option key={acti.name} value={acti.name}>{acti.name}</option>
                                )
                            })}
                    </select>
                    <div className="displayActivities">
                    {activities.map((activity) => {
                        return(
                            <div className="eachActivity" key={activity}>
                                <p className="activityName">{activity}</p>
                                <button className="closeButton" onClick={e => handleDeleteActivities(e)} value={activity}>X</button>
                            </div>
                        )
                    })}
                </div>


                <button className='buttonReset' onClick={e => { handleCLick(e) }}>
                  reset
                </button>

              </div>

            </nav>

          </div>

        </div>

        <div className='CardsContainer'>{currentCountries.map(country => {
          return <Card
            id={country.id}
            name={country.name}
            image={country.image}
            continent={country.continent}
            
          />

        })}


        </div>

        <div>

          

          <Paginado 
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            paginado={paginado} />
        </div>
      </section>

    </div>
  )
}
export default Home