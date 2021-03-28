import React from 'react';
import { Link } from 'react-router-dom';
import SubNavbar from '../../SubNavbar';
import GigCard from '../../GigCard';
import '../../GigCard.css';
import Gigsdata from "../../Gigsdata";
import CreateGig from "./CreateGig";

function Gigs() {
    return (
        <>
        <SubNavbar/>
        <h1 className="header">My Gigs</h1>
        <CreateGig />
        <div className='Gigs-container'>
            <GigCard 
              img={Gigsdata[0].gigimg}
              gigTitle={Gigsdata[0].gigTitle}
              label={Gigsdata[0].giglabel}
              seller={Gigsdata[0].gigseller}
              basicPrice={Gigsdata[0].gigPrice}
              starRate={Gigsdata[0].avgRate}
              path={Gigsdata[0].gigpath}
            />

            <GigCard 
              img={Gigsdata[1].gigimg}
              gigTitle={Gigsdata[1].gigTitle}
              label={Gigsdata[1].giglabel}
              seller={Gigsdata[1].gigseller}
              basicPrice={Gigsdata[1].gigPrice}
              starRate={Gigsdata[1].avgRate}
              path={Gigsdata[1].gigpath}
            />

            <GigCard 
              img={Gigsdata[2].gigimg}
              gigTitle={Gigsdata[2].gigTitle}
              label={Gigsdata[2].giglabel}
              seller={Gigsdata[2].gigseller}
              basicPrice={Gigsdata[2].gigPrice}
              starRate={Gigsdata[2].avgRate}
              path={Gigsdata[2].gigpath}
            />

            <GigCard 
              img={Gigsdata[3].gigimg}
              gigTitle={Gigsdata[3].gigTitle}
              label={Gigsdata[3].giglabel}
              seller={Gigsdata[3].gigseller}
              basicPrice={Gigsdata[3].gigPrice}
              starRate={Gigsdata[3].avgRate}
              path={Gigsdata[3].gigpath}
            />

            <GigCard 
              img={Gigsdata[4].gigimg}
              gigTitle={Gigsdata[4].gigTitle}
              label={Gigsdata[4].giglabel}
              seller={Gigsdata[4].gigseller}
              basicPrice={Gigsdata[4].gigPrice}
              starRate={Gigsdata[4].avgRate}
              path={Gigsdata[4].gigpath}
            />
        </div>
    </>
    )
}

export default Gigs;
