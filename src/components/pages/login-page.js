import React from "react";
import {Redirect} from 'react-router-dom';


const LoginPage = ({isLoggedIn, onLogin}) => {

    if (isLoggedIn) {
        return <Redirect to='/'/>
    }

    return (
        <div className='jumbotron' >
            <p>To login press button</p>
            <button
                className='btn btn-primary'
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;