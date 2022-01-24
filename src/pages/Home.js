import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Content from '../utils/Content';

import backgroundHome from '../images/header-background-home.webp';

class Home extends React.Component {

  render() {
    const { lodgings, isLoading, response, error } = this.props;

    return (
      <Fragment>
        <div className="wrapper">
          <Header title="Chez vous, partout et ailleurs" image={backgroundHome}/>
          <Content isLoading={isLoading}
                   error={error}
                   response={response}
                   lodgings={lodgings}
                   id={false}/>
        </div>
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
