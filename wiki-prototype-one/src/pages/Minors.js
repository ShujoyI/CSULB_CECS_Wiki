import React from 'react';
import '../App.css';
import CyberSecurity from '../components/CyberSecurity.js';

export default function Minors() {
    return (
        <div className='minor'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    {/* All html done within the col-sm-6 */}
                    <div class="col-sm-6" >
                        <div className='academics-headers'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <a href="/">Home</a></li>
                                <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                                <li class="breadcrumb-item"> Academics</li>
                            </ol>
                        </div>
                        <div className = 'academics-container'>
                            <div className="academics-data">
                                <h1 id="academic-title"><b>Minors</b></h1>
                                
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}