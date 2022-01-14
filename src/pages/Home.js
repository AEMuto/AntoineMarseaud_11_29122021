import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from '../utils/Content';

import backgroundHome from '../images/header-background-home.webp';

class Home extends React.Component {

  render() {
    const { lodgings, isLoading, response, error } = this.props;
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <Nav pathname={pathname}/>
        <div className="wrapper">
          <Header title="Chez vous, partout et ailleurs" image={backgroundHome}/>
          <Content isLoading={isLoading}
                   error={error}
                   response={response}
                   lodgings={lodgings}
                   id={false}/>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

Home.propTypes = {
  lodgings: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  response: PropTypes.object,
  error: PropTypes.bool,
  location: PropTypes.object
}

export default Home;
