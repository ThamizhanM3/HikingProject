import React from 'react'
import Logo from '../assets/Images/Logo.svg'
import userIcon from '../assets/Images/userIcon.png'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="left">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="middle">
                <div className="link">
                    <h3 className="text">Equipment</h3>
                </div>
                <div className="link">
                    <h3 className="text">About Us</h3>
                </div>
                <div className="link">
                    <h3 className="text">Blog</h3>
                </div>
            </div>
            <div className="right">
                <img src={userIcon} alt="Logo"/>
                <div className="link">
                    <h3 className="text">Account</h3>
                </div>
            </div>
        </div> 
    )
}

export default Navbar