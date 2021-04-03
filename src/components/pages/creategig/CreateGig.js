import React from "react";
import "./CreateGig.css";
import { Link } from 'react-router-dom';

function CreateGig(){
  
    return(
        <div className="createGigWrapper">
            <div className="createGigbutton">
              <Link to="/GigForm" style={{ textDecoration: 'none' }}>
                <div className="createGigIcon" >
                <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <span>Create a Gig</span>
                </Link>
            </div>
      
        </div>
    );
}

export default CreateGig;