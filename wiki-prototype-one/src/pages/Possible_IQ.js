import React, {Component} from 'react';
import {Link} from "react-router-dom";




const Possible_IQ = () =>
{
    return (
    <div>
        <h3>
            Welcome Interview Question.
        </h3>
        <h3>Lets start with a warm up!</h3>
        <p>Write a function that returns the sum of two numbers.</p>
        <p>Ex. value1 = 6 and value2 = 9</p>
        <p>Output:15 </p>
        <p>int sum( int value1, int value2)
            
        </p>

        <small>It is game Time </small>
        
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}


export default Possible_IQ;