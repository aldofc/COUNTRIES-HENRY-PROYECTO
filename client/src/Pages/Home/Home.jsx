import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NavbarFilters from '../../Components/NavbarFilters/NavbarFilters'
import Card from '../../Components/Card/Card'
import { getCountries } from '../../Redux/Actions/index'
import './Home.css'


const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)


  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <div>
        <Navbar /> 
        
      </div>

      <div>
        
      </div>

      <div className='containerIzquierda'>
      <NavbarFilters />
      </div>


      <div className='CardsContainer'>{countries.map(country => {
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