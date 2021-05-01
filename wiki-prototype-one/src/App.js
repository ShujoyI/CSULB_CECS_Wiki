import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CourseExplorer from './pages/CourseExplorer';
import Career from './pages/Career';
import CareerSuccess from './pages/CareerSuccess';
import CareerConquering from './pages/CareerConquering';
import Academics from './pages/Academics';
import Guides from './pages/Guides';
import Account from './pages/Account';
import AdminPage from './pages/AdminPage';
import SearchPage from './pages/SearchPage';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Sitemap from './pages/Sitemap';
import DegreeRoadmap from './pages/DegreeRoadmap';
import Register from './pages/Register';
import Login from './pages/Login';
import WorkfairCalendar from './components/WorkfairCalendar';
import Resume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';
import Programming_guide from './pages/Programming_guide';
import Possible_IQ from './pages/Possible_IQ';
import Study from './pages/Study';
import Ides from './pages/Ides';
import Motivation from './pages/Motivation';
import Masters from './pages/Masters';
import Minors from './pages/Minors';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/academics' component={Academics} />
          <Route path='/career' component={Career} />
          <Route path='/courseExplorer' component={CourseExplorer} />
          <Route path='/guides' component={Guides} />
          <Route path='/account' component={Account} />
          <Route path='/adminPage' component={AdminPage} />
          <Route path='/searchPage' component={SearchPage} />
          <Route path='/about' component={About}/>
          <Route path='/feedback' component={Feedback}/>
          <Route path='/sitemap' component={Sitemap}/>
          <Route path='/degreeRoadMap' component={DegreeRoadmap}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/career-success' component={CareerSuccess}/>
          <Route path='/career-conquering' component={CareerConquering}/>
          <Route path='/workfair-calendar' component={WorkfairCalendar}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/pg_guide' component={Programming_guide}/>
          <Route  path='/interview_q' component = {Possible_IQ}/>
          <Route path='/study_g' component = {Study}/>
          <Route path='/ides_g' component={Ides}/>
          <Route path='/motivated' component={Motivation}/>
          <Route path='/masters' component={Masters}/>
          <Route path='/minors' component={Minors}/>
        </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;