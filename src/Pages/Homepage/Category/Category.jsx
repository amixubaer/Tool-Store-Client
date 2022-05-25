import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "@mui/material/Container";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Container className='my-md-5 my-3'>
      <Row>
        <Col xs={12} md={6}>
          <div className='category-img mt-3'>
          <Link to='/products'>
            <img
              src='https://5.imimg.com/data5/HG/KH/MY-14289147/pipe-wrench-500x500.jpg'
              className='img-fluid cat-img'
              alt=''
            />
            </Link>
          </div>
      
          <div className='category-img mt-3'>
          <Link to='/products'>
            <img
              src='https://5.imimg.com/data5/RH/VS/HU/SELLER-3001986/iron-screwdriver-500x500.jpg'
              className='img-fluid cat-img'
              alt=''
            />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='category-img mt-3'>
          <Link to='/products'>
            <img
              src='https://5.imimg.com/data5/XN/TU/SP/SELLER-1668175/brass-hammers-500x500.jpg'
              className='img-fluid cat-img'
              alt=''
            />
            </Link>
          </div>
          <div className='category-img mt-3'>
          <Link to='/products'>
            <img
              src='https://4.imimg.com/data4/NS/CY/MY-25074085/drill-machine-500x500.jpg'
              className='img-fluid cat-img'
              alt=''
            />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
