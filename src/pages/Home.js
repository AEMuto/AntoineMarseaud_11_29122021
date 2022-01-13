import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';

import backgroundHome from '../images/header-background-home.webp';
import conditionalRender from '../utils/conditionalRender';

class Home extends React.Component {

  render() {
    const { lodgings, isLoading, response, error } = this.props;
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <Nav location={pathname}/>
        <div className="wrapper">
          <Header title="Chez vous, partout et ailleurs" image={backgroundHome}/>
          {conditionalRender(isLoading, error, response, lodgings)}
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;
