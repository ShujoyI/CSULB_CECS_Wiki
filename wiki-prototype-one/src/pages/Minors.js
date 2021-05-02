import React from 'react';
import '../App.css';
import '../styles/Minors.css';

export default function Minors() {
    return (
        <div className='minors'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='minors-headers'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                            <li class="breadcrumb-item"> Cyber Security</li>
                        </ol>    
                    </div>
                        <div className = 'minors-container'>
                            <div className="minors-data">
                            <h1 id="minors-title"><b>Minor in Cyber Security Applications</b></h1>
                            <br></br>
                            <h3><b>Why cyber security minor?</b></h3>
                            <p></p>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </div>
    )
}