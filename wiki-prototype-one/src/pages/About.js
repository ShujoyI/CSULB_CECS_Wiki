import React from 'react'
import '../App.css'
import '../styles/About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className='about'>
            <div className = 'about-container'>
                <div className='aboutHeaders'>
                <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <a href="/">Home</a></li>
                            <li class="breadcrumb-item"> About</li>
                        </ol> 
                </div>
                <div className="container">
                    <h1 id="crafting-resume"><b>About the Wiki</b></h1>
                    <p>This site aims to provided a user-friendly wiki page that contains all necessary  information that is needed in one place to have a successful career as a Computer Science student at California State University Long Beach.</p>
                    <p>Having information organized is the key to success. We want to ensure that everyone has access to quality information they need for success. The problem that arises with this is that all of this information is scattered throughout different places on the web, making it both difficult and time-consuming for students success. We started compiling information into this Wiki to try to fix that. Each successive group of students should be better equipped than the last.</p>
                    <p>If you have any feedback or questions, reach out to us by <Link to='/Feedback'> filling out this form!</Link></p>
                    <p>Hope it's helpful.</p>
                    
                </div>
            </div>
        </div>
    );
}