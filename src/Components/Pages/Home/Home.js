import React from 'react';
import { Container } from 'react-bootstrap';
import ControlledCarousel from './Banner/Banner';
import DoctorList from './Doctors/Doctors';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <Container>
            <Services></Services>
            <DoctorList></DoctorList>
            </Container>
        </div>
    );
};

export default Home;