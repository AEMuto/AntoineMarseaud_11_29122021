import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LodgingCard from '../components/LodgingCard';

import wait from '../utils/wait';
import backgroundHome from '../images/header-background-home.webp';
import loader from '../images/loader.svg';

const URL = 'https://raw.githubusercontent.com/AEMuto/AntoineMarseaud_11_29122021/main/src/lodgings.json';

class Home extends React.Component {
  state = {
    data: [],
    isLoading: false,
    error: null,
    headerTitle: 'Chez vous, partout et ailleurs'
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(URL);
      const result = await response.json();
      await wait(800);
      this.setState({
        data: result,
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
    const { data, isLoading, headerTitle } = this.state;
    const { pathname } = this.props.location;

    if (isLoading) {
      return (
        <Fragment>
          <Nav location={pathname}/>
          <div className="wrapper">
            <Header title={headerTitle} image={backgroundHome}/>
            <div className="loader">
              <img src={loader} alt="loader"/>
            </div>
          </div>
          <Footer/>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Nav location={pathname}/>
        <div className="wrapper">
          <Header title={headerTitle} image={backgroundHome}/>
          <section className="gallery">
            {data.map(lodging => {
              return <LodgingCard key={lodging.id} data={lodging}/>
            })}
          </section>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;
