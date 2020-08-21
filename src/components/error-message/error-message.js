import React from "react";
import './error-message.css';
import  icon from './death-star-icon.png'

const ErrorMessage = () => {
    return (
        <div className='message alert alert-danger'>
            <img src={icon} alt='error-icon' width='60px' height='60'/>
            <div>
                <span>Error</span>
            </div>
            <div>
                <span>Something gone wrong. Please reload page</span>
            </div>
        </div>
    )
}

export default ErrorMessage