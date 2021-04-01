import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import './SignUpHome.css'

function SignUpHome() {
    return (
        <div  className="SignUpHome-container">
            <div className="SignUpHome-selection">

                  <div className="btns-seller">
                      <Link to="/SellerSignUp">
             <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 As a Seller
                </Button>
                </Link>
                </div>
                
                <div className="btns-buyer">
                <Link to="/BuyerSignUp">
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                 As a Buyer
                </Button>
                </Link>
                </div>
                </div>
        </div>
    )
}

export default SignUpHome
