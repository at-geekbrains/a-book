import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <header className="header">
      <Link 
        to="/"
        className="logo" 
        tabindex="0">
          A-Book
      </Link>
    </header>
  );
}

export default Menu;