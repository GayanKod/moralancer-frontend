import React from 'react'
import SubNavbar from '../../SubNavbar'
import HomeContent from './HomeContent'

function home() {
    return (
        <div className="home-container">
            <SubNavbar/>
           <HomeContent/> 
        </div>
    )
}

export default home