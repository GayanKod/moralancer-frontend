import React from 'react'
import { Button } from '../../Button'
import './HomeContent.css'
import { Link } from 'react-router-dom';

function HomeContent() {
    return (
        <div className="homeContent-container">
            
            <h1>"EARN WHILE YOU LEARN"</h1>
            <p> Are you looking for a way to earn money while studying?</p>
            <p>  You're in the right place.</p>
            <p>Start making money online today!</p>
            <div className="homeContent-btns">
            <Link to="/GigForm">
             <Button 
             className="btns"
             buttonStyle="btn--outline"
             buttonSize="btn--large"
             >
                 Create a New Gig
            </Button>
            </Link>
            </div>
        </div>
    )
}

export default HomeContent