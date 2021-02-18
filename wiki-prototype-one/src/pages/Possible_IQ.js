import React, {Component} from 'react';
import {Link} from "react-router-dom";




const Possible_IQ = () =>
{
    return (
    <div>
        <h3>
            Welcome Interview Questions!
        </h3>

        <small>It is game Time </small>
        
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}


export default Possible_IQ;