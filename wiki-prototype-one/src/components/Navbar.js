import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
   
    return (
        <div className='navbar-container'>
            <div className='navbar-items'>
                <Link to='/' className='navbar-link-one' style={{ textDecoration: 'none' }}>
                    Home
                </Link>
                <input type="text" className="navbar-search-box" placeholder="Search..." />
                <Link to='/account' className='navbar-link-two' style={{ textDecoration: 'none' }}>
                    Account
                </Link>    
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