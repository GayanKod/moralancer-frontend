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
    const [gigImage, setgigImage] = useState("");
    const [gigReq, setgigReq] = useState("");


    useEffect(() => {
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
                setgigImage(res.data.gig.gigImage),
                setgigReq(res.data.gig.gigReq)
            ] ).catch(error => console.log(error));

    }, []);

    const [Gig, setGig] = useState([]);
    //Delete Gig by Id
    const deleteGig = id => {
        axios.delete(`http://localhost:8070/gigs/delete/${props.match.params.id}`)
        .then(res =>
        window.location.href='/Gigs',
        alert("Gig Deleted"));
        setGig(Gig.filter(elem => elem._id !== id));
    }

    if (props) {
        return (<>
            <div className="gigview-container">
                <div className="gig-operations">
                
                <div className="btn-edit">
                <Link to={`/Gigs/edit/${props.match.params.id}`}>
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 EDIT
                </Button>
                </Link>
                </div>
                <div className="btn-delete">
                <Button className="btns"
                onClick={() => deleteGig(Gig._id)}
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
                <img className="gig-view-image" src={`/uploads/gigs/${gigImage}`} alt={gigCategory} />
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