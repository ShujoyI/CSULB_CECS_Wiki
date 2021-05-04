import React from 'react';
import '../App.css';
import '../styles/Scheduling.css';
import CourseTable from '../components/CourseTable';
import { Link } from 'react-router-dom';

export default function scheduling() {
    return (
        <div className='schedule'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='schedule-headers'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                            <li class="breadcrumb-item"> Scheduling Classes</li>
                        </ol>    
                    </div>
                        <div className = 'schedule-container'>
                            <div className="schedule-data">
                                <h1 id="schedule-title"><b>Scheduling Classes</b></h1>
                                    <p></p>
                                    <p>Planning your semester is a crucial study strategy that you need to develop. In fact, it's so important that you remain organize and productive to decrease stress levels will stay even throughout the semester, your grades will end up being higher, you will end up spending less total time. </p>
                                    <p></p>
                                    <p>To start, we can look at the core classes with the help of the  <Link to='/degreeRoadMap'> roadmap</Link>. The digram will show the relationshop between the core classes.</p>
                                    <p></p>
                                <h3><b>Overview</b></h3>
                                    <p></p>
                                    <p>The core courses can be broken up into different tracks.</p>
                                    <p></p>
                                    <p><b>Core Programming Intensive</b></p>
                                    <p><p>These classes teach the most fundamental CS concepts. Pay attention!</p></p>
                                        <li>CECS 100</li>
                                        <li>CECS 105</li>
                                        <li>CECS 174</li>
                                    <p></p>
                                    <p><b>Math releated</b></p>
                                    <p>These are more theory based classes that involve proofs and math.</p>
                                        <li>CECS 228</li>
                                        <li>CECS 229</li>
                                    <p></p>
                                    <p><b>Systems</b></p>
                                    <p>Do you actually know how a computer works? These classes will teach you!</p>
                                        <li>CECS 225</li>
                                        <li>CECS 326</li>
                                        <li>CECS 341</li>
                                    <p></p>
                                <h3><b>Full Requirements</b></h3>
                                    <p></p>
                                    <p>View the full requirements: <a href="http://catalog.csulb.edu/preview_program.php?catoid=6&poid=2802&hl=CECS&returnto=search">Computer Science, B.S. catalog.</a></p>
                                    <p>The Computer Science major is 120 credits.</p>
                                    <p></p>
                                <h3><b>Potential Scheduling</b></h3>
                                    <p></p>
                                    <p>Below are some potential schedules. Your schedule will look differernt depending on your other classes!</p>
                                    <p>Whenever you schedule a class make sure to pay close attention to the professor. It's better to optimize your schedule to fit your perfered time, and to have better professors! Check the respective pages for each course on this wiki and use Rate My Professor.</p>
                                    <p>This <b>are just example schedules</b>. Your own schedule will likely look different.  YOu need to consider what other majors/minors you will have, and other electives (both CS and Non CS) and general eduations you will need to take.</p>
                                    <div className='table_one'>
                                        <CourseTable />    
                                    </div>
                                    <p></p>
                                <h3><b>CS Electives</b></h3>
                                    <p></p>
                                    <p>You can discover your interest in Computer Science as you take some electives. A good way to determine what elective you would like to take is to use the <Link to='/courseExplorer'> course explorer</Link> for help. </p>
                                    <p>It is important to take classes about subjects in Computer Science that you may enjoy and might want to follow that career path. Electives are meant to be classes you want to enjoy, not classes you suffer in.</p>
                                    <p></p>
                                <hr/>
                                <h6><b>Related Resources</b></h6>
                                    <div className='resources'>
                                        <li><Link to='/courseExplorer'>Course Explorer</Link></li>
                                        <li><Link to='/degreeRoadMap'>Road Map</Link></li>
                                        <li><Link to='/Minors'>Cyberscurity Minor</Link></li>
                                    </div>
                                    <p></p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}