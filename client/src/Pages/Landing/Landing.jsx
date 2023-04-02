import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      
    <div>Landing</div>

    <Link to={'/home'}>
    <button>Home</button>
    </Link>
    <button>oa</button>


    </div>
  )
}

export default Landing