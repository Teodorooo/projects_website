import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Me from './components/pages/Me';
import Projects from './components/pages/Projects';
import Calendar from './mini-apps/calendarApp/Calendar';
import BBapiApp from './mini-apps/BBAPI/BbapiApp';
import Lang from './components/pages/Lang';
import Footer from './components/Footer';
import Lightbox from './mini-apps/FluidLightbox/Lightbox';
import Videos from './components/pages/Videos';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/me" component={Me} />
      <Route path='/projects' component={Projects} />
      <Route path='/lang' component={Lang} />
      <Route path='/videos' component={Videos} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/bbapi' component={BBapiApp} />
      <Route path='/lightbox' component={Lightbox} />
    </Switch>
    <Footer />
    </Router>     
    </>
  );
}

export default App;
