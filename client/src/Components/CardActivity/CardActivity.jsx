import React from 'react'
import './CardActivity.css'

const CardActivity = (props) => {
  return (
    <div className='card'>
      
      <div className="card-details">
        <h3> Name : {props.name}</h3>
        <h3>difficulty : {props.difficulty}</h3>
        <h3> duration : {props.duration}</h3>
        <h3> season : {props.season}</h3>
      </div>
      {/* <Link to={`/home/${props.id}`}>
        <button className="card-button">more info</button>
      </Link> */}

    </div>
  )
}

export default CardActivity