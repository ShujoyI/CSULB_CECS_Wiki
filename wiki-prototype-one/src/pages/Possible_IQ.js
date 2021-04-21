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

        <div className='questions'>
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

        <div className = 'questions'>
            <h3>Question 2</h3>
            <p> Given a string s of lower case English letters,</p>
            <p>Find and return the first instance of a non-repeating character in it,</p>
            <p>If there is no repeating charecter, return '_'</p>
            <h4>char first_non_reapeating_char(std::string s) </h4>
            <ul>
                <h3>Examples</h3>
                <li>
                    For s = "abarcusb"      Output = 'r'
                </li>
                <li>
                    For s = "csulbcsulb"    Output = '_'
                </li>
            </ul>

            <ul>
            <h3>Constrains </h3>
            <li>Should have a O(n) time </li>
            <li>Requieres only O(1) space complexity </li>
        </ul>
        </div>

        <div className = 'questions'>
            <h3>Question 3</h3>
            <p> Given a n x n 2d Matrix,</p>
            <p>Rotate the image by 90 degrees (clockwise)</p>
            <h4>void rotate( matrix[][]) </h4>
            <ul>
                <h3>Examples</h3>
                <li>
                    For a<br/> [[1,2,3],]<br/>  
                            [4,5,6],<br/>
                            [7,8,8]]<br/><br/>
                    Output <br/>
                    [[7,4,1,],<br/>
                    [8,5,2],<br/>
                    [9,6,3]]

                </li>
            </ul>

            <ul>
                <h3>Constrains </h3>
                <li>Should have a O(n) time </li>
                <li>Requieres only O(1) space complexity </li>
            </ul>
        </div>

        <div>
            <h2><Link to='/guides'>Back to Guide</Link></h2>
        </div>
    </div>
    );
}


export default Possible_IQ;