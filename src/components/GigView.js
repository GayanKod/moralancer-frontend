import React, { useEffect, useState } from 'react'
import Gigsdata from './Gigsdata'
import { Button } from './Button';
import './GigView.css'
import { Link } from 'react-router-dom';


const GigView = () => {
    const [selectedGig, setSelectedGig] = useState(null)

    useEffect(() => {
        // Using Query Parameters
        // let params = (new URL(document.location)).searchParams;
        // let gigId = params.get('id');

        // Using id
        let urlArr = window.location.href.split('/')
        let gigId = urlArr[urlArr.length - 1]
        let gig = Gigsdata.find(gig => gig.gigId == gigId)
        setSelectedGig(gig)

    }, [])

    if (selectedGig) {
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
                <h1>{selectedGig.gigTitle}</h1>
                </div>
                <img src={selectedGig.gigimg} alt={selectedGig.label} />
                <h4 >{selectedGig.label}</h4>
                <h4 >By {selectedGig.gigseller}</h4>
                <h4>{selectedGig.basicPrice}</h4>
                <h4>Ratings: <i class="fa fa-star" aria-hidden="true"></i> {selectedGig.starRate}</h4>
                </div>
            </div>
        </>
        )
    } else {
        return <>Loading...</>
    }

}

export default GigView