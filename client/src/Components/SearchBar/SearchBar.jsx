import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName } from '../../Redux/Actions';
import './SearchBar.css'

const SearchBar = () => {

   const dispatch = useDispatch()
   const [searchString, setSearchString] = useState("");

   function handleChange(e) {
      e.preventDefault(e)
      setSearchString(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault(e)
      dispatch(getCountriesByName(searchString))
   }

   return (
      <div className='input1'>
         <form className='search-box' onChange={handleChange}>
            <div className='search'>
               <input className='search__input' autoComplete='off' placeholder="Search Country..." />
               <button className='search__button' type='submit' onClick={handleSubmit}>🔎</button>
            </div>
         </form>
      </div>
   )
}

export default SearchBar