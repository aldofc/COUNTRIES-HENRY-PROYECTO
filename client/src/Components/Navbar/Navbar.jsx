import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Linkedin from '../../Images/linkedink1.png'
import GitHub from '../../Images/github.png'
import Instagram from '../../Images/instagram5.jpg'

import './Navbar.css'


const Navbar = ({ handleChange, handleSubmit }) => {
  return (

    <div className='containerNav'>

      <div className='posicionItems'>
        <SearchBar />
        <br></br>

        <Link to={'/create'}>
          <button className='button'>CREATE ACTIVITY</button>
        </Link>


        <Link to={'/activities'}>
          <button className='button'>ACTIVITIES</button>
        </Link>
      </div>


      <div className='containerderecha'>

        <div className='containerItems2'>



          {/* <button className='botonabout'>about me</button> */}





        </div>

      </div>

    </div>
  )
}

export default Navbar