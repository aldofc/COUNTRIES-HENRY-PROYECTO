import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import { getCountries, orderByName, orderByAscOrDesc, filterContinent, Loading } from '../../Redux/Actions/index'
import Paginado from '../../Components/Paginado/Paginado'
import Loader from '../../Components/Loader/Loader'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)

  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
 

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
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByAscOrDesc(e.target.value))
    setOrden(`Ordenado ${e.target.value}`)
  }

  function handleCLick(e) {

    e.preventDefault()
    //dispatch(Loading())
    dispatch(getCountries())
    // dispatch(Loading())
  }

  function handleSortContinent(e) {
    e.preventDefault();
    dispatch(filterContinent(e.target.value))

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

                <select >

                  <option value=""> ORDER BY ACTIVITY </option>
                  <option value="">ALL</option>
                  <option value="">TEST</option>

                </select>


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