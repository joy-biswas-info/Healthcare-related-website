import React from 'react';

const Doctor = (props) => {
    const { name, img, degree, specialist, visitingHour, visitingFee } = props.doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <h3>{name}</h3>
            <p>{degree}</p>
            <img style={{width: '300px', height: '170px'}} src={img} alt="" />
            <p>{specialist}</p>
            <p>Visiting Hour: {visitingHour}</p>
            <p>Visiting Fee: {visitingFee}</p>
        </div>
    );
};

export default Doctor;