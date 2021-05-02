import React from 'react';
import '../App.css';
import '../styles/Faculty.css';

export default function Faculty() {
    return (
        <div className='faculty'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='faculty-headers'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                            <li class="breadcrumb-item"> Faculty</li>
                        </ol>    
                    </div>
                        <div className = 'faculty-container'>
                            <div className="faculty-data">
                            <h1 id="faculty-title"><b>CECS Faculty @ The Beach</b></h1>
                            
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}