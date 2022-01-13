import React, { Fragment } from 'react';
import Carousel from './Carousel';
import StarRating from './StarRating';
import Dropdown from './Dropdown';

class Lodging extends React.Component {
  render() {

    const {
      description,
      equipments,
      host,
      location,
      pictures,
      rating,
      tags,
      title
    } = this.props.lodgingData;

    let { picture, name } = host;
    name = name.split(/\s/);

    return (
      <Fragment>
        <Carousel pictures={pictures}/>
        <section className="lodging-data">
          <header className="lodging-data__header">
            <div className="lodging-data__header__info">
              <h1 className="title">{title}</h1>
              <h2 className="location">{location}</h2>
              <ul className="tags-wrapper">
                {tags.map((tag, index) =>
                  <li key={index} className="tag">{tag}</li>)}
              </ul>
            </div>
            <div className="lodging-data__header__rating">
              <div className="host-wrapper">
                <p>{name[0]}<br/>{name[1]}</p>
                <img className="portrait" src={picture} alt="portrait"/>
              </div>
              <StarRating rating={rating}/>
            </div>
          </header>
          <div className="lodging-data__dropdowns">
            <Dropdown data={description} title="Description"/>
            <Dropdown data={equipments} title="Équipements"/>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Lodging;