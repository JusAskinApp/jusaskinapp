import React from 'react'
import Navbar from '../components/NavbarComponent'
import Subscribe from '../components/Subscribe'
import Features from '../components/Features'
import AboutSec from '../components/AboutSec'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Subscribe/>
        <Features/>
        <AboutSec/>
    </div>
  )
}

export default LandingPage