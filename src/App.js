import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Country from './components/detailspage';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<Country />} />
    </Routes>
  </Router>
);

export default App;
