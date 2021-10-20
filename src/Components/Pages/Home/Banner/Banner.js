import React, { useState } from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img 
                className="d-block w-100 h-50-5"
                src="./img/bg1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-primary mt-5 mb-3 fs-1 fw-bold text-center">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50-5"
                src="./img/bg3.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3 className="text-primary mt-5 mb-3 fs-1 fw-bold text-center">We Provide Total Health Care Solution</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50-5"
                src="./img/bg1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-primary mt-5 mb-3 fs-1 fw-bold text-center">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50-5"
                src="./img/bg3.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3 className="text-primary mt-5 mb-3 fs-1 fw-bold text-center">We Provide Total Health Care Solution</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      export default ControlledCarousel;