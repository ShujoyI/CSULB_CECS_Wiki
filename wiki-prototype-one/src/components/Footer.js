import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='footer-container'>
    <div className="footer-copyright text-center">
      <div >
        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.beachcs.wiki/"> BeachCS </a>
      </div>
    </div>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <Link to='/About'>About</Link>
        </div>
        <div class='footer-link-items'>
          <a href="mailto:beachCSWiki@gmail.com" className="mr-2">Contact</a>
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