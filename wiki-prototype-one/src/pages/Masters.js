import React from 'react';
import '../App.css';
import MastersInformation from '../components/MastersInformation.js';
import '../styles/Masters.css';

export default function Masters() {
    return (
        <div className='masters'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3" ></div>
                    <div class="col-sm-6" >
                    <div className='masters-headers'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                            <li class="breadcrumb-item"> Applying to Graduate School</li>
                        </ol>    
                    </div>
                        <div className = 'masters-container'>
                            <div className="masters-data">
                            <h1 id="masters-title"><b>Applying to Graduate School (MS/PhD)</b></h1>
                            <br></br>
                            <h3><b>Choosing a school</b></h3>
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