import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar flex right-X">
      <ul>
        <Link to='/home'>
          <li>Į pradžią</li>
        </Link>
        <Link to='/about'>
          <li>Apie mane</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
