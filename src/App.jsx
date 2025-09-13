import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing_Page from './Components/Landing_Page'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Landing_Page/>}/>
    </Routes>
    </>
  )
}

export default App