import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='home'>
            <div className='video-container'>
                <video src="/videos/video-3.mp4" autoPlay loop muted />
            </div>
            <div className='text-container'>
                <h1>Computer Science @ The Beach</h1>
            </div>

            <div className='list_images'>
                <Link className='image_link' to='/academics' style={{ textDecoration: 'none' }}>
                    <div className='dimmer_one'/>
                    <div className='academics_text_container'>
                        <h1>ACADEMICS</h1>
                    </div>
                </Link>
                <div className='list_image_item_one'>
                    <figure className='list_figure' data-category="Academics">
                        <img src='images/img-academics.png' alt='Academics' className="list_image"/>
                    </figure>
                </div>

                <Link className='image_link' to='/career' style={{ textDecoration: 'none' }}>
                    <div className='dimmer_two'/>
                    <div className='career_text_container'>
                        <h1>CAREER</h1>
                    </div>
                </Link>
                <div className='list_image_item_two'>
                    <figure className='list_figure'>
                        <img src='images/img-career.jpg' alt='Career' className="list_image"/>
                    </figure>
                </div>

                <Link className='image_link' to='/guides' style={{ textDecoration: 'none' }}>
                    <div className='dimmer_three'/>
                    <div className='guides_text_container'>
                        <h1>GUIDES</h1>
                    </div>
                </Link>
                <div className='list_image_item_three'>
                        <figure className='list_figure'>
                            <img src='images/img-guides.jpg' alt='Guides' className="list_image"/>
                        </figure>
                </div>

                <Link className='image_link' to='/courseExplorer' style={{ textDecoration: 'none' }}>
                    <div className='dimmer_four'/>
                    <div className='cexplorer_text_container'>
                        <h1>COURSE EXPLORER</h1>
                    </div>
                </Link>  
                <div className='list_image_item_four'>
                        <figure className='list_figure'>
                            <img src='images/img-course-explorer.jpg' alt='Course Explorer' className="list_image"/>
                        </figure>
                </div>

            </div>            
        </div>
    );
}

export default Home;