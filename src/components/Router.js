import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LodgingPage from '../pages/LodgingPage';
import About from '../pages/About'
import NotFound from '../pages/NotFound';

import wait from '../utils/wait';
import ScrollToTop from '../utils/ScrollToTop';

// Adresse où se trouve le fichier json des logements
const URL = 'https://raw.githubusercontent.com/AEMuto/AntoineMarseaud_11_29122021/main/src/lodgings.json';

// BrowserRouter utilise L'API HTML 'history' pour garder
// le front en synchronisation avec l'url.
class Router extends React.Component {
  // On utilise le state pour stocker les réponses réseaux
  // pour ensuite les passer en props aux composants lors de leur rendu
  state = {
    lodgings: [],
    response: null,
    isLoading: false,
    error: null,
  }

  async fetchLodgings() {
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
      // 2.2 MàJ de l'entrée lodgings et chargement de l'état.
      this.setState({
        lodgings: result,
        isLoading: false,
      });
      // Stocker le data dans le sessionStorage
      sessionStorage.setItem('lodgings', JSON.stringify(this.state.lodgings));
    } catch (error) {
      // 2.3 S'il y a une erreur - MàJ de l'entrée error & chargement de l'état.
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  async componentDidMount() {
    // Vérifier si les logements sont dans le sessionStorage
    if (sessionStorage.getItem('lodgings')) {
      // Si présent on les récupère et on MàJ le state
      this.setState({lodgings: JSON.parse(sessionStorage.getItem('lodgings'))})
    } else {
      // Sinon on les récupère de manière asynchrone avec un fetch
      await this.fetchLodgings();
    }
  }

  render() {
    const { lodgings, isLoading, response, error } = this.state;

    return (
      <BrowserRouter>

        {/* https://v5.reactrouter.com/web/guides/scroll-restoration
        Composant permettant de réinitialiser la position
        du scroll à 0 lors de la navigation*/}
        <ScrollToTop/>

        {/* Switch permet d'effectuer le rendu de la première <Route>
        correspondante à l'emplacement du chemin 'path' indiqué.*/}
        <Switch>

          {/* https://v5.reactrouter.com/web/api/Route/route-props
          Utiliser le format component={ComponentToRender}
          ou render={(props) => <ComponentToRender {...props}/>
          permet le passage des props
          history, location, match au composant rendu par <Route/>.
          Nos composants sont à base de classe donc les alternatives
          pour le passage de ces props ne sont pas possibles.
          S'ils étaient de type fonctionnel, on pourrait utiliser
          les Hooks de react-router (cf: doc, ex: useLocation) pour récupérer
          ces props et effectuer le rendu de Route avec la forme
          <Route path="/monchemin"><ComponentToRender/></Route>.*/}
          <Route exact path="/"
                 render={(props) => {
                   return <Home {...props}
                                lodgings={lodgings}
                                isLoading={isLoading}
                                response={response}
                                error={error}/>
                 }}/>

          <Route path="/about" component={About}/>

          {/* Chemin récursif : On ne connait pas à l'avance l'ensemble des pages
          qui utiliseront ce chemin.
          cf: https://v5.reactrouter.com/web/example/recursive-paths*/}
          <Route path="/lodging/:lodgingId"
                 render={(props) => {
                   return <LodgingPage {...props}
                                       lodgings={lodgings}
                                       isLoading={isLoading}
                                       response={response}
                                       error={error}/>
                 }}/>

          {/* Tous les autres chemins renvoient vers la page 404 */}
          <Route path="*" component={NotFound}/>

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;