import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NavbarFilters from '../../Components/NavbarFilters/NavbarFilters'
import Card from '../../Components/Card/Card'
import { getCountries } from '../../Redux/Actions/index'
import Paginado from '../../Components/Paginado/Paginado'
import './Home.css'


const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)


  //const [orden, setOrden] = useState('')
  //const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  const countriesPerPage = 10;
  const lastCardIndex = currentPage * countriesPerPage
  const firstCardIndex = lastCardIndex - countriesPerPage
  const currentCountries = countries.slice(firstCardIndex, lastCardIndex)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }



  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <div>
        <Navbar />

      </div>


      



      <div className='containerIzquierda'>
        <NavbarFilters />
      </div>

      <div >

        <Paginado
          currentPage={currentPage}
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginado={paginado} />
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



    </div>
  )
}

export default Home