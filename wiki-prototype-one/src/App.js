import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CourseExplorer from './pages/CourseExplorer';
import Career from './pages/Career';
import Academics from './pages/Academics';
import Guides from './pages/Guides';
import GetStarted from './pages/GetStarted';
import Account from './pages/Account';
import AdminPage from './pages/AdminPage';
import SearchPage from './pages/SearchPage';
import AboutUs from './pages/AboutUs';
import DegreeRoadmap from './components/DegreeRoadmap';
import Register from './pages/Register';
import Login from './pages/Login';
import WorkfairCalendar from './components/WorkfairCalendar';

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
          <Route path='/account' component={Account} />
          <Route path='/adminPage' component={AdminPage} />
          <Route path='/searchPage' component={SearchPage} />
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/degreeRoadMap' component={DegreeRoadmap}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/workfairCalendar' component={WorkfairCalendar}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;