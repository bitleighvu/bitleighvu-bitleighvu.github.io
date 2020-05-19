import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home/Home';
import About from './About/About';
import PageNotFound from './PageNotFound';

import './App.css';

const App = () => {
  return (
    <HashRouter basename="/">
      <div id="entire-page">
        <div id="page-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;