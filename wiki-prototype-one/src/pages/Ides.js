import { defaultFormatUtc } from 'moment';
import React, {Component} from 'react';
import {Link} from "react-router-dom";



const Ides = () =>
{
    return(
        <div>
        <h3>
            Welcome to IDES Guides!
        </h3>

        <small>VS code is what's up!!!</small>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}


export default Ides;