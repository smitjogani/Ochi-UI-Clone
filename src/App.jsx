import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import { Featured } from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full min-h-screen h-screen bg-white'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App