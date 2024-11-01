import React from 'react'
import Navbar from './Navbar'
import '../css/HomePage.css'
import Hero from './Hero'
import Content from './Content'
import Footer from './Footer'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Navbar />
            <Hero />
            <Content />
            <Footer /> 
        </div>
    )
}

export default HomePage