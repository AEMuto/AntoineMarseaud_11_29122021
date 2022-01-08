import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';

import backgroundAbout from '../images/header-background-about.webp';
import Dropdown from '../components/Dropdown';

class About extends React.Component {
  state = {
    data: {
      reliability: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
      respect: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      service: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
      security: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    }
  }

  render() {
    const { reliability, respect, service, security } = this.state.data;
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <Nav location={pathname}/>
        <div className="wrapper">
          <Header image={backgroundAbout}/>
          <div className="disclaimers">
            <Dropdown title="Fiabilité" data={reliability}/>
            <Dropdown title="Respect" data={respect}/>
            <Dropdown title="Service" data={service}/>
            <Dropdown title="Sécurité" data={security}/>
          </div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default About;
