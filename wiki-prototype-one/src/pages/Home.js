import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='home'>
            <div className='video-container'>
                <video src="videos/video-3.mp4" autoPlay={true} loop muted />
                <div className='text-container'>Computer Science @ The Beach</div>
            </div>
        
            <div className='list_images'>

                <Link className='academic-link' to='/academics' style={{ textDecoration: 'none' }}>
                    <div className='dimmer-academics'>
                        <img src='images/img-academics.png' alt='Academics'/>
                        <div className='academics_text_container'>
                            ACADEMICS
                        </div>
                    </div>
                </Link>

                <Link className='guide-link' to='/guides' style={{ textDecoration: 'none' }}>
                    <div className='dimmer-guides'>
                        <img src='images/img-guides.jpg' alt='Guides' />
                        <div className='guides_text_container'>
                            GUIDES
                        </div>
                    </div>
                </Link>

                <Link className='career-link' to='/career' style={{ textDecoration: 'none' }}>
                    <div className='dimmer-career'>
                        <img src='images/img-career.jpg' alt='Career' />
                        <div className='career_text_container'>
                            CAREER
                        </div>
                    </div>
                </Link>

                <Link className='course-explorer-link' to='/courseExplorer' style={{ textDecoration: 'none' }}>
                    <div className='dimmer-course-explorer'>
                        <img src='images/img-course-explorer.jpg' alt='Course Explorer' />
                        <div className='course_explorer_text_container'>
                            COURSE EXPLORER
                        </div>
                    </div>
                </Link>              
            </div>
        </div>
    );
}

export default Home;