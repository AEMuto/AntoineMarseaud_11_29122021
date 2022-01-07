import React from 'react';
import chevronRight from '../images/chevron-carousel-right.svg';
import chevronLeft from '../images/chevron-carousel-left.svg';

class Carousel extends React.Component {
  state = {
    quantity: 0,
    current: 1
  }

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

  componentDidMount() {
    const quantity = this.props.pictures.length;
    this.setState({ quantity })
  }

  render() {
    const { pictures } = this.props;
    const { current } = this.state;
    return (
      <div className="carousel">
        {pictures.map((picture, index) => {
          return <img src={picture} key={index}
                      alt="Intérieur du logement"
                      className={index + 1 === current ? 'slide current' : 'slide'}/>
        })}
        <div className="carousel__controls">
          <button onClick={this.prevSlide}>
            <img className="arrow" src={chevronLeft} alt="left arrow"/>
          </button>
          <button onClick={this.nextSlide}>
            <img className="arrow" src={chevronRight} alt="right arrow"/>
          </button>
        </div>
        <p className="carousel__index">
          {current}/{pictures.length}
        </p>
      </div>
    )
  }
}

export default Carousel;