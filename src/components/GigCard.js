import React from "react";
import { Link } from 'react-router-dom';

function GigCard({props}) {
    return(
        <Link className='gigcards__item__link' to={`Gigs/${props.id}`}>
        
            {props.map((gig,key)=>(
                <div className="Gig-container">
                <img className="gigimg" src={gig.img} alt="" />
                <h4 className="label">{gig.gigCategory}</h4>
                <h3 className="title">{gig.gigTitle}</h3>
                <h4 className="seller">By {gig.seller}</h4>
                <h4 className="price">Rs. {gig.gigBasicPrice}</h4>
                <h4 className="rate"><i class="fa fa-star" aria-hidden="true"></i> {gig.starRate}</h4>
                </div>
            ))}
        
        </Link>
        
    );
}



export default GigCard;