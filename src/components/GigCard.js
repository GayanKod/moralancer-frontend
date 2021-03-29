import React from "react";
import { Link } from 'react-router-dom';

function GigCard(props) {
    return(
        <Link className='gigcards__item__link' to={`Gigs/${props.id}`}>
        <div className="Gig-container">
            <img className="gigimg" src={props.img} alt="" />
            <h4 className="label">{props.label}</h4>
            <h3 className="title">{props.gigTitle}</h3>
            <h4 className="seller">By {props.seller}</h4>
            <h4 className="price">{props.basicPrice}</h4>
            <h4 className="rate"><i class="fa fa-star" aria-hidden="true"></i> {props.starRate}</h4>
        </div>
        </Link>
    );
}

export default GigCard;