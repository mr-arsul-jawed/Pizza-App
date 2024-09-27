import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faUserShield } from '@fortawesome/free-solid-svg-icons'; 

import '../CSS/Navbar.css'; 

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 id="nav_h2">PIZZA GHAR</h2>
      <Link className='nav_things' to="/home">Home</Link>
      <Link className='nav_things' to="/contact">Contact</Link>
      <Link className='nav_things' to="/cart">Cart</Link>

      {/* Sign In Button with Icon */}
      <Link to="/login">
        <button id="nav_button1" type="button">
          <FontAwesomeIcon icon={faSignInAlt} /> Sign In
        </button>
      </Link>

      {/* Sign Up Button with Icon */}
      <Link to="/register">
        <button id="nav_button2" type="button">
          <FontAwesomeIcon icon={faUserPlus} /> Sign Up
        </button>
      </Link>

      {/* Admin Dashboard with Icon */}
      <Link to="/admindashboard">
        <button id="nav_button2" type="button">
          <FontAwesomeIcon icon={faUserShield} /> Admin
        </button>
      </Link>
    </div>
  );
}
