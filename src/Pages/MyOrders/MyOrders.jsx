import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Row } from "react-bootstrap";
import OrderProduct from "./OrderProduct";
import useAuth from "../../Hooks/useAuth";

const MyOrders = ({ quantity }) => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://powerful-earth-33581.herokuapp.com/orders/${user.email}`)
    .then((response) => response.json())
      .then((data) => setProducts(data));
    }, [user.email, products]);
  return (
    <Container className='my-md-5 my-3 text-center'>
    {products.length ? (
        <Row className='g-5'>
          {products.slice(0, quantity).map((product) => (
            <OrderProduct key={product._id} order={product} />
          ))}
        </Row>
      ) : (
        <h3>You have no products added</h3>
      )}
    </Container>
  );
};

export default MyOrders;