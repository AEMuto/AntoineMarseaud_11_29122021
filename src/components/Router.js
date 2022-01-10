import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import About from '../pages/About'
import NotFound from '../pages/NotFound';

// BrowserRouter utilise L'API HTML 'history' pour garder
// le front en synchronisation avec l'url.
const Router = () => (
  <BrowserRouter>
    {/* Switch permet d'effectuer le rendu de la première <Route>
        correspondante à l'emplacement du chemin 'path' indiqué.
    */}
    <Switch>
      {/* https://v5.reactrouter.com/web/api/Route/route-props
          Utiliser le format component={ComponentToRender}
          permet le passage automatique des props
          history, location, match au composant rendu par <Route />.
          Nos composants sont à base de classe donc les alternatives
          pour le passage de ces props ne sont pas possibles.
          S'ils étaient de type fonctionnel, on pourrait utiliser
          les Hooks de react-router (cf: doc, ex: useLocation) pour récupérer
          ces props et effectuer le rendu de Route avec la forme
          <Route path="/monchemin"><ComponentToRender/></Route>
          ou utiliser une de ses méthodes comme 'render' ou 'children'.
      */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* Chemin récursif : On ne connait pas à l'avance l'ensemble des pages
          qui utiliseront ce chemin.
          cf: https://v5.reactrouter.com/web/example/recursive-paths
      */}
      <Route path="/lodging/:lodgingId" component={Lodging} />
      {/* Tous les autres chemins renvoient vers la page 404 */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;