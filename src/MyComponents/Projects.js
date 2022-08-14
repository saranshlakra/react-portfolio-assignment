import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { sectionHeadings } from "./common-components/com-component";
import {
  proContent,
  proTitle,
  proURl,
} from "./common-components/com-component";
// import {projectCard} from "./common-components/com-component";

// export default function Projects() {
//    let proData= [];
//   const [pro, setPro] = useState(null);
//   const project = () => {
//     //  var tag = ''
//     fetch("http://127.0.0.1:8000/api/projects")
//       .then(function (resp) {
//         return resp.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//              proData.push(projectCard(data[i]));
//         }

//         // console.log(expData)

//         setPro(proData);

//       });
//   };
//   if(pro == null){
//       project();
//     }

//   return (
//     <Box className="about-div" id="Projects">
//       {sectionHeadings("Projects")}
//       {pro}
//       {/* {experienceCard(expData[0])} */}
//     </Box>
//   );
// }

//-------------------------JSON Method----------------------------------

export default function Projects() {
  return (
    <Box className="about-div" id="Projects">
      {sectionHeadings("Projects")}
      <Box className="pro-grid">
        <Box className="about-tagline">
          <h4> {proTitle(0)}</h4>
          <a className="prolink" href={proURl(0)}>
            {" "}
            {proURl(0)}
          </a>
          <p>{proContent(0)}</p>
        </Box>
        <Box className="about-tagline">
          <h4> {proTitle(1)}</h4>
          <a className="prolink" href={proURl(1)}>
            {" "}
            {proURl(1)}
          </a>
          <p>{proContent(1)}</p>
        </Box>
        <Box className="about-tagline">
          <h4> {proTitle(2)}</h4>
          <a className="prolink" href={proURl(2)}>
            {" "}
            {proURl(2)}
          </a>
          <p>{proContent(2)}</p>
        </Box>
        <Box className="about-tagline">
          <h4> {proTitle(3)}</h4>
          <a className="prolink" href={proURl(3)}>
            {" "}
            {proURl(3)}
          </a>
          <p>{proContent(3)}</p>
        </Box>
      </Box>
    </Box>
  );
}
