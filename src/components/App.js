import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
