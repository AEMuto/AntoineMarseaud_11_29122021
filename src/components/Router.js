import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Lodging from './Lodging';
import About from './About'
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/lodging/:lodgingId" element={<Lodging />}/>
      <Route element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
);

export default Router;