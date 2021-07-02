import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'
import { Link } from 'react-router-dom';
import Home from '../../src/assets/img/home.jpg'

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="hero-img" src={Home} />
            <h1>Find the perfect freelance services for your business</h1>
            <p>
                what are you waiting for
            </p>
            <div className="hero-btns">
            <Link to="/SignIn">
             <Button 
             className="btns"
             buttonStyle="btn--outline"
             buttonSize="btn--large"
             >
                 SIGN IN
            </Button>
            </Link> 
            <Link to="/SignUpHome">
            <Button 
             className="btns"
             buttonStyle="btn--primary"
             buttonSize="btn--large">
                 SIGN UP
            </Button>
            </Link>
            </div>
        </div>
    )
}

export default HeroSection
