import React, {Component} from 'react';
import '../styles/Possible_IQ.css';
import {Link} from "react-router-dom";




const Possible_IQ = () =>
{
    return (
    <div className="possible_iq">
        <h3>
            Welcome Interview Question.
        </h3>

        <div>
        <h3>Lets start with a warm up!</h3>
        <p>Write a function that returns the sum of two numbers.</p>
        <p>Ex. value1 = 6 and value2 = 9</p>
        <p>Output:15 </p>
        <p>int sum( int value1, int value2)
            
        </p>

        <small>It is game Time </small>
        
       
        </div>

        <div className='question1'>
            <h3>Question 1</h3>
            <p>Given an array a that contains only numbers in the range from 1 to a.length</p>
            <p>find the first duplicate number for which the second occurence has the minimal index.</p>
            <p>If there is not such elements, return -1.</p>
            <h4>int first_duplicate(int array_a) </h4>
            <ul>
                <h3>Examples </h3>
                <li>
                    For a = [8,4,6,2,6,4,7]     Output = 6
                </li>
                <li>
                    For a = [3,4,1,9]    Output = -1
                </li>
            </ul>
      
        
        <ul>
            <h3>Constrains </h3>
            <li>Should have a O(n) time </li>
            <li>Requieres only O(1) space complexity </li>
        </ul>

        </div>

        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>
    );
}


export default Possible_IQ;