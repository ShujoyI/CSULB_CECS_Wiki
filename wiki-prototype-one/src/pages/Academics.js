import React from 'react'
import '../App.css'
import '../styles/Academics.css';
import { Link } from 'react-router-dom';

export default function Academics() {
    return (
        
        <div className='academics-container'> 
            <div className='academics-title'>
                <h1>Academics</h1>
            </div>
            <div className='academics-wrapper'>
                <div className='academics-description'>
                    <h3>If you are looking for what CS courses are available at CSULB, go to the {" "}
                        <Link to="/courseExplorer">Course Explorer.</Link>
                    </h3>
                </div>
                <div className='academics-links'>
                    <li><Link to='/masters'>Masters Program</Link></li>
                    <li><Link to='/minors'>Cybersecurity Minor</Link></li>
                </div>
            </div>
        </div>
    

        // <div className='academics-container'> 
        //     <div className='academics-title'>
        //         <h1>Academics</h1>
        //     </div>
        //     <div className='academics-description'>
        //         <h3>If you are looking for what CS courses to take, go to the {" "}
        //             <Link to="/courseExplorer">Click here</Link>
        //         </h3>
        //     </div>
        //     <div className="academics-development-center" >
        //         <h3>Student Affairs </h3>
        //         <p>Career Development center </p>
        //         <li><Link to="http://www.careers.csulb.edu/">Success workfairs</Link></li><li><link></link></li>
        //         {/* <form action="http://www.careers.csulb.edu/">
        //             <button className="btng btn1">Career center</button>
        //         </form> */}
        //     </div>       
        // </div>
        
    );
}