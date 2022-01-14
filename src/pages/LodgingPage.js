import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Content from '../utils/Content';


class LodgingPage extends React.Component {

  render() {
    const id = this.props.location.pathname.split('/lodging/')[1];

    const { lodgings, isLoading, response, error } = this.props;

    return (
      <Fragment>
        <Nav/>
        <div className="wrapper">
          <Content isLoading={isLoading}
                   error={error}
                   response={response}
                   lodgings={lodgings}
                   id={id}/>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

LodgingPage.propTypes = {
  lodgings: PropTypes.array,
  isLoading: PropTypes.bool,
  response: PropTypes.object,
  error: PropTypes.bool,
  location: PropTypes.object
}

export default LodgingPage;

