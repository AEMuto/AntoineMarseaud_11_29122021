import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pour afficher le nombre d'étoiles correct, on crée un range de 5.
 * Tant que rating est supérieur ou égal à 0 le svg ayant la forme
 * d'une étoile à un fond rouge. Puis le reste a une couleur de fond grise.
 */
class StarRating extends React.Component {
  render() {
    let { rating } = this.props;
    return (
      <div className="rating">
        {[...Array(5)].map((star, index) => {
          rating -= 1;
          return (
            <svg className={`rating__star rating__star--${rating >= 0 ? 'on' : 'off'}`}
                 key={index}
                 width="30"
                 height="30"
                 viewBox="0 0 30 30"
                 fill="#E3E3E3"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
            </svg>
          )
        })}
      </div>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.number
}

export default StarRating;