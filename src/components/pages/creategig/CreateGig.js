import React from "react";
import "./CreateGig.css";

function CreateGig(){
    return(
        <div className="createGigWrapper">
            <div className="createGigbutton">
                <div className="createGigIcon">
                <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <span>Create a Gig</span>
            
            </div>
        </div>
    );
}

export default CreateGig;