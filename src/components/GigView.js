import React, { useEffect, useState } from 'react'
import Gigsdata from './Gigsdata'
import { Button } from './Button';
import './GigView.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


const GigView = (props) => {
    const [gigTitle, setgigTitle] = useState("");
    const [gigCategory, setgigCategory] = useState("");
    const [gigSearchTags, setgigSearchTags] = useState("");
    const [gigBasicPriceDesc, setgigBasicPriceDesc] = useState("");
    const [gigBasicPrice, setgigBasicPrice] = useState("");
    const [gigStandardPriceDesc, setgigStandardPriceDesc] = useState("");
    const [gigStandardPrice, setgigStandardPrice] = useState("");
    const [gigPremiumPriceDesc, setgigPremiumPriceDesc] = useState("");
    const [gigPremiumPrice, setgigPremiumPrice] = useState("");
    const [gigDesc, setgigDesc] = useState("");
    const [gigReq, setgigReq] = useState("");

    useEffect(() => {
        // Using Query Parameters
        // let params = (new URL(document.location)).searchParams;
        // let gigId = params.get('id');

        // Using id
        axios
            .get(`http://localhost:8070/gigs/get/${props.match.params.id}`)
            .then(res => [
                setgigTitle(res.data.gig.gigTitle),
                setgigCategory(res.data.gig.gigCategory),
                setgigSearchTags(res.data.gig.gigSearchTags),
                setgigBasicPriceDesc(res.data.gig.gigBasicPriceDesc),
                setgigBasicPrice(res.data.gig.gigBasicPrice),
                setgigStandardPriceDesc(res.data.gig.gigStandardPriceDesc),
                setgigStandardPrice(res.data.gig.gigStandardPrice),
                setgigPremiumPriceDesc(res.data.gig.gigPremiumPriceDesc),
                setgigPremiumPrice(res.data.gig.gigPremiumPrice),
                setgigDesc(res.data.gig.gigDesc),
                setgigReq(res.data.gig.gigReq)
            ] ).catch(error => console.log(error));

    }, []);

    if (props) {
        return (<>
            <div className="gigview-container">
                <div className="gig-operations">
                
                <div className="btn-edit">
                <Link to="/GigForm">
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 EDIT
                </Button>
                </Link>
                </div>
                <div className="btn-delete">
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 DELETE
                </Button>
                 </div>
                </div>

                <div className="gig-content">
                <div className="view-title">
                <h1>{gigTitle}</h1>
                </div>
                <img src={props.gigimg} alt={gigCategory} />
                <h4 >{gigCategory}</h4>
                <h4 >By {props.gigSeller}</h4>
                <h4> Rs. {gigBasicPrice}</h4>
                <h4>Ratings: <i class="fa fa-star" aria-hidden="true"></i> {props.starRate}</h4>
                </div>
            </div>
        </>
        )
    } else {
        return <>Loading...</>
    }

}

export default GigView;