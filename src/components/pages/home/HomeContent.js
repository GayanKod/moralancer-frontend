import React from 'react'
import { Button } from '../../Button'
import './HomeContent.css'

function HomeContent() {
    return (
        <div className="homeContent-container">
            
            <h1>"EARN WHILE YOU LEARN"</h1>
            <p> Are you looking for a way to earn money while studying?</p>
            <p>  You're in the right place.</p>
            <p> - Create a new gig - </p>
            <p>Start making money online today!</p>
            <div className="homeContent-btns">
             <Button 
             className="btns"
             buttonStyle="btn--outline"
             buttonSize="btn--large"
             >
                 Create a New Gig
            </Button>
            </div>
        </div>
    )
}

export default HomeContent