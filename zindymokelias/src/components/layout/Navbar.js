import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar flex right-X">
      <ul>
        <Link to='/'>
          <li>Link 1</li>
        </Link>
        <Link to='/'>
          <li>Link 2</li>
        </Link>
        <Link to='/posts'>
          <li>Link 3</li>
        </Link>
        <Link to='/posts'>
          <li>Link 4</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
