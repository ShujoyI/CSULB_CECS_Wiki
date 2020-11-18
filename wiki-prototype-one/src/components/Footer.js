import React from 'react'
import { Button } from './Button'
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <a href="/About us"> About us </a>
                    </div>
                    <div className="footer-link-items">
                        <a href="/Contact"> Contact </a>
                    </div>
                    <div className="footer-link-items">
                        <a href="/Sitemap"> Sitemap </a>
                    </div>
                    <div className="footer-link-items">
                        <a href="/Feedback"> Feedback </a>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer