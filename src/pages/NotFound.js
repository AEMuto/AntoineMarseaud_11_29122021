import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <div className="notFound">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;