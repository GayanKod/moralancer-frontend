import React,{useState} from 'react'
import SubNavbar from '../../SubNavbar'
import AboutusCards from '../../AboutusComponents/AboutusCards'
import NavbarSO from '../../common/navbarSO'
import Navbar from '../../common/navbar'

function Aboutus() {
    
    const [user,setUser] = useState(localStorage.getItem("user"))
    console.log(user)
    return (
        <div className="aboutus-container">
        {user ? <NavbarSO/> : <Navbar/>}
            {/* <Navbar /> */}
            <SubNavbar/>
            <AboutusCards/>
        </div>
    )
}

export default Aboutus
