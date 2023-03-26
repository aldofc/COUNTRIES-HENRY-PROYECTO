import React from 'react'
import {  useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
//import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import { getCountries } from '../../Redux/Actions/index'

const Home = () => {

const dispatch = useDispatch();
const allCountries = useSelector(state=>state.countries)

useEffect(() => {
  dispatch(getCountries())

},[dispatch])


return (
    <div>
    <div>
    <Navbar />
    </div>

    <div> 
      {allCountries?.map(country=>{
        return(
          <Card id={country.id}
                name={country.name}
                image={country.image}
                continent={country.continent}
                key={country.id} />
        )
      })} </div>
    
    </div>
  )
}

export default Home