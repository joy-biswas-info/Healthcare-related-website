import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import useAuth from '../../Hooks/useAuth';
import Register from '../../Register/Register';
import "./LogIn.css"

const LogIn = () => {
    const {signInUsingGoogle,user,logOut}=useAuth()
    return (
        <div>
            <Image fluid src={user.photoURL}/>
            <h2>Welcome {user.displayName}</h2>
            {user.email?  
            <Button variant="danger" onClick={logOut}>Log Out</Button>
            :
            <Button varient="primary" onClick={signInUsingGoogle}>Google login</Button>
            }
            <Register></Register>
        </div>
    );
};

export default LogIn;