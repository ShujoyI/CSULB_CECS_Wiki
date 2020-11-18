import React from 'react';
import '../App.css';
import '../styles/GetStarted.css';
import GetStartedItem from '../components/GetStartedItem';

export default function GetStarted () {
    return (
        <div className='cards'>
            <h1>Check out these helpful pages!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
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
            </div>
        </div>
    );
}