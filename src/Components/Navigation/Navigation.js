import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login/register</Link>
            
            
        </div>
    );
};

export default Navigation;