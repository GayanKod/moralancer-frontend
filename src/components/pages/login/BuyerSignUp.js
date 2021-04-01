import React from 'react'
import './SignUp.css'

function SellerSignUp() {
    return (
        <div className='buyer-signup-sontainer'>
        <div class="Signup-container" id="Signin-container">
        
           <div class="form-container signup-container">
           
           <div className="Signup">
           <h1>SIGN UP</h1>
           <form>
                <input type="text" 
                       id="Buyer-fname" 
                       placeholder="First Name"/>
                
                <input type="text" 
                       id="Buyer-lname" 
                       placeholder="Last Name"/>
               
                <input type="email" 
                       id="Buyer-email" 
                       placeholder="Email"/>
              
                    <input type="password" 
                        id="Buyer-password" 
                        placeholder="Password"/>
              
                    <input type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"/>
               
                <button 
                    type="submit" 
                    className="register-btn">
                    Register
                </button>
            </form>
            </div>
        
           </div>
            <div class="overlay-container">
        
               <div class="overlay">
            <div class="overlay-panel overlay-right">
            <h1>WELCOME TO "MORALNCER"!</h1>
            <h2>Register and start your journey here.</h2>
        </div>
        </div>
            
        
           </div>
        </div>   
        </div>
    )
}

export default SellerSignUp
