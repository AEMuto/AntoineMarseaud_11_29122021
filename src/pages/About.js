import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';

class About extends React.Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="wrapper">
          <Header />

        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default About;
