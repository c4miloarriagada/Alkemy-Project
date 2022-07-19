import React from 'react'
import { Link } from 'react-router-dom'

import { Container,Button, Alert } from 'react-bootstrap'



export const LandingPage = () => {
  return (
    <div className='background'> 
    
        <h1 className='text-center display-3 font-weight-bold'>Control of finances app 💰</h1>
        <Container className='mt-5 justify-content-center d-flex flex-column text-center'>
       

          <Container className='mt-5'>
          <Alert  className="mt-5" variant="info">
          Hi there! This app was built for <a  href='https://www.alkemy.org/' target="_blank">Alkemy.org</a>  fullstack project.<br/>
          Here, you can management your finances and bring the control of your deposits and withdraws, please login or register for start!
          </Alert>
            <Button className='mt-5' as={Link} to={'/login'}> Login </Button>
              {' '}
            <Button className='mt-5' as={Link} to={'/register'}> Register </Button>
          </Container>
       

        </Container>

 
        
    </div>
  )
}
