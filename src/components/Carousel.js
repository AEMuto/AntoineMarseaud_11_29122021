import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import chevronRight from '../images/chevron-carousel-right.svg';
import chevronLeft from '../images/chevron-carousel-left.svg';

class Carousel extends React.Component {
  // On initialise l'état avec une quantité d'images
  // dans le carousel à 0 et l'image actuelle à 1
  state = {
    quantity: 0,
    current: 1
  }

  /**
   * Rendu conditionnel des contrôles du carousel :
   * Si le nombre d'images est supérieur à 1, alors on les affiche.
   * @param pictureNumber
   * @returns {JSX.Element}
   */
  renderControls = (pictureNumber) => {
    const { current } = this.state;
    if (pictureNumber > 1) {
      return (
        <Fragment>
          <div className="carousel__controls">
            <button onClick={this.prevSlide}>
              <img className="arrow" src={chevronLeft} alt="left arrow"/>
            </button>
            <button onClick={this.nextSlide}>
              <img className="arrow" src={chevronRight} alt="right arrow"/>
            </button>
          </div>
          <p className="carousel__index">
            {current}/{pictureNumber}
          </p>
        </Fragment>
      )
    }
  }

  /**
   * Méthode pour atteindre l'image suivante.
   * On incrémente de 1 l'état 'current" à chaque clique du bouton.
   * Si l'utilisateur se trouve à la dernière image, on réinitialise current
   * à sa valeur d'origine.
   */
  nextSlide = () => {
    let { quantity, current } = this.state;
    if (current === quantity) {
      current = 1;
      this.setState({ current });
    } else {
      current++;
      this.setState({ current });
    }
  }

  /**
   * Méthode pour atteindre l'image précédente. Logique identique à la méthode
   * nextSlide.
   */
  prevSlide = () => {
    let { quantity, current } = this.state;
    if (current === 1) {
      current = quantity;
      this.setState({ current });
    } else {
      current--;
      this.setState({ current });
    }
  }

  /**
   * Avec la méthode de cycle de vie componentDidMount (une fois que le
   * carousel a été monté) on màj notre nombre d'images à celui fourni par
   * la prop picture
   */
  componentDidMount() {
    const quantity = this.props.pictures.length;
    this.setState({ quantity })
  }

  render() {
    const { pictures } = this.props;
    const { current } = this.state;
    return (
      <div className="carousel">
        {/* C'est grâce à className et l'état 'current' que l'on indique quelle image
         est visible. Une ternary operation nous permet d'assigner
         la classe css 'current' qui change la propriété display en 'block'.
         De base, 'slide' a display: none. */}
        {pictures.map((picture, index) => {
          return <img src={picture} key={index}
                      alt="Intérieur du logement"
                      className={index + 1 === current ? 'slide current' : 'slide'}/>
        })}
        {this.renderControls(pictures.length)}
      </div>
    )
  }
}

Carousel.propTypes = {
  pictures: PropTypes.array,
}

export default Carousel;