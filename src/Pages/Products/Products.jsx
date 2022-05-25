import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import "./Products.css";
import { Row } from "react-bootstrap";
import Product from "./Product";

const Products = ({ quantity }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-earth-33581.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [products]);
  return (
    <Container className='my-md-5 my-3 text-center '>
      <p className='products-title'>Feature Products</p>
      <img src='https://i.ibb.co/jrcL1wV/divider1.png' alt='' />
      <Row className='g-5 d-flex'>
        {products.slice(0, quantity).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
