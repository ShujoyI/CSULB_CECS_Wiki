import React from 'react'
import '../App.css'
import '../styles/Career.css';
import { Link } from 'react-router-dom';

export default function Career() {
    return (
        
        <div className='career'>
            <div className = 'career-container'>
                <div className='career-headers'>
                    <ul class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="career-data">
                    <h1 id="career-title"><b>Career</b></h1>
                    <b><p>A collection of tips on how to navigate career fairs, career opportunties, and much more!</p></b>
                    <p><h3 id="career-guide"><b>Guides</b></h3></p>
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
        </div>
    );
}