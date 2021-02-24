import React, {Component} from 'react';
import '../styles/Programming_g.css';
import {Link} from "react-router-dom";

function useEffectc()
{
    document.querySelectorAll('.button_list_c').forEach(button =>
    {
       


            button.classList.toggle('button_list_active');

        
    });
}

function useEffectcpp()
{
    document.querySelectorAll('.button_list_cpp').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_cpp');

        
    });
}

function useEffectjava()
{
    document.querySelectorAll('.button_list_java').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_java');

        
    });
}

const Programming_guide = () =>
{
    return (
    <div>
        <h3>
            Welcome to Programming Guides!
        </h3>

        <div className ="learn_c">
            <button onClick={useEffectc}  className = "button_list_c" > C reference </button>
                            
                <div className ="c_list">
                    <p>
                        C is a genral purpose, procedural, imperative programing language.
                        C is the most widely used computer language.
                    </p>
                    <img src='images/c.jpg' alt='some_c' width='350' height='200'></img>
                    <p>Need help with C code ... <a href="https://www.tutorialspoint.com/cprogramming/index.htm">Click Here</a></p>
                                
                </div>
        </div>


        <div className='learn_cpp'>
            <button onClick={useEffectcpp} className='button_list_cpp'>C++ reference</button>

            <div className='cpp_list'>
                <p>C++ is a middle-level programing language, it is very close to hardware which gives you a lot of control
                    in terms of memory management.
                </p>
                <img src='images/cpp.jpg' alt='some_c' width='380' height='200'></img>
                <p>Need help with C code ... <a href="https://www.tutorialspoint.com/cplusplus/index.htm">Click Here</a></p>


            </div>

        </div>


        <div className='learn_java'>
            <button onClick={useEffectjava}  className = "button_list_java" > Java reference </button>

             <div className='java_list'>
                <p>Java Sucks!!! its all about Haskell!!</p>

            </div>
        </div>




        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>

  
    );
}


export default Programming_guide;