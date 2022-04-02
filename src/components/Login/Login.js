import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div className="login-container">
        <h3 className="login-heading">Account Information</h3>
        <div className="login-card">
            <h2>LogIn</h2>
            <form className="logIn-form">
                <label htmlFor='login-eamil-input' aria-required="true">E-mail address<span>*</span></label>
                <input type="email" name="user-email" id="login-eamil-input"/>

                <label htmlFor='login-password' aria-required="true">Password<span>*</span></label>
                <input type="password" name="login-password" id="login-password"/>

                <button className="forgot-password-link">Forgot your password?</button>

                <button className="login-btn" type="submit"> Sign In </button>
            </form>
            <h2>OR</h2>
            <button className="signIn-with-google-btn"><i className="lni lni-google"></i> <span>Sign in with google</span></button>

            <p>I Don't Have An Account</p>
            <Link to='/sign-up'>CREATE AN ACCOUNT</Link>
        </div>
    </div>
    </>
  )
}
