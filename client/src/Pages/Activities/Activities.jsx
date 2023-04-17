import { React, useEffect } from 'react'
import { getAllActivities, Loading } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/Loader/Loader'
import CardActivity from '../../Components/CardActivity/CardActivity'
import { Link } from 'react-router-dom'
import './Activities.css'

const Activities = () => {

    const dispatch = useDispatch()
    const activity = useSelector(state => state.allActivities)
    const loader = useSelector(state => state.loader)

    useEffect(() => {

        dispatch(Loading())
        setTimeout(async () => {
            await dispatch(getAllActivities())
            dispatch(Loading())
        }, 1800)
    }, [dispatch])

    if (loader === true) {
        return (
            <section>
            <div className='containerActivities'>
                <br></br>
                <div className='moveButoon'>
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
                <br></br>
                <div className='CardsContainer'>

                    {activity.map(activities => {
                        return <CardActivity
                            name={activities.name}
                            difficulty={activities.difficulty}
                            duration={activities.duration}
                            season={activities.season}
                        />

                    })}

                </div>

                

            </div>
            </section>
        )
    } else {
        return (
            <Loader />
        )
    }
}


export default Activities