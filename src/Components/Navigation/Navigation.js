import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/login">Login/register</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Navigation;