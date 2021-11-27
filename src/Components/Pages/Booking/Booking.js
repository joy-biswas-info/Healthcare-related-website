import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [detailes, setDetailes] = useState([]);
    const [singleDetailes, setSingleDetailes] = useState({});

    useEffect(() => {
        fetch("/servicesDetails.json")
            .then(res => res.json(serviceId))
            .then(data => setDetailes(data.detaile))
    }, []);

    useEffect(() => {
        const serviceDetailes = detailes.find(detailes => detailes.id == serviceId)
        setSingleDetailes(serviceDetailes);

    }, [detailes]);


    return (
        <Container className="my-4">
            {singleDetailes && <div>
                <img src={singleDetailes.img} alt="service" />
                <h2 className="text-primary mt-5 mb-3 fs-1 fw-bold">{singleDetailes.name}</h2>
                <p>{singleDetailes.description}</p>
            </div>}
        </Container>
    )
};

export default Booking;