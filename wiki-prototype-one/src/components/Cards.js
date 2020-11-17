import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these helpful pages!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                            src="images/img-course-explorer.jpg"
                            text="View CS courses currently offered at CSULB"
                            label='Course Explorer'
                            path='/courseExplorer'
                        />
                        <CardItem 
                            src="images/img-guides.jpg"
                            text="Explore helpful tutorials for students"
                            label='Guides'
                            path='/guides'
                        />
                        <CardItem 
                            src="images/img-career.jpg"
                            text="Discover how to succeed post-graduation"
                            label='Career'
                            path='/career'
                        />
                         <CardItem 
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

export default Cards
