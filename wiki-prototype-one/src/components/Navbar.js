import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          BeachCS
          <i class="fas fa-umbrella-beach"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <li to='/academics' className='nav-links' onClick={closeMobileMenu}>
              Academics
            </li>
          </li>
          <li className='nav-item'>
            <Link to='/career' className='nav-links' onClick={closeMobileMenu}> 
              Career 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/courseExplorer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Course Explorer
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/guides'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Guides
            </Link>
          </li>
          
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar