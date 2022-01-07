import React from 'react';
import chevronRight from '../images/chevron-carousel-right.svg';
import chevronLeft from '../images/chevron-carousel-left.svg';

class Carousel extends React.Component {
  state = {
    pictures: null,
    current: 1
  }

  componentDidMount() {
    const { pictures } = this.props;
    this.setState({ pictures });
  }

  render() {
    const { pictures } = this.props;

    return (
      <div className="carousel">
        {pictures.map((picture, index) => {
          return <img src={picture} key={index}/>
        })}
        <div className="carousel__controls">
          <button><img src={chevronLeft} alt="left arrow"/></button>
          <button><img src={chevronRight} alt="right arrow"/></button>
        </div>
      </div>
    )
  }
}

export default Carousel;