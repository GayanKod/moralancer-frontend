import React,{useState} from 'react';
import SubNavbar from '../../SubNavbar';
import Cards from '../../Cards';
import Navbar from '../../common/navbar';
import NavbarSO from '../../common/navbarSO';



function Services() {
    const [user,setUser] = useState(localStorage.getItem("user"))
    console.log(user)
    return (
        <div className="services-container">
            {user ? <NavbarSO/> : <Navbar/>}
            <SubNavbar/>
            <Cards/>
        </div>
    )
}

export default Services;