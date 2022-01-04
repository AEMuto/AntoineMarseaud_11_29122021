import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LodgingCard from '../components/LodgingCard';

import lodgings from '../lodgings';

class Home extends React.Component {
  state = {
    lodgings: lodgings,
  }
  render() {
    const headerTitle = 'Chez vous, partout et ailleurs';
    return (
      <Fragment>
        <Nav />
        <div className="wrapper">
          <Header title={headerTitle}/>
          <section className="lodgings">
            {this.state.lodgings.map(lodging => {
              return (
                <LodgingCard key={lodging.id} data={lodging} />
              )
            })}
          </section>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Home;
