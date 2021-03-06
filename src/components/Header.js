import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { title, image } = this.props;
    return (
      <header className="header">
        <h1 className="header__title">{title ? title : ''}</h1>
        <img className="header__background" src={image} alt=""/>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

export default Header;