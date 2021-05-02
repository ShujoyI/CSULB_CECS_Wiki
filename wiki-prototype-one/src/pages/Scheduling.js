import React from 'react';
import '../App.css';
import '../styles/Scheduling.css';

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
                            
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}