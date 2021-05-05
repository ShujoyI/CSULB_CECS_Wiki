import React from 'react'
import '../App.css'
import '../styles/Sitemap.css';
import { Link } from 'react-router-dom';

export default function Sitemap() {
    return (
        <div className='sitemap'>
            <div className = 'sitemap-container'>
                <p></p>
                <p><h1 id="sitemap-header"><b>Site Map</b></h1></p>
                <p>This lists every page on the wiki! If you are feeling overwhelmed, check out the cards on the homepage, or try using the search in the top.</p>
                <div className='sitemap-about-link'>
                    <li><Link className='aboutLink' to='/about'>About</Link></li>
                </div>
                <div className='sitemap-academic-link'>
                    <li><Link className='academicLink' to='/academics'>Academics</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='mastersLink' to='/masters'>Graduate Program</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='minorsLink' to='/minors'>Cybersecurity Minor</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='facultyLink' to='/faculty'>CECS Faculty</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='schedulingLink' to='/scheduling'>Class Scheduling Help</Link></li>
                </div>
                <div className='sitemap-career-link'>
                    <li><Link className='careerLink' to='/career'>Career</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='resumeLink' to='/resume'>Resume</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='successLink' to='/success'>How to Succeed at your Job</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='calendarLink' to='/workfair-calendar'>Workshop & Workfair Calendar </Link></li>
                </div>
                <div className='sitemap-courseexplorer-link'>
                    <li><Link className='courseexplorerLink' to='/courseexplorer'>Course Explorer</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='roadmapLink' to='/degreeRoadMap'>BeachCS Road Map 2020</Link></li>
                </div>
                <div className='sitemap-feedback-link'>
                    <li><Link className='feedbackLink' to='/feedback'>Feedback</Link></li>
                </div>
                <div className='sitemap-guides-link'>
                    <li><Link className='guidesLink' to='/guides'>Guides</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='formotivationLink' to='/motivated'>For Motivation</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='recomendedidesLink' to='/ides_g'>Recommended IDE's</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='programmingguidesLink' to='/pg_guide'>Programming Guides</Link></li>
                </div>
                <div className='sitemap-sub-link'>
                    <li><Link className='possibleinterviewquestionsLink' to='/interview_q'>Possible Interview Questions</Link></li>
                </div>
                              
            </div>
        </div>
    );
}