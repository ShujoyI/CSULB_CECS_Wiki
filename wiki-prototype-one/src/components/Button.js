import React from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = buttonStyle;
    const checkButtonSize = buttonSize;

    if (checkButtonStyle === 'btn') {
        return (
            <Link to='/getStarted' className='btn-web'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )
    }
    else if (checkButtonStyle === 'coursebtn') {
        return (
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
            </button>
        )
    }
    else {
        return (
            <a href='https://www.csulb.edu/' className='btn-web'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </a>
        )
    }
};