import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='containerLoader'>
      <br></br>
      <div class="loader">
        <div class="loader-text">Loading...</div>
        <div class="loader-bar"></div>
      </div>

    </div>
  )
}

export default Loader