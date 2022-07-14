import React from 'react'
import { Link } from 'react-router-dom'


export const LandingPage = () => {
  return (
    <div>
      <div className='container'>
        <h1>Control of finances 💸 </h1>
        <ul>
            <li><Link to='/login'> Login </Link></li>
            <li><Link to='/register'> Register </Link></li>
        </ul>

      </div>
        
    </div>
  )
}
