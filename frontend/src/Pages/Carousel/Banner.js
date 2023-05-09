import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Banner.css";
import { styled } from "@mui/material";

const Image = styled("img")({
  height: 200,
  width: "100%",
  cursor: "pointer",
  overflowX: "none",
});
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={4000}>
      <div>
        <Image
          src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50"
          alt=""
        />
      </div>
      <div>
        <Image
          src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50"
          alt=""
        />
      </div>
      <div>
        <Image
          src="https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50"
          alt=""
        />
      </div>
      <div>
        <Image
          src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default Banner;
