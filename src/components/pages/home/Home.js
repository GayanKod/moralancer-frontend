import React from 'react'
import SubNavbar from '../../SubNavbar'
import HomeContent from './HomeContent'
import NavbarSO from '../../common/navbarSO'

function home() {
    return (
        <div className="home-container">
            <NavbarSO />
            <SubNavbar/>
           <HomeContent/> 
        </div>
    )
}

export default home