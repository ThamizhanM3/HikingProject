import React from 'react'
import Line from '../assets/Images/line.png'
import DownArrow from '../assets/Images/arrow_downward.png'
import Instagram from '../assets/Images/instagramIcon.png'
import Twitter from '../assets/Images/twitterIcon.png'
import '../css/Hero.css'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="left">
                <div className="text">
                    <h5>Follow us</h5>
                </div>
                <div className="icons">
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
            <div className="center">
                <div className="top">
                    <div className="left">
                        <img src={Line} alt="" />
                    </div>
                    <div className="right">
                        <h4>A HIKING GUIDE</h4>
                    </div>
                </div>
                <div className="mid">
                    <h1>Be Prepared For The Mountains And Beyond!</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h4>scroll down</h4>
                    </div>
                    <div className="right"> 
                        <img src={DownArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Hero