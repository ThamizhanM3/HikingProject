import React from 'react'
import Line from '../assets/Images/line.png'
import RightArrow from '../assets/Images/arrow_rightward.png'

import '../css/LeftAligned.css'

const LeftAligned = ({number, top, heading, content, image}) => {
    return (
        <div className='LeftAligned'>
            <div className="left">
                <div className="num">
                    <h1> {number} </h1>
                </div>
                <div className="content">
                    <div className="top">
                        <div className="left">
                            <img src={Line} alt="" />
                        </div>
                        <div className="right">
                            <h4> {top} </h4>
                        </div>
                    </div>
                    <div className="heading">
                        <h1> {heading} </h1>
                    </div>
                    <div className="content">
                        <h5> {content} </h5>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <h4>read more</h4>
                        </div>
                        <div className="right">
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default LeftAligned