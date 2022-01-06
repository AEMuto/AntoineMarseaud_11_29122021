import React from 'react';
import chevron from '../images/chevron.svg';

class Dropdown extends React.Component {
  state = {
    isOpen: false,
  }

  toggleDropdown = () => {
    const current = this.state.isOpen;
    this.setState({isOpen: !current});
  }

  renderData = (data) => {
    if (Array.isArray(data)) {
      return <ul>{data.map((equipment, index) => <li
        key={index}>{equipment}</li>)}</ul>;
    } else {
      return <p>{data}</p>;
    }
  }

  render() {
    return (
      <div className={`dropdown ${this.state.isOpen ? 'open' : 'close'}`}>
        <div className="dropdown__title" onClick={this.toggleDropdown}>
          <h3>{this.props.title}</h3>
          <img src={chevron} className="chevron" alt=""/>
        </div>
        <div className="dropdown__content">
          {this.renderData(this.props.data)}
        </div>
      </div>
    )
  }
}

export default Dropdown;