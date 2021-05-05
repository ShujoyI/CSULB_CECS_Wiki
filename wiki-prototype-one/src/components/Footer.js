import React from 'react'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer classname="footer">
      <div class="outer-footer">
        <div class="quick-links">
            <ul>
                <li class="quick-items">
                    <a href="/about">About</a>
                </li>
                <li class="quick-items">
                    <a href="mailto:beachCSWiki@gmail.com">Contact</a>
                </li>
                <li class="quick-items">
                    <a href="/sitemap">Sitemap</a>
                </li>
                <li class="quick-items">
                    <a href="/feedback">Feedback</a>
                </li>
            </ul>
        </div>
        <div className="copyright">
            &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.beachcs.wiki/"> BeachCS </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;