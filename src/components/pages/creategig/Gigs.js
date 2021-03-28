import React from 'react';
import SubNavbar from '../../SubNavbar';
import GigCard from '../../GigCard';
import '../../GigCard.css';
import Gigsdata from "../../Gigsdata";
import CreateGig from "./CreateGig";

function GigCreate(Gigsdata){
  return(
    <GigCard
    key={Gigsdata.gigId}
    img={Gigsdata.gigimg}
    gigTitle={Gigsdata.gigTitle}
    label={Gigsdata.giglabel}
    seller={Gigsdata.gigseller}
    basicPrice={Gigsdata.gigprice}
    starRate={Gigsdata.avgRate}
    path={Gigsdata.gigpath}
    />
  );
}

function Gigs() {
    return (
        <>
        <SubNavbar/>
        <h1 className="header">My Gigs</h1>
        <CreateGig />
        <div className='Gigs-container'>
        {Gigsdata.map(GigCreate)}
        </div>
    </>
    )
}

export default Gigs;
