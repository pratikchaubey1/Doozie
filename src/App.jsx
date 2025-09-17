import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage/LandingPage'
import For_kido from './Page/For_kido'
import For_her from './Page/For_her'
import For_him from './Page/For_him'
import For_relationship from './Page/for_relationship'
import ScrollToTop from './Components/Top/ScrollToTop'


function App() {
  return (
    <div className='bg-amber-50'>
      <Navbar />
      <ScrollToTop />  
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/For_him' element={<For_him />} />
        <Route path='/For_her' element={<For_her />} />
        <Route path='/For_kido' element={<For_kido />} />
        <Route path='/for_relationship' element={<For_relationship />} />
      </Routes>

      {/* ScrollToTop button should be outside Routes */}
   
    </div>
  )
}

export default App
