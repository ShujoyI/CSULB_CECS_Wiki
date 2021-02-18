import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import GetStartedItem from '../components/GetStartedItem';
import '../styles/GetStarted.css';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='home'>
<<<<<<< Updated upstream
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <div className='home-top'>
                <div className='home-container'>
                    <div className='home-container-header'>
                        <p>BeachCS</p>
                    </div>
                    <Link to='/getStarted' className='home-get-started-link'>
                        <Button className='home-button'>
                            GET STARTED
                        </Button>
                    </Link>
                </div>
                <div className='home-containter-two'>
                    <div className='home-container-text'>
                        <p>An educational guide to succeeding as a CS undergraduate at CSULB. Click Get Started to dive right in.</p>
                    </div>
                    <Link to='/getStarted' className='home-get-started-link'>
                        <Button className='home-button'>
                            GET STARTED
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='home-bottom'>
                <ul className='cards__item'>
                    <GetStartedItem 
                        src="images/img-course-explorer.jpg"
                        text="View CS courses currently offered at CSULB"
                        label='Course Explorer'
                        path='/courseExplorer'
                    />
                    <GetStartedItem
                        src="images/img-guides.jpg"
                        text="Explore helpful tutorials for students"
                        label='Guides'
                        path='/guides'
                    />
                    <GetStartedItem 
                        src="images/img-career.jpg"
                        text="Discover how to succeed post-graduation"
                        label='Career'
                        path='/career'
                    />
                    <GetStartedItem
                        src="images/img-academics.png"
                        text="Learn how to succeed at CSULB"
                        label='Academics'
                        path='/academics'
                    />
                </ul>
            </div>
=======
            <div className='video-container'>
                <video src="/videos/video-3.mp4" autoPlay loop muted />
                <div className='text-container'>Computer Science @ The Beach</div>
            </div>

            <div className='list_images'>

                <Link to='/academics' style={{ textDecoration: 'none' }}>
                    <div className='dimmer'>
                        <figure className='list_figure'>
                            <img src='images/img-academics.png' alt='Academics'/>
                            <div className='link_text_container' style={{ transform: 'translateX(25%)' }}>
                                <h1>ACADEMICS</h1>
                            </div>
                        </figure>
                    </div>
                </Link>

                <Link to='/guides' style={{ textDecoration: 'none' }}>
                    <div className='dimmer'>
                        <figure className='list_figure'>
                            <img src='images/img-guides.jpg' alt='Guides' />
                            <div className='link_text_container' style={{ transform: 'translateX(33%)' }}>
                                <h1 style={{ width: '35%' }}>GUIDES</h1>
                            </div>
                        </figure>
                    </div>
                </Link>

                <Link to='/career' style={{ textDecoration: 'none' }}>
                    <div className='dimmer'>
                        <figure className='list_figure'>
                            <img src='images/img-career.jpg' alt='Career' />
                            <div className='link_text_container' style={{ transform: 'translateX(31%)' }}>
                                <h1 style={{ width: '35%' }}>CAREER</h1>
                            </div>
                        </figure>
                    </div>
                </Link>

                <Link to='/courseExplorer' style={{ textDecoration: 'none' }}>
                    <div className='dimmer'>
                        <figure className='list_figure'>
                            <img src='images/img-course-explorer.jpg' alt='Course Explorer' />
                            <div className='link_text_container' style={{ transform: 'translateX(16%)' }}>
                                <h1 style={{ width: '70%' }}>COURSE EXPLORER</h1>
                            </div>
                        </figure>
                    </div>
                </Link>  
            </div>            
>>>>>>> Stashed changes
        </div>
    );
}

export default Home;