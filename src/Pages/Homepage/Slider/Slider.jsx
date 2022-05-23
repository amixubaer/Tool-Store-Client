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
            src='https://i.ibb.co/zsPV0fq/sider4-2.jpg'
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
            className='d-block w-80 h-100'
            src='https://5.imimg.com/data5/ST/RB/MN/SELLER-2474259/bill-hocks-500x500.jpg'
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
