import React from 'react'
import { Button } from '../../Button';
import './SignUpHome.css'

function SignUpHome() {
    return (
        <div  className="SignUpHome-container">
            <div className="SignUpHome-selection">
                  <div className="btns-seller">
             <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 As a Seller
                </Button>
                </div>
                <div className="btns-buyer">
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 As a Buyer
                </Button>
                </div>
                </div>
        </div>
    )
}

export default SignUpHome
