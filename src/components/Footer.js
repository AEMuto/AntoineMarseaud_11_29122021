import React from 'react';
import logo from '../images/logo-white.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <img className="footer__logo" src={logo} alt="logo"/>
          <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer;