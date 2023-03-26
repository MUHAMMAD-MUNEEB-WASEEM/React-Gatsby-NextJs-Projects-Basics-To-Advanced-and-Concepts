import React from 'react'

import img from '../images/image1.png';


import './Hero.css';


function Hero() {
    return (
    <div className="container1">
         <div className="row">
                <div className="col-2">
                    <h1>Change your lens,<br />Change your Story.</h1>
                    <p>
                        When words becomes unclear, I shall focus with photographs.<br />When
                        Images becomes inadequate, I shall be content with silence.
                    </p>
                    <button className="btn1">Explore Now</button>
                </div>
                <div className="col-2">
                    <img src={img} alt="" />
                </div>
            </div>
    </div>
    )
}

export default Hero;