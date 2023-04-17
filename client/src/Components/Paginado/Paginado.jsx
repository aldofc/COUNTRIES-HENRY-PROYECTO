import React from 'react'
import './Paginado.css'

const Paginado = ({ countriesPerPage, countries, paginado, currentPage }) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {  //La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        pageNumbers.push(i + 1)
    }

    if (currentPage === pageNumbers.length + 1) {
        paginado(1)
    }

    return (
        <div className='containerResponsivePaginado'>
        <div className='containerPaginado'>

            <button className='buttonFlecha' onClick={() => paginado(currentPage === 1 ? pageNumbers.length : currentPage - 1)}> 🢀 </button>

            {pageNumbers &&
                pageNumbers.map(number => {
                    return (<button className='buttonFlecha'  key={number} onClick={() => paginado(number)}>{currentPage === number ? <b>{number}</b> : number}</button>)
                })}
            <button className='buttonFlecha' onClick={() => paginado(currentPage === 0 ? pageNumbers.length : currentPage + 1)}> 🢂 </button>
        </div>
        </div>
    )
}

export default Paginado



