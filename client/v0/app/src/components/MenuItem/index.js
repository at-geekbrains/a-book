import React from 'react';
import { Link } from 'react-router-dom';

import './MenuItem.css';

const MenuItem = () => {
  return (
    <React.Fragment>
      <ul className="nav">
        <li className="nav__item mr-5">
          <Link className="nav__item-link" to="/login">Войти</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__item-link" to="/registration">Регистрация</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default MenuItem;