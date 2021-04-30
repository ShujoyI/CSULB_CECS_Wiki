import React from 'react'
import '../App.css'
import '../styles/Career.css';
import { Link } from 'react-router-dom';

export default function Career() {
    return (
        <div className='career'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                        <div className='career-headers'>
                            <ul class="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className = 'career-container'>
                            <div className="career-data">
                                <h1 id="career-title"><b>Career</b></h1>
                                <b><p>A collection of tips on how to navigate career fairs, career opportunties, and much more!</p></b>
                                <p><h3 id="career-guide"><b>Guides</b></h3></p>
                                <div className='career-links'>
                                    <li><Link className='Resume' to='resume'>Crafting your Resume</Link></li>
                                    <li><Link className ="career-success" to='career-success'>Job Success</Link></li>
                                    <li><Link className='career-conquering' to='career-conquering'>Conquering the Career Fair</Link></li>
                                    <li><Link className='workfairCalendar' to='workfair-calendar'>Workshop & Workfair calendar</Link></li>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    );
}