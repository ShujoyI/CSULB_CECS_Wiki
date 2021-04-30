import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='home'>
            <div className='video-container'>
                <video src="videos/video-3.mp4" autoPlay loop muted />
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
        </div>
    );
}

export default Home;