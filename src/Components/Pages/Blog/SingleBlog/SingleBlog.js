import React from 'react';
import { Col } from 'react-bootstrap';

const SingleBlog = (props) => {
    const {title,body}=props.post;
    return (
        <Col xl={3} md={6} className="bg-primary m-1 rounded blog">
            <h2 className="text-white fs-3">{title}</h2>
            <p>{body}</p>
        </Col>
    );
};

export default SingleBlog;