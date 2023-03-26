import { Link } from "react-router-dom";
import React from 'react'
import './Home.css';


function Home() {
    return (
        <div translate="no">
        <div className="container">
       <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
        <div className="heading">
        <span>
            SPACEX
        </span>
        <br />
        <span>
            LAUNCHES
        </span>
        <br />
        <Link to="/launches">
        <button className="btn">Explore Now</button>
        </Link>
        </div>
        </div>
        </div>
    )   
}

export default Home;
