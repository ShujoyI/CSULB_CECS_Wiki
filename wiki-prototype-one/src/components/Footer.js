import React from 'react'
import { Button } from './Button'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Service</h2>
            <Link to='/CourseExplorer'>Course Explorer</Link>
            <Link to='/Guides'>Guides</Link>
            <Link to='/Career'>Career</Link>
            <Link to='/Academics'>Academics</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/AboutUs'>About us</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Sitemap</Link>
            <Link to='/'>Feedback</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Temp</h2>
            <Link to='/'>Temp</Link>
            <Link to='/'>Temp</Link>
            <Link to='/'>Temp</Link>
            <Link to='/'>Temp</Link>
          </div>
        </div>
      </div>
          <small class='website-rights'>© 2020, built by BeachCS</small>
        </div>
  );
}

export default Footer;