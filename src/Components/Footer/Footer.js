import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white p-3 mt-5">
            <div className="d-flex justify-content-around row">
                <div className="col-lg-4 col-md-12 px-3 text-start">
                    <p>Medicare is a leading health care facility in Bangladesh. The vission of Medicare is to provide optimum health care service. It stablished in 2000. From the very beginnig, it maintain its quality.</p>
                    <p>All right reserved@Medicare,2022</p>
                </div>
                <div className="col-lg-4 col-md-12">
                <p><Link className="text-white pe-3" to='./home'>Home</Link></p>
                <p><Link className="text-white pe-3" to='./home#services'>Services</Link></p>
                <p><Link className="text-white pe-3" to='./login'>Login</Link></p>
                <p><Link className="text-white pe-3" to='./contact'>Contact Us</Link></p>
                </div>
                <div className="col-lg-4 col-md-12">
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i> Facebook</a></p>
                    <p><a href="http://github.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Github</a></p>
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a></p>
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i> StackOverflow</a></p>
                
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;