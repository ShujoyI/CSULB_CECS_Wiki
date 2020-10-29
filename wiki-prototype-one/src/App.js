import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import CourseExplorer from './components/pages/CourseExplorer';
import Career from './components/pages/Career';
import Academics from './components/pages/Academics';
import Guides from './components/pages/Guides';
import GetStarted from './components/pages/GetStarted';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/academics' component={Academics} />
          <Route path='/career' component={Career} />
          <Route path='/courseExplorer' component={CourseExplorer} />
          <Route path='/guides' component={Guides} />
          <Route path='/getStarted' component={GetStarted} />
        </Switch>
      </Router>
    </>
  );
}

export default App;