import React from 'react'
import { Link } from 'react-router-dom'

import { Container,Button } from 'react-bootstrap'



export const LandingPage = () => {
  return (
    <div > 
    
        <h1 className='text-center display-3 '>Control of finances 💸 </h1>
        <Container className='mt-5'>

          
            <Button className='justify-content-center d-flex flex-column' as={Link} to={'/login'}> Login </Button>
            <Button className='justify-content-center d-flex flex-column' as={Link} to={'/register'}> Register </Button>
       

        </Container>

 
        
    </div>
  )
}
