import React from 'react'
import './NavbarFilters.css'

const NavbarFilters = () => {
  return (
    <div className='ContainerLeft'>NavbarFilters


<div>
  <select >
  <option value=""> ORDER BY CONTINENT </option>
  <option value="">ALL</option>
  <option value="">AFRICA</option>
  <option value="">ANTARTICA</option>
  <option value="">ASIA</option>
  <option value="">EUROPE</option>
  <option value="">SOUTH AMERICA</option>
  <option value="">NORTH AMERICA</option>
  <option value="">OCEANIA</option>
  </select>


  <select >
  <option value=""> ALPHABETICAL ORDER </option>
  <option value="">A-Z</option>
  <option value="">Z-A</option>
  </select>




  <select >
  <option value=""> ORDER BY POPULATION </option>
  <option value="">ASCENDENT</option>
  <option value="">DESCENDENT</option>
  </select>




  <select >
  <option value=""> ORDER BY ACTIVITY </option>
  <option value="">ALL</option>
  <option value="">TEST</option>
  </select>


</div>



    </div>
  )
}

export default NavbarFilters