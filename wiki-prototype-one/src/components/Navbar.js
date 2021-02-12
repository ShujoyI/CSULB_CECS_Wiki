import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
   
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <ul className='navbar-left'>
                    <li className='navbar-home'>
                        <Link to='/' className='navbar-links'>
                            Home
                        </Link>
                    </li>
                    <li className='navbar-search'>
                        <input type="text" className="navbar-search-box" placeholder="Search..." />
                    </li>
                </ul>
                <ul className='navbar-right'>
                    <li className='navbar-account'>
                        <Link to='/account' className='navbar-links'>
                            Account
                        </Link>
                    </li>
                </ul>    
                <a href='https://www.csulb.edu/' className='navbar-csulb-link'>
                    <Button className='csulb-button' style={{borderColor:'#000'}}>
                        CSULB HOME
                    </Button>
                </a>        
            </div>
        </div>
    )
}

export default Navbar