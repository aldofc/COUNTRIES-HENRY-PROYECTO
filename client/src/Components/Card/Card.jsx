import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img className='imageCoontainer' src={props.image} alt="imagen" />
      <div className="card-details">
        <h3> Name : {props.name}</h3>
        <h3>continent : {props.continent}</h3>
      </div>
      <Link to={`/home/${props.id}`}>
        <button className="card-button">more info</button>
      </Link>

    </div>
  )
}

export default Card