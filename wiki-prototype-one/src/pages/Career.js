import React from 'react'
import '../App.css'
import '../styles/Career.css';
import { Link } from 'react-router-dom';

export default function Career() {
    return (
        
        <div className='career-container'>
            <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Career</li>
            </ul> 
            <div className='career-title'>
                <h1>Career</h1>
            </div>
            <div className='career-wrapper'>
                <div className='career-description'>
                    <h3>A collection of tips on how to navigate career fairs, career opportunties, and much more!</h3>
                </div>
                <div className='career-guides'> 
                    <h1>Guides</h1>
                </div>
                <div className='career-links'>
                    <div className='workfair-link'>
                        <li><Link className='workfairCalednar' to='workfair-calendar'>Workshop & Workfair calendar</Link></li>
                    </div>
                    <div className='resume-link'>
                        <li><Link className='Resume' to='resume'>Resume</Link></li>
                    </div>
                    <li><Link to='/career/job-success'>How to Succeed at your Job</Link></li>
                </div>
            </div>
        </div>
    );
}