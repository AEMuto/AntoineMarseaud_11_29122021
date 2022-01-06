import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link className="nav__logo" to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <div className="nav__links">
          <Link className="nav__link" to="/">Accueil</Link>
          <Link className="nav__link" to="/about">À Propos</Link>
        </div>
      </nav>
    )
  }
}

export default Nav;