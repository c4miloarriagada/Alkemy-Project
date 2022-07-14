import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage/LandingPage'

import './App.css'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'

function App() {
  return(
    <div>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App