import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.title ?
          <h1 className="header__title">{this.props.title}</h1> : ''}
      </header>
    )
  }
}

export default Header;