import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Image } from 'react-bootstrap';
import "./Service.css"
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,img,tagLine,id}=props.service;
    
    return (
        <Col className="bg-white rounded m-1 col-lg-3 col-sm-6 col-12 p-2">
            <img style={{width: '250px', height: '170px'}} src={img} alt="" />
            <p>{tagLine}</p>
            <h2>{name}</h2>
            <Link to={`booking/${id}`}>
            <Button variant="danger">Book Now</Button>
            </Link>

        </Col>
    );
};

export default Service;