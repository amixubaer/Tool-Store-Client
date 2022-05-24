import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  // return home page slide here
  return (
    <div className='Slider'>
      <Carousel className='text-left carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.business2community.com/wp-content/uploads/2016/07/website-application-softare-testing-tools.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p className='slider-text'>AMAZING Deals</p>
            <h3 className='slider-title'>All Tools</h3>
            <p className='slider-text'>Discount 20% Off For Members</p>
            <Button
              className='px-4 py-3 rounded-pill mt-4'
              variant='outline-danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://martech.org/wp-content/uploads/2014/08/webmaster-tools-development-ss-1920.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>AMAZING Deals</p>
            <h3 className='slider-title'>All Tools</h3>
            <p className='slider-text'>Discount 20% Off For Members</p>
            <Button
              className='px-4 py-3 rounded-pill mt-4'
              variant='outline-danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Slider;
