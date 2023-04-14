import { React, useEffect, useState } from 'react'
import { getCountriesById, Loading } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import { Link } from 'react-router-dom'
import './Details.css'

const Details = () => {

  const dispatch = useDispatch()
  const pais = useSelector((state) => state.countriesById)
  const loader = useSelector(state => state.loader)
  //const {activities} = pais;

  const { id } = useParams()

  useEffect(() => {

    setTimeout(() => {
      dispatch(Loading())
      dispatch(getCountriesById(id))
      dispatch(Loading())
    }, 1800)

  }, [dispatch])

  if (loader === true && pais[0] && pais[0].id == id) {
    return (

      <div className='backGroundDetail'>





        <br></br>

        <div className='containerDetail'>



          <div>
            <h2 className='titleDetail'>{pais[0].name}</h2>
            <img className='imgDetails' src={pais[0].image} alt="not found" />

          </div>
          <div className='containerDetails2'>
            <h3>id:</h3><p>{pais[0].id}</p>
            <h3>continent:</h3><p>{pais[0].continent}</p>
            <h3>capital:</h3><p>{pais[0].capital}</p>

            <h3>subregion:</h3><p>{pais[0].subregion}</p>
            <h3>area:</h3><p>{pais[0].area}</p>
            <h3>population:</h3><p>{pais[0].population}</p>
            {/* <h3>actividades:</h3><p>{pais[0].activities}</p> */}

          </div>




          <div className='acomodarBoton'>
            <Link to={'/home'}>
              <button type="button" class="btn"><strong>HOME</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </button>
            </Link>
          </div>





        </div>
      </div>
    )
  } else {
    return (
      <Loader />
    )
  }
}


export default Details