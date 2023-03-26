import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (image , name , continent, id) => {
  return (
    <div className='cardContainer'>
        <Link to={`/home/${id}`}>
            <img src={image} alt="imagen" />
        </Link>

        <div>
            <h3>{name}</h3>
            <h5>CONTINENT: {continent}</h5>
        </div>
    
    
    </div>
  )
}

export default Card