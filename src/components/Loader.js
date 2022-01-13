import React from 'react';
import loader from '../images/loader.svg';

class Loader extends React.Component {
  render() {
    return (
      <section className="loader">
        <img src={loader} alt="loader"/>
      </section>
    )
  }
}

export default Loader;