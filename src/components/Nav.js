import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Nav extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <nav className="nav">
        <Link className="nav__logo" to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <div>
          <Link
            className={location === '/' ? 'nav__link current' : 'nav__link'}
            to="/">
            Accueil
          </Link>
          <Link
            className={location === '/about' ? 'nav__link current' : 'nav__link'}
            to="/about">
            À Propos
          </Link>
        </div>
      </nav>
    )
  }
}

export default Nav;