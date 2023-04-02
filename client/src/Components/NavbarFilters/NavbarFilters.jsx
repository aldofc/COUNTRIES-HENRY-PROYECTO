// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { orderByName } from "../../Redux/Actions";
// //import { filterByNameAsc, filterByNameDesc, getCountries } from "../../Redux/Actions";
// import './NavbarFilters.css'

// export default function NavbarFilters() {

//    const dispatch = useDispatch()
//   // const [alphabet, setAlphabet] = useState('')
//   const [orden, setOrden] = useState('')

//   // useEffect(() => {
//   //   if (alphabet !== "") {
//   //     dispatch(getCountries())
//   //   }
//   //   if (alphabet === 'asc') {
//   //     dispatch(filterByNameAsc())
//   //   }
//   //   if (alphabet === 'desc') {
//   //     dispatch(filterByNameDesc())
//   //   }
//   // }, [dispatch, alphabet])


//   // function handleOrderName(e) {
//   //   setAlphabet(e.target.value)
//   // }

//   function handlerSortName(e){
//     e.preventDefault();
//     dispatch(orderByName(e.target.value))
//     setOrden(`Ordenado ${e.target.value}`)

//   }

//   return (
//     <div className='ContainerLeft'>NavbarFilters


//       <div>
//         <select >
//           <option value=""> ORDER BY CONTINENT </option>
//           <option value="">ALL</option>
//           <option value="">AFRICA</option>
//           <option value="">ANTARTICA</option>
//           <option value="">ASIA</option>
//           <option value="">EUROPE</option>
//           <option value="">SOUTH AMERICA</option>
//           <option value="">NORTH AMERICA</option>
//           <option value="">OCEANIA</option>
//         </select>a


//         <select onChange={e => handlerSortName(e)}>
//           <option> ALPHABETICAL ORDER </option>
//           <option value="asc">A-Z</option>
//           <option value="desc">Z-A</option>
//         </select>




//         <select >
//           <option value=""> ORDER BY POPULATION </option>
//           <option value="">ASCENDENT</option>
//           <option value="">DESCENDENT</option>
//         </select>




//         <select >
//           <option value=""> ORDER BY ACTIVITY </option>
//           <option value="">ALL</option>
//           <option value="">TEST</option>
//         </select>


//       </div>



//     </div>
//   )
// }

