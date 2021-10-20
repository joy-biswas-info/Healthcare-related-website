import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleBlog from './SingleBlog/SingleBlog';


const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts.json")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <Container className="">
            <Row className="justify-content-center">
              {
                    posts.map(post => <SingleBlog post={post} key={post.id}></SingleBlog>)
                }

            </Row>

        </Container>
    );
};

export default Blog;