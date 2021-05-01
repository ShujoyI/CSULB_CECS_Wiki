import React from 'react'
import '../App.css'
import '../styles/Academics.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';

export default function Academics() {
    return (
        
        // <div className='academics-container'> 
        //     <div className='academics-title'>
        //         <h1>Academics</h1>
        //     </div>
        //     <div className='academics-wrapper'>
        //         <div className='academics-description'>
        //             <h3>If you are looking for what CS courses are available at CSULB, go to the {" "}
        //                 <Link to="/courseExplorer">Course Explorer.</Link>
        //             </h3>
        //         </div>
        //         <div className='academics-links'>
        //             <li><Link to='/masters'>Masters Program</Link></li>
        //             <li><Link to='/minors'>Cybersecurity Minor</Link></li>
        //         </div>
        //     </div>
        // </div>
        
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
                                <li><Link className='masters' to='masters'>Applying to Graduate School (MS/PhD)</Link></li>
                                    <li><Link className='faculty' to='faculty'>CECS Faculty</Link></li>
                                    <li><Link className ='minors' to='minors'>Cybersecurity Minor</Link></li>
                                    <li><Link className='scheduling' to='scheduling'>Scheduling Classes</Link></li>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>

        // <div className='academics-container'> 
        //     <div className='academics-title'>
        //         <h1>Academics</h1>
        //     </div>
        //     <div className='academics-description'>
        //         <h3>If you are looking for what CS courses to take, go to the {" "}
        //             <Link to="/courseExplorer">Click here</Link>
        //         </h3>
        //     </div>
        //     <div className="academics-development-center" >
        //         <h3>Student Affairs </h3>
        //         <p>Career Development center </p>
        //         <li><Link to="http://www.careers.csulb.edu/">Success workfairs</Link></li><li><link></link></li>
        //         {/* <form action="http://www.careers.csulb.edu/">
        //             <button className="btng btn1">Career center</button>
        //         </form> */}
        //     </div>       
        // </div>
        
    );
}