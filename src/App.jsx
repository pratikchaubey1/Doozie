import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </>
  )
}

export default App