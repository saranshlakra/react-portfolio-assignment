import { Box, Typography } from "@material-ui/core";
import portfolioData from "./portfolioData.json";
import about from "./aboutData.json";
import contactMe from "./contactMe.json";
import projectData from "./projectData.json";

export const Styler = ({ about, isIcon, icon }) => {
  return (
    <Box className="common-styler">
      <Typography variant="span" className="name-me">
        {about}
      </Typography>
      {isIcon ? (
        <Typography variant="span" className="about-arrow">
          {icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export const sectionHeadings = (sectionName) => {
    return (
        <Box className="headings">
                <h3>{sectionName}</h3>
        </Box>
    );
};

// for Json file method

export const companyName = (id) => {
  return (
        portfolioData[id].company_name
  )
}
export const position = (id) => {
  return (
        portfolioData[id].position
  )
}
export const job_role = (id) => {
  return (
        portfolioData[id].job_role
  )
}

// For about data
export const tagline = (id) => {
  return (
        about[id].tagline
  )
}
export const description = (id) => {
  return (
        about[id].description
  )
}

// For contacts
export const conTitle = (id) => {
  return (
        contactMe[id].title
  )
}
export const conLink = (id) => {
  return (
        contactMe[id].link
  )
}



// projects
export const proTitle = (id) => {
  return (
        projectData[id].title
  )
}


export const proURl = (id) => {
  return (
        projectData[id].url
  )
}

export const proContent = (id) => {
  return (
        projectData[id].content
  )
}


// For API Fetch method code written below. I tried both the method. Both are working correctly

// export const experienceCard = (exp) => {
//   console.log(exp);
//   return (
//     <Box className="about-tagline experience-div">
//     <h4>{exp?.company_name}</h4>
//     <h5>{exp?.position}</h5>

//     {/* in line format */}
//     <ul>{exp?.job_role}</ul> 

//   </Box>
//   )
// }
// export const projectCard = (pro) => {
//   console.log(pro);
//   return (
//     <Box className="about-tagline project-div">
//     <h4>{pro?.title}</h4>
//     <h5>{pro?.url}</h5>
//     <p>{pro?.content}</p>
//   </Box>
//   )
// }


// common comp