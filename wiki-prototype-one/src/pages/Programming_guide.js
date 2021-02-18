import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Programming_guide = () =>
{
    return (
    <div>
        <h3>
            Welcome to Programming Guides!
        </h3>

        <small>C++ is what's up!!!</small>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>

  
    );
}


export default Programming_guide;