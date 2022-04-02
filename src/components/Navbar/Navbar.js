import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
    <NavLink to="" className="logo">Faster Quizz</NavLink>
    <div className="links">
    <NavLink to="" className="link">Home</NavLink>
    <NavLink to="/score-board" className="link">Leader Board 🚀</NavLink>
    <NavLink to="/login" className="link">Login</NavLink>
    </div>
    </nav>
    </>
  )
}
