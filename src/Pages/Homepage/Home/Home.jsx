import React from "react";
import Button from "@mui/material/Button";
import Products from "../../Products/Products";
import Category from "../Category/Category";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      
      <Slider />
      <Category />
      <Products quantity={6} />
      <div className='text-center'>
        <Link to='/products' style={{ textDecoration: "none" }}>
          <Button variant='contained' color='secondary'>
            Explore All Products
          </Button>
        </Link>
      </div>
      <Review />
    </div>
  );
};

export default Home;
