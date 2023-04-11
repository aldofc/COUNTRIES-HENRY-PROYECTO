import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import Linkedin from '../../Images/linkedink1.png'
import GitHub from '../../Images/github.png'
import Instagram from '../../Images/instagram5.jpg'


const Landing = () => {
  return (
    <div className='containerLanding'>

      <div className='titleLanding'> OPEN THE </div>
      <div className='titleLanding2'> WORLD</div>
      <div className='containerButtonLanding'>

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

      <div className='containerRedesSociales'>
        <ul class="wrapper">
          <li class="icon facebook">
            <span class="tooltip">Linkedin</span>
            <span><i class="fab fa-facebook-f"></i></span>
            <a href="https://www.linkedin.com/in/aldo-flores-carreon-20bb66256"><img className='logos' src={Linkedin} alt="linkedin" /></a>
          </li>



          <li class="icon twitter">
            <span class="tooltip">GitHub</span>
            <span>  <i class="fab fa-twitter"> </i></span>
            <a href="https://github.com/aldofc"><img className='logos' src={GitHub} alt="git" /></a>
          </li>



          <li class="icon instagram">
            <span class="tooltip">Instagram</span>
            <span><i class="fab fa-instagram"></i></span>
            <a href="https://www.instagram.com/aldo.fc1/"><img className='logos' src={Instagram} alt="instagram" /></a>
          </li>


        </ul>
      </div>



    </div>
  )
}

export default Landing