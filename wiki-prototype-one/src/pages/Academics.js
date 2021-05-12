import React from 'react'
import '../App.css'
import '../styles/Academics.css';
import { Link } from 'react-router-dom';

export default function Academics() {
    return ( 
        <div className='academic'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    {/* All html done within the col-sm-6 */}
                    <div class="col-sm-6" >
                        <div className='academics-headers'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <a href="/">Home</a></li>
                                <li class="breadcrumb-item"> Academics</li>
                            </ol>
                        </div>
                        <div className = 'academics-container'>
                            <div className="academics-data">
                                <h1 id="academic-title"><b>Academics</b></h1>
                                <b><p>If you are looking for what CS courses are available at CSULB, go to the {" "}
                                    <Link to="/courseExplorer">Course Explorer.</Link>
                                </p></b>
                                <p>If you want tips on how to schedule your CS classes {" "}
                                    <Link to="/degreeRoadMap">click here!</Link>
                                </p>
                                <p><h3 id="academics-guide"><b>Guides</b></h3></p>
                                <div className='academics-links'>
                                    <li><Link className='applying-to-graduate-school' to='masters'>Applying to Graduate School (MS/PhD)</Link></li>
                                    <li><Link className='cecs-faculty' to='faculty'>CECS Faculty</Link></li>
                                    <li><Link className ='minor' to='minors'>Minor in Cyber Security Applications</Link></li>
                                    <li><Link className='scheduling' to='scheduling'>Scheduling Classes</Link></li>
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