import React from 'react'
import Layaout from '../components/Layaout/Layaout'
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css'
import Banner from '../assets/images/banner.jpeg';

const Home = () => {
  return (
    <Layaout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food In Bangladesh</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
          
        </div>
      </div>
    </Layaout>
  )
}

export default Home