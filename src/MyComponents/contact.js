import React, { useState } from "react";
// import React from 'react'
import { Box} from "@material-ui/core";
import { sectionHeadings, conTitle, conLink } from "./common-components/com-component";
// import {} from './common-components/com-component';
export default function Contact() {

  //------------------------- API Fetch call method---------------------------

  //  let desc;
  //  const [contac, setCont] = useState(null)
  //  const contact = () => {
  //   //  var tag = ''
  //     fetch("http://127.0.0.1:8000/api/connects").then(
  //       function(resp){
  //         return resp.json();
  //       }
  //     ).then(
  //      function(data){
  //         console.log(data);
  //         setCont(data[0]);
  //       }
  //     )
  //   }
  //   if(contac == null){
  //   contact();
  // }
  // return (
  //   <Box className="about-div contact" id="Contact">
  //     {sectionHeadings("Contact")}
  //     <Box className="about-tagline">
  //           <blockquote>
  //           <h2 id="social-media">
  //             {contac?.title}
  //               {/* Front End Developer who focuses on writing clean, elegant and
  //               efficient code. */}
  //           </h2>
  //           </blockquote>

  //           <p id="about-p">
  //           {/* {description(1)} */}
  //           {contac?.link}

  //           </p>
  //     </Box>
  //   </Box>    
  // );

  //---------------------------JSON Method---------------------------------


  return (
    <Box className="about-div contact" id="Contact">
      {sectionHeadings("Contact")}
      <Box className="about-tagline contact-sec">
     <blockquote className="contact-b"> <h3>{conTitle(0)}</h3></blockquote>
     <p className="contact-p"><a href={conLink(0)}> {conLink(0)}</a></p>
     <blockquote className="contact-b"> <h3>{conTitle(1)}</h3></blockquote>
     <p className="contact-p"><a href={conLink(1)}> {conLink(1)}</a></p>
      </Box>
    </Box>    
  );

}

