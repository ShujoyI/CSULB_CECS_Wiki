import React, {Component} from 'react';
import {Link} from "react-router-dom";



const Study = () =>
{
    return(
        <div>
        <h3>
            Welcome to Study Guides!
        </h3>

        <small>Plenty of sleep is what's up!!!</small>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}

export default Study