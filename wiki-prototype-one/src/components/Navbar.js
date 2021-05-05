import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
          <div class="menu-icon"><span class="fas fa-bars"></span></div>
         
          <div class="logo" >
            <Link className='text-link' to='/'>BeachCS <i class="fas fa-umbrella-beach"></i></Link>
          </div>
          <div class="nav-items">
            <li><a href="/academics">Academics</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/courseExplorer">Course Explorer</a></li>
            <li><a href="/guides">Guides</a></li>
          </div>
          <div class="search-icon"><span class="fas fa-search"></span></div>
          <div class="cancel-icon"><span class="fas fa-times"></span></div>

          <form action="#">
            <input type="search" class="search-data" placeholder="Search" required/>
            <button type="submit" class="fas fa-search"></button>
          </form>
          <div class="nav-items-lb">
            <a href='https://www.csulb.edu/'s>CSULB Home</a>
          </div>
    </nav>
    )
}

export default Navbar