import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./doctorList.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id="doctors" className="container">
            <h2 className="text-primary mt-5 mb-3 fs-1 fw-bold text-center">Our Expert Doctors</h2>
            <div className="row">
            {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default DoctorList;