import React , { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useToastContext, useUserAuth } from '../../context/index';

export default function Login() {
   const [email , setEmail] = useState();
   const [password , setPassword] = useState();
   const [hidePassword , setHidepassword] = useState(true); 
   const  notify  = useToastContext();
   const { setIsLogIn } = useUserAuth();
   const navigate = useNavigate();

   const loginHandler = async(e) => {
     e.preventDefault();
    if(email && password){
       localStorage.setItem('token' , 'omkarhasaprovedthelogin');
       if(localStorage.getItem('token')){
         setIsLogIn(true);
         setEmail('');
         setPassword('');
         notify('Login Successfully!' , {type : 'success'});
         navigate('/')
       }
    }else{
      notify('Please Fill Empty Fields' , {type:'warning'})
    }
  }

  const guestLoginHandler = () => {
    setEmail('guest1234@gmail.com');
    setPassword('guest1234')
  }

  return (
    <>
    <div className="login-container">
        <h3 className="login-heading">Account Information</h3>
        <div className="login-card">
            <h2>LogIn</h2>
            <form className="logIn-form" onSubmit={loginHandler}>
            <label htmlFor='login-eamil-input' aria-required="true">E-mail address<span>*</span></label>
                <input type="email" placeholder='johncena@gmail.com' name="user-email" required id="login-eamil-input" value={email} onChange={ event => setEmail(event.target.value)}/>

                <label htmlFor="login-password" aria-required="true">Password<span>*</span></label>
                <input className='password-input' type={hidePassword ? "password" : 'text'} placeholder='********' name="login-password" required id="login-password" value={password} onChange={ event => setPassword(event.target.value)}/>
                <i className={ hidePassword ? 'bi bi-eye-slash eye-icon' : 'bi bi-eye eye-icon'} id="togglePassword" onClick={() => setHidepassword(prev => !prev)}></i>


                <button className="login-btn" type="submit" onClick={loginHandler}> Login In </button>
            </form>
            <button className="login-btn" type="submit" onClick={guestLoginHandler}> Login as Guest </button>
            <p>I Don't Have An Account</p>
            <Link to='/sign-up'>CREATE AN ACCOUNT</Link>
        </div>
    </div>
    </>
  )
}
