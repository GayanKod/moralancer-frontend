import SubNavbar from '../../SubNavbar';
import GigCard from '../../GigCard';
import '../../GigCard.css';
import Gigsdata from "../../Gigsdata";
import CreateGig from "./CreateGig";
import axios from "axios";
import React, {useState, useEffect} from "react";
import NavbarSO from '../../common/navbarSO';

function Gigs(){

  const [gigs, setGigs] = useState([]);

  useEffect(() => {
      function getGigs(){
          axios.get("http://localhost:5000/api/gigs/").then((res) => {
              setGigs(res.data);
          }).catch((err) => {
              console.log(err.message);
          })
      }
      getGigs();
  }, [])


  return(

    <>
        <NavbarSO />
        <SubNavbar/>
        <CreateGig />
        <div className='Gigs-container'>
        <GigCard props={gigs}/>
        </div>
    </>
  );
}


export default Gigs;
