import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="hero-img" src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
            <h1>ADVENTURE AWAITS</h1>
            <p>
                what are you waiting for
            </p>
            <div className="hero-btns">
            <Link to="/SignInHome">
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
