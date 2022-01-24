import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Content from '../utils/Content';


class LodgingPage extends React.Component {

  render() {
    const id = this.props.location.pathname.split('/lodging/')[1];
    const { lodgings, isLoading, response, error } = this.props;

    return (
      <Fragment>
        <div className="wrapper">
          <Content isLoading={isLoading}
                   error={error}
                   response={response}
                   lodgings={lodgings}
                   id={id}/>
        </div>
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

