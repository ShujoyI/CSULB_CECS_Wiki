import React from 'react';
import '../App.css';
import { Btton } from '../components/Button';
import '../styles/Home.css';

function Home () {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>BeachCS</h1>
            <div className='hero-btns'>
                <Btton 
                    className='btns'
                    buttonStyle='btn'
                    buttonSize='large'
                >
                    GET STARTED
                </Btton>
            </div>
        </div>
    );
}

export default Home;