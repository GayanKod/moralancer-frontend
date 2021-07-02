import React from 'react'
import "./welcome.css"
import HeroSection from '../../HeroSection'
import Navbar from '../../common/navbar';

export default function Welcome() {
    return (
        <div className="Welcome">
          <Navbar />
          <HeroSection/>
        </div>
      );
}