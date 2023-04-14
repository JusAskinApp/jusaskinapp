import React from 'react'
import Navbar from '../components/NavbarComponent'
import Subscribe from '../components/Subscribe'
import Features from '../components/Features'
import AboutSec from '../components/AboutSec'
import Statement from '../components/Statement'
import Footer from '../components/Footer'
import WhitePaperPopUp from '../components/WhitePaper'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <WhitePaperPopUp/>
        <Subscribe/>
        <Features/>
        <AboutSec/>
        <Statement/>
        <Footer/>
    </div>
  )
}

export default LandingPage