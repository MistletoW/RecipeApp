// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'navy', color: 'white', padding: '20px', fontSize: '1.5em' }}>
    <h1 style={{ margin: '0', fontSize: '2em' }}>RecipeApp</h1>
    <ul style={{ display: 'flex', listStyle: 'none', margin: '0' }}>
      <li style={{ margin: '0 20px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
      <li style={{ margin: '0 20px' }}><Link to="/pantry" style={{ color: 'white', textDecoration: 'none' }}>Pantry</Link></li>
      <li style={{ margin: '0 20px' }}><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
    </ul>
  </nav>
);

export default Navbar;
