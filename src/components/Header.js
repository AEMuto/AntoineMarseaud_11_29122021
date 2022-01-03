import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="header__logo" to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <nav className="header__nav">
          <Link className="header__nav__link" to="/">Accueil</Link>
          <Link className="header__nav__link" to="/about">À Propos</Link>
        </nav>
      </header>
    )
  }
}

export default Header;