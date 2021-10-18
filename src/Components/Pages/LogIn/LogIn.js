import React from 'react';
import useAuth from '../../Hooks/useAuth';
import "./LogIn.css"

const LogIn = () => {
    const {signInUsingGoogle,user}=useAuth()
    return (
        <div>
            <h2>Hi {user.displayName}</h2>
            <h1>This is log in page</h1>
            <button onClick={signInUsingGoogle}>Google login</button>
        </div>
    );
};

export default LogIn;