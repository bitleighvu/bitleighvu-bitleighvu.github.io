import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound';

import './App.css';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="entire-page">
        <div id="page-container">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
          </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;