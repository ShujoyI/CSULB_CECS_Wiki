import React, {Component} from 'react';
import {Link} from "react-router-dom";



const Motivation = () =>
{
    return(
        <div>
        <h3>
            Welcome to Motivation Guides!
        </h3>

        <small>Winning is what's up!!!</small>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>  
    );
}

export default Motivation;