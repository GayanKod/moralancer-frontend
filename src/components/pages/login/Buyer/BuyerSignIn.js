import React, { useState} from 'react';
import './BuyerSignIn.css'

function SellerSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
     <div className='buyer-signin-sontainer'>
<div class="Signin-container" id="Signin-container">

   <div class="form-container log-in-container">
   
   <div className="Login">
   <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
 
        <button type="submit" id="signin-btn" disabled={!validateForm()}>
          Sign In
        </button>
      </form>
    </div>

   </div>
    <div class="overlay-container">

       <div class="overlay">
    <div class="overlay-panel overlay-right">
    <h1>WELCOME BACK TO "MORALNCER"!</h1>
</div>
</div>
    

   </div>
</div>   
</div>
    )
}

export default SellerSignIn
