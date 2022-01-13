import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import conditionalRender from '../utils/conditionalRender';

class LodgingPage extends React.Component {

  render() {
    const id = this.props.location.pathname.split('/lodging/')[1];

    const { lodgings, isLoading, response, error } = this.props;

    return (
      <Fragment>
        <Nav lodging={true}/>
        <div className="wrapper">
          {conditionalRender(isLoading, error, response, lodgings, id)}
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default LodgingPage;