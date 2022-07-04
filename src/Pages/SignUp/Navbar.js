import React from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useToastContext, useUserAuth } from '../../context';

export default function Navbar() {
  const { isLogIn , setIsLogIn } = useUserAuth();
  const notify = useToastContext();
  const navigate = useNavigate('')

  const logoutHandler = () => {
     localStorage.clear();
     setIsLogIn(false);
     navigate('/');
     notify('Successfully Logout!' , {type : 'success'});
  }

  return (
    <>
    <nav className="navbar">
    <NavLink to="/" className="logo">Faster Quizz</NavLink>
    <div className="links">
    {/* <NavLink to="/" className="link">Home</NavLink> */}
    {/* <NavLink to="/leaderBoard" className="link">Leader Board 🚀</NavLink> */}
    {isLogIn
    ?  <div className="link" onClick={logoutHandler}> Logout </div>
    :  <NavLink to="/login" className="link">Login</NavLink>
    }
    </div>
    </nav>
    </>
  )
}
