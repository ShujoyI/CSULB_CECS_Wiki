import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='footer-container'>
    <div className="footer-copyright text-center">
      <div >
        &copy; {(new Date().getFullYear())} Copyright: <a href=""> BeachCS </a>
      </div>
    </div>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <Link to='/About'>About</Link>
        </div>
        <div class='footer-link-items'>
          <Link to='/Contact'>Contact</Link>
        </div>
        <div class='footer-link-items'>
          <Link to='/Sitemap'>Sitemap</Link>
        </div>
        <div class='footer-link-items'>
          <Link to='/Feedback'>Feedback</Link>
        </div>
      </div> 
    </div>
  </div>
  );
}

export default Footer;