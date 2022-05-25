import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ManageOrder from "./ManageOrder";

const AllOrders = () => {
  // make variable for store product

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-earth-33581.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setProducts(data));
   }, [products]);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <Row className='g-5'>
      {products.map((product) => (
          <ManageOrder key={product._id} order={product} />
        ))}
      </Row>
    </Container>
  );
};

export default AllOrders;