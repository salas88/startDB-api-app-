import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={icon} alt="error icon"></img>
            <span className="woow">WOOW</span>
            <span>
                something has wrong terrible wrong
            </span>
            <span>
                (but we already sent droid to fi it)
            </span>
        </div>
    )
}

export default ErrorIndicator;