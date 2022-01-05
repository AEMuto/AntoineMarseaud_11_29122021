import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <img src={this.props.pictures[0]} alt=""/>
      </div>
    )
  }
}

export default Carousel;