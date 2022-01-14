import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Nav extends React.Component {
  render() {
    const { pathname } = this.props;

    return (
      <nav className="nav">
        <Link className="nav__logo" to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <div>
          <Link
            className={pathname === '/' ? 'nav__link current' : 'nav__link'}
            to="/">
            Accueil
          </Link>
          <Link
            className={pathname === '/about' ? 'nav__link current' : 'nav__link'}
            to="/about">
            À Propos
          </Link>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  pathname: PropTypes.string
}

export default Nav;