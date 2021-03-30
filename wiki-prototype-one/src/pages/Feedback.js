import React from 'react';
import '../App.css'
import '../styles/Feedback.css';

export default function Feedback(){ 
    return (
        <div className='feedback'>
            <div className = 'feedback-container'>
                <p></p>
                <p><h1 id="feedback-"><b></b></h1></p>
                <iframe
                    title="Feedback and Q&A"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeCwdc-M450A535j2TGHuuZcuUb8MjF_Q7ziW8iQ9pjcbZIXg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Loading...
                </iframe>
            </div>
        </div>
    );
    
}