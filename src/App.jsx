import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <div className='w-full min-h-screen h-screen bg-white'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
    </div>
  )
}

export default App