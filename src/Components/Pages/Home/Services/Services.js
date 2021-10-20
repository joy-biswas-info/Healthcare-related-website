import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container id="services" className="bg-primary p-2">
                <h2 className="text-white mt-4 mb-3 fs-1 fw-bold text-center ">Our Services</h2>
                <Row className="services justify-content-center">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }

                </Row>
        </Container>
    );
};

export default Services;