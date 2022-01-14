import React from 'react';
import PropTypes from 'prop-types';

import chevron from '../images/chevron.svg';

class Dropdown extends React.Component {
  // Par défaut les dropdowns ont un état fermé.
  state = {
    isOpen: false,
  }

  /**
   * Méthode pour basculer l'état d'ouvert à fermé, et vice-versa.
   */
  toggleDropdown = () => {
    const current = this.state.isOpen;
    this.setState({ isOpen: !current });
  }

  renderData = (data) => {
    // Si le data passé en argument est une liste alors il s'agit des équipements
    // et on fait le nécessaire pour les afficher correctement.
    if (Array.isArray(data)) {
      return <ul>{data.map((equipment, index) => <li
        key={index}>{equipment}</li>)}</ul>;
    } else {
      // Sinon il s'agit de la description. On effectue alors son rendu dans
      // une balise paragraphe.
      return <p>{data}</p>;
    }
  }

  render() {
    const { title, data } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={`dropdown ${isOpen ? 'open' : 'close'}`}>
        <div className="dropdown__title" onClick={this.toggleDropdown}>
          <h3>{title}</h3>
          <img src={chevron} className="chevron" alt="indicateur"/>
        </div>
        <div className="dropdown__content">
          {this.renderData(data)}
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ])
}

export default Dropdown;