import React from 'react'
import Logo from '../assets/Images/Logo.svg'

import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="left">
                <div className="top">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                        <h3>Get out there & discover your next slope, mountain & destination!</h3>
                    </div>
                </div>
                <div className="bottom">
                    <div className="copy">
                        <h3>Copyright 2023 MNTN, Inc. Terms & Privacy</h3>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="left">
                    <div className="head">
                        <h3>More on The Blog</h3>
                    </div>
                    <div className="body">
                        <ul>
                            <li><h6>About MNTN</h6></li>
                            <li><h6>Contributors & Writers</h6></li>
                            <li><h6>Write For Us</h6></li>
                            <li><h6>Contact Us</h6></li>
                            <li><h6>Contact Us</h6></li>
                            <li><h6>Privacy Policy</h6></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <div className="head">
                            <h3>More on The MNTN</h3>
                        </div>
                        <div className="body">
                            <ul>
                                <li><h6>The Team</h6></li>
                                <li><h6>Jobs</h6></li>
                                <li><h6>Press</h6></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer