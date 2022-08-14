import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { sectionHeadings } from "./common-components/com-component";
import { companyName, position, job_role } from "./common-components/com-component";
import portfolioData from "./common-components/portfolioData.json";
// import {  } from "./common-components/com-component";
// import { , experienceCard } from "./common-components/com-component";

export default function BodyExperience() {

  // For API Fetch method code written below. I tried both the method. Both are working correctly

//    let expData= [];
//   const [exp, setExp] = useState(null);
//   const experience = () => {
//     //  var tag = ''
//     fetch("http://127.0.0.1:8000/api/experiences")
//       .then(function (resp) {
//         return resp.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//              expData.push(experienceCard(data[i]));
//         }

//         // console.log(expData)

//         setExp(expData);
        
//       });
//   };
//   if(exp == null){
//       experience();
//     }

// let expData= [];
// for (let i = 0; i < portfolioData.length; i++) {
//   expData.push(companyName(i));
//   // expData.push(position(i));
  
// }
// console.log(expData)

  return (
    <Box className="about-div" id="Experience">
      {sectionHeadings("Experience")}
      {/* for api method */}
      {/* {exp} */}
      {/* {experienceCard(expData[0])} */} 

      
      <Box className="about-tagline exp">
     <h3> {companyName(0)}</h3>
     <h4> {position(0)}</h4>
      <p>{job_role(0)}</p>
      </Box>
      <Box className="about-tagline exp">
     <h3> {companyName(1)}</h3>
     <h4> {position(1)}</h4>
      <p>{job_role(1)}</p>
      </Box>
      <Box className="about-tagline exp">
     <h3> {companyName(2)}</h3>
     <h4> {position(2)}</h4>
      <p>{job_role(2)}</p>
      </Box>
      <Box className="about-tagline exp">
     <h3> {companyName(3)}</h3>
     <h4> {position(3)}</h4>
      <p>{job_role(3)}</p>
      </Box>
    </Box>
  );
}
