import React from 'react';
import '../styles/button.css';
import { Link } from 'react-router-dom';

export const Btton = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    name
}) => {
    const getName = name;
    const checkButtonStyle = buttonStyle;
    const checkButtonSize = buttonSize;

    if (checkButtonStyle === 'btn') {
        return (
            <Link to='/getStarted' className='btn-web'>
                <btton
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </btton>
            </Link>
        )
    }
    else if (checkButtonStyle === 'coursebtn') {
        return (
            <btton
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
            </btton>
        )
    }
    else if (checkButtonStyle === 'classbtn') {
        return (
            <btton
                className={`btn ${checkButtonStyle} ${checkButtonSize} ${getName}`}
                onClick={onClick}
                type={type}
                >
                    {children}
            </btton>
        )
    }
    else {
        return (
            <a href='https://www.csulb.edu/' className='btn-web'>
                <btton
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </btton>
            </a>
        )
    }
};