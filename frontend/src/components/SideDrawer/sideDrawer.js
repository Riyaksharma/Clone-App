import * as React from "react";

import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import LoginIcon from "@mui/icons-material/Login";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

const icons = [InboxIcon, DeleteIcon, AccountCircle, LoginIcon];

export default function Drawer() {
  const [state, setState] = React.useState({
    Menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown") {
      //dont open it
      return;
    }

    setState({ ...state, [anchor]: open }); //open the anchor
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#2487eb",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ lineHeight: 0 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            paddingLeft: "15px",
            paddingTop: "20px",
            fontSize: "18px",
          }}
        >
          Trending
        </Typography>
        {["BestSellers", "New Releases", "Movers & shakers"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List sx={{ lineHeight: 0 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            paddingLeft: "15px",
            paddingTop: "20px",
            fontSize: "18px",
          }}
        >
          Digital Content & Devices
        </Typography>
        {[
          "Prime Video",
          "Amazon Music",
          "Apps for Androids",
          "Echo Alexa And Smart Home",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
              <ListItemIcon sx={{ fontSize: "small" }}>
                <ArrowRightIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List sx={{ lineHeight: 0 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            paddingLeft: "15px",
            paddingTop: "20px",
            fontSize: "18px",
          }}
        >
          Shop By Department
        </Typography>
        {["Films, TV, Games & Music", "Amazon Fresh", "Books"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
              <ListItemIcon sx={{ fontSize: "small" }}>
                <ArrowRightIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {["Items", "Trash", "Your Profile", "Sign In"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {React.createElement(icons[index % icons.length])}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
