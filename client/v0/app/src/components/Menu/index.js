import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // <div className="nav justify-content-between align-items-center">
    //   <Link className="navbar-brand" to="/">A-book</Link>
    //   { login && registration ? <h2>Федор Шаляпин</h2> : <MenuItem />}
    // </div>
  );
}

Menu.propTypes = {

};

export default Menu;