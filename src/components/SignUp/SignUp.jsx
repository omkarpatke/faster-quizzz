import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
    <div className="login-container">
        <h3 className='login-container-heading'>Account Information</h3>
        <div className="login-card">
            <h2>Sign Up</h2>
            <form className="logIn-form">
                <label htmlFor="full-name" aria-required="true">Full Name<span>*</span></label>
                <input type="text" name="ful-name" id="full-name"/>

                <label htmlFor='login-eamil-input' aria-required="true">E-mail address<span>*</span></label>
                <input type="email" name="user-email" id="login-eamil-input"/>

                <label htmlFor="login-password" aria-required="true">Password<span>*</span></label>
                <input type="password" name="login-password" id="login-password"/>

                <label htmlFor="login-confirm-password" aria-required="true"> Confirm Password<span>*</span></label>
                <input type="password" name="login-confirm-password" id="login-confirm-password"/>

                <button className="login-btn" type="submit"> Sign Up </button>
            </form>
            <Link to="/login">Already have an Account?</Link>
            <h2>OR</h2>
            <button className="signUp-with-google-btn"><i className="lni lni-google"></i> <span>Sign in with google</span></button>
        </div>
    </div>
    </>
  )
}
