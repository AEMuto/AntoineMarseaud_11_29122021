import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import StarRating from '../components/StarRating';
import Dropdown from '../components/Dropdown';
import NotFound from './NotFound';

class Lodging extends React.Component {

  render() {

    if (this.props.location.state) {

      const {
        description,
        equipments,
        host,
        location,
        pictures,
        rating,
        tags,
        title
      } = this.props.location.state;

      let { picture, name } = host;
      name = name.split(/\s/);

      return (
      <Fragment>
        <Nav lodging={true}/>
        <div className="wrapper">
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
        </div>
        <Footer lodging={true}/>
      </Fragment>
    )}

    return <NotFound error="Oups ! Aucun logement avec cet identifiant"/>
  }
}

export default Lodging;