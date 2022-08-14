import React from "react";
import { Box, Typography } from "@material-ui/core";
// import { typography } from '@material-ui/system';
import Navi from "./Navi";
import { Styler } from "./common-components/com-component";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";

export default function Headers() {
  return (
    //   Box serves as the wrapper in material ui
    <Box className="Header-div" id="Home">
      {/* <Box className="Header-div-1">  */}
      <Navi />
      <Box className="Header-div-1">
        <Typography variant="h3" component="h4" className="title">
          I am Saransh Lakra
        </Typography>
        <Typography variant="h5" component="h6" className="tagline">
          I'm a Web Developer
        </Typography>
        {Styler({
          about: "About me",
          isIcon: true,
          icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
      {/* </Box>   */}
    </Box>
  );
}
