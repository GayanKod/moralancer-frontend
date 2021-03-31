import SubNavbar from '../../SubNavbar';
import GigCard from '../../GigCard';
import '../../GigCard.css';
import Gigsdata from "../../Gigsdata";
import CreateGig from "./CreateGig";
import axios from "axios";
import React, {useState, useEffect} from "react";


function Gigs(){

  const [gigs, setGigs] = useState([]);

  useEffect(() => {
      function getGigs(){
          axios.get("http://localhost:8070/gigs/").then((res) => {
              setGigs(res.data);
          }).catch((err) => {
              console.log(err.message);
          })
      }
      getGigs();
  }, [])


  return(

    <>
        <SubNavbar/>
        <h1 className="header">GIGS</h1>
        <CreateGig />
        <div className='Gigs-container'>
        <GigCard props={gigs}/>
        </div>
    </>
  );
}


export default Gigs;
