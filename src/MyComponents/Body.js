import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { sectionHeadings } from "./common-components/com-component";
import { tagline } from "./common-components/com-component";
import { description } from "./common-components/com-component";

export default function Body() {
  return (
    <Box className="about-div contact" id="About">
      {sectionHeadings("About")}
      <Box className="about-tagline">
        <blockquote>
          {" "}
          <h3>{tagline(0)}</h3>
        </blockquote>
        <p> {description(0)}</p>
      </Box>
    </Box>
  );

  // For API Fetch method code written below. I tried both the method. Both are working correctly

  //  let desc;
  //  const [desc, setDesc] = useState(null)
  //  const description = () => {
  //   //  var tag = ''
  //     fetch("http://127.0.0.1:8000/api/abouts").then(
  //       function(resp){
  //         return resp.json();
  //       }
  //     ).then(
  //      function(data){
  //         console.log(data);
  //         setDesc(data[1]);
  //       }
  //     )
  //   }
  //   if(desc == null){
  //   description();
  // }
}
