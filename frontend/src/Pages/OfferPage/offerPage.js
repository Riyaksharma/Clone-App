import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./offerPage.css";

const OfferPage = () => {
  return (
    <div className="offer_links">
      <ul className="offers">
        <li>
          <Link to="/top-offers" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt="Offers"
              style={{ width: "70px", height: "58px" }}
            />
            Top Offers
          </Link>
        </li>
        <li>
          <Link to="/fashion" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
              alt="fashion"
              style={{ width: "70px", height: "60px" }}
            />
            Fashion
          </Link>
        </li>
        <li>
          <Link to="/electronics" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt="Electronics"
              style={{ width: "70px", height: "58px" }}
            />
            Electronics
          </Link>
        </li>
        <li>
          <Link to="/mobiles" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt="Mobiles"
              style={{ width: "70px", height: "58px" }}
            />
            Mobiles
          </Link>
        </li>
        <li>
          <Link to="/grocery" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt="Grocery"
              style={{ width: "70px", height: "58px" }}
            />
            Grocery
          </Link>
        </li>
        <li>
          <Link to="/homeAppli" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
              alt="Home"
              style={{ width: "70px", height: "58px" }}
            />
            Home Decor
          </Link>
        </li>
        <li>
          <Link to="/beauty" style={{ textDecoration: "none" }}>
            <Avatar
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt="Beauty"
              style={{ width: "70px", height: "58px" }}
            />
            Beauty
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OfferPage;
