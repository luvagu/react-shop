import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
