import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import './home.css'

function Home() {
  return (
    <div className='header'>
        <Header/>
        <Feed/>
        </div>
  )
}

export default Home