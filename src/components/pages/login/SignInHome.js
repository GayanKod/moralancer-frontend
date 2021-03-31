import React from 'react'
import { Button } from '../../Button';
import './SignInHome.css'
import { Link } from 'react-router-dom';

function SignInHome() {
    return (
        <div className="SignInHome-container">
         <div className="SignInHome-selection">
             

<div className="btns-seller">
<Link to="/SellerSignIn">
<Button className="btns"
   buttonStyle="btn--primary"
   buttonSize="btn--large">
    As a Seller
   </Button>
   </Link>
   </div>
   
   <div className="btns-buyer">
       <Link to="/BuyerSignIn">
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

export default SignInHome
