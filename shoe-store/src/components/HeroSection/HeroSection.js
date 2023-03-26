import React from 'react'
import { Button } from '../Button'

import '../../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className={'hero-container'}>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className={'hero-btns'}>
            <Button 
                Link='./products'
                className={'btns'}
                buttonStyle={'btn--primary'}
                buttonSize={'btn--large'}
            ><Link style={{textDecoration:"none", color:"white"}}to='/products'>GET STARTED</Link>
            </Button>

            </div>
        </div>
    )
}

export default HeroSection
