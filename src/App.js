import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home/Home';
import About from './About/About';


// import PageNotFound from './PageNotFound';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div id="entire-page">
        <div id="page-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;