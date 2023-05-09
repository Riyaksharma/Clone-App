import React, { Fragment } from "react";
import { Box, styled } from "@mui/material";
import "./InstantOfferPage.css";

const Component = styled(Box)({
  width: 430,
  height: 230,
  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
});

function InstantOfferPage() {
  return (
    <Fragment>
      <ul className="instant_offers">
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
        <li>
          <Component>
            <h3>Hello</h3>
          </Component>
        </li>
      </ul>
    </Fragment>
  );
}

export default InstantOfferPage;
