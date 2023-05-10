import React from "react";
import { Box, styled } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Component = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  // padding: 20,
});

const Img = styled("img")({
  width: "90%",
  height: "270px",
  borderRadius: "8%",
  padding: 20,
});

export function TopOfferPage({ products }) {
  const prod = products.slice(0, 6);

  return (
    <div>
      <Component>
        {prod.map((item) => (
          <Box
            sx={{
              width: "31%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              marginRight: "30px",
              marginBottom: "20px",
            }}
          >
            <div>
              <Img src={item.posterUrl} alt="" />
              {/* <p>{item.title.shortTitle}</p> */}
            </div>
          </Box>
        ))}
      </Component>
    </div>
  );
}

export function FashionPage({ products }) {
  const fashion = products.filter((item) => item.tagline === "Fashion");

  const fashionProd = fashion.slice(-3);

  return (
    <div>
      <Component>
        {fashionProd.map((item) => (
          <Box
            sx={{
              width: "31%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              marginRight: "30px",
              marginBottom: "20px",
            }}
          >
            <div>
              <Img src={item.posterUrl} alt="" />
              {/* <p>{item.title.shortTitle}</p> */}
            </div>
          </Box>
        ))}
      </Component>
    </div>
  );
}
