import React from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import GetStartedItem from '../components/GetStartedItem';
import '../styles/GetStarted.css';

function Home () {
    return (
        <div className='home'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <div className='home-top'>
                <Card className='homeCard'>
                    <Card.Header className='homeHead'>BeachCS</Card.Header>
                        <Card.Body className='homeBody'>
                            <Card.Text claassName='homeText'>A one-stop shop for all things Computer Science at CSU Long Beach.</Card.Text>
                        </Card.Body>
                </Card>
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
                        text="Discover resources to help you get a job"
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
        </div>
    );
}

export default Home;