import AddIcon from "@mui/icons-material/Add";
import { Box, styled, Typography } from "@mui/material";

import Search from "./SearchBar/searchBar";
import Buttons from "./Buttons/button";
import FlipKart from "../../images/f.png";

import "./navBar.css";

const Component = styled(Box)`
  line-height: 0;
  padding: 5rem;
`;

const Subheader = styled(Typography)`
  font-size: 15px;
  font-style: italic;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const NavBar = () => {
  return (
    <nav className="navbar">
      <Component>
        <div className="logo">
          <img src={FlipKart} alt="Jiggly" />
        </div>
        <Box>
          <Subheader>
            Explore
            <span style={{ color: "#FFCC00" }}>
              {" "}
              Plus
              <AddIcon />
            </span>
          </Subheader>
        </Box>
      </Component>
      <Search />
      <Buttons />
    </nav>
  );
};

export default NavBar;
