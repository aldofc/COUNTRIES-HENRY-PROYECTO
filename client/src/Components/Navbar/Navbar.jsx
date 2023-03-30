import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

import './Navbar.css'


const Navbar = ({handleChange , handleSubmit}) => {
  return (
    
    <div className='NavbarContainer'>
      <h1>navbar</h1>
      <div>
      <SearchBar />
      </div>
      <Link to={'/create'}>
      <button>CREATE ACTIVITY</button>
      </Link>
     
    </div>
  )
}

export default Navbar