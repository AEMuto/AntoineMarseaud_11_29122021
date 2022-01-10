import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LodgingCard from '../components/LodgingCard';

import wait from '../utils/wait';
import backgroundHome from '../images/header-background-home.webp';
import loader from '../images/loader.svg';

// Adresse où se trouve le fichier json des logements
const URL = 'https://raw.githubusercontent.com/AEMuto/AntoineMarseaud_11_29122021/main/src/lodgings.json';

class Home extends React.Component {
  state = {
    data: [],
    response: null,
    isLoading: false,
    error: null,
    headerTitle: 'Chez vous, partout et ailleurs'
  }

  async componentDidMount() {
    // 1. MàJ de l'état en tant que - chargement en cours.
    this.setState({ isLoading: true });
    // 2. Obtenir le fichier JSON des logements.
    try {
      const response = await fetch(URL);
      // 2.1 "Stockage" de la réponse.
      this.setState({ response });
      // Simulation du délai.
      await wait(800);
      const result = await response.json();
      // 2.2 MàJ de l'entrée data et chargement de l'état.
      this.setState({
        data: result,
        isLoading: false,
      });
    } catch (error) {
      // 2.3 S'il y a une erreur - MàJ de l'entrée error & chargement de l'état.
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  render() {
    const { data, isLoading, response, error, headerTitle } = this.state;
    const { pathname } = this.props.location;

    // 1. Si notre état possède chargement en cours - rendu du loader.
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

    // 2. Si notre état possède une erreur - afficher l'erreur.
    if (error) {
      return (
        <Fragment>
          <Nav location={pathname}/>
          <div className="wrapper">
            <Header title={headerTitle} image={backgroundHome}/>
            <div className="error">
              <h3>Oups, il y a eu une erreur...</h3>
              <br/>
              <p>Le serveur a répondu avec le status : {response.status}</p>
            </div>
          </div>
          <Footer/>
        </Fragment>
      )
    }

    // 3. Sinon rendu de la gallerie contenant les cartes logements.
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
