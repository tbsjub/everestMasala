import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Recommendations from './Components/Recommendations.jsx'
import Gallery from './Components/Gallery.jsx'
import Reservation from './Components/Reservation.jsx'
import Partners from './Components/Partners.jsx'
import Footer from './Components/Footer.jsx'
import Menu from './Components/Menu.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
            <Hero/>
            <About/>
            <Recommendations/>
            <Gallery/>
            <Reservation/>
            <Partners/>
            <Footer/>
          </>
        } />
        
        {/* Menu page route */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Add more routes as needed */}
        {/* <Route path="/branches" element={<Branches />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
      </Routes>
    </>
  )
}

export default App
