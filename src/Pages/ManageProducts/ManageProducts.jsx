import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Row } from "react-bootstrap";
import ManageProduct from "./ManageProduct";

const ManageProducts = ({ quantity }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-earth-33581.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [products]);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <Row className='g-5'>
        {products.map((product) => (
          <ManageProduct key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;