import React from 'react';
import './CsulbButton.css';

const STYLES = ['csulbbtn--primary', 'csulbbtn--outline'];

const SIZES = ['csulbbtn--medium', 'csulbbtn--large'];
export const CsulbButton = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0]

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
};
