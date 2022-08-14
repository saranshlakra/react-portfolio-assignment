import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import { MenuIcon } from "@mui/icons-material";
// import Button from '@mui/material/Button';

export default function Navi() {
  const navMenus = [
    { name: "Home", Id: "Home" },
    { name: "About", Id: "About" },
    { name: "Experience", Id: "Experience" },
    { name: "Projects", Id: "Projects" },
    { name: "Contact", Id: "Contact" },
  ];
  return (
    <AppBar position="fixed" className="Navi">
      <Toolbar className="Toolbar">
        <Box
          className="nav-list"
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          {navMenus.map((menuName, index) => (
            <Button className="menu-btn" href={`#${menuName.name}`}>
              {menuName.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
