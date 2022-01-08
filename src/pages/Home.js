import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LodgingCard from '../components/LodgingCard';

import lodgings from '../lodgings';
import backgroundHome from '../images/header-background-home.webp';

const URL = '';

class Home extends React.Component {
  state = {
    data: null,
    isLoading: false,
    error: null,
    lodgings: lodgings,
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(URL);
      console.log(response);
      const result = await response.json();
      this.setState({
        data: JSON.parse(result),
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  render() {
    const headerTitle = 'Chez vous, partout et ailleurs';
    return (
      <Fragment>
        <Nav/>
        <div className="wrapper">
          <Header title={headerTitle} image={backgroundHome}/>
          <section className="gallery">
            {this.state.lodgings.map(lodging => {
              return (
                <LodgingCard key={lodging.id} data={lodging}/>
              )
            })}
          </section>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;
