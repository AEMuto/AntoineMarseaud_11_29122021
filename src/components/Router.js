import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import About from '../pages/About'
import NotFound from '../pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/lodging/:lodgingId" component={Lodging} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;