import React from 'react';
import LodgingCard from './LodgingCard';

class Gallery extends React.Component {
  render() {
    const { lodgings } = this.props;
    return (
      <section className="gallery">
        {lodgings.map(lodging => {
          return <LodgingCard key={lodging.id} data={lodging}/>
        })}
      </section>
    )
  }
}

export default Gallery;