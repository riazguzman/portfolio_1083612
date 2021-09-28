import React from "react";
import Project from "./Project";
import creditCardImage from "../images/creditcard1.png";
import unimelbSubjectsPlannerImage from "../images/unimelb_subjects_project.png";
import SnacksInAVanImage from "../images/SnacksInAVan.PNG";

const ProjectsArray = () => {
  return (
    <div style={{}}>
      <Project
        img={unimelbSubjectsPlannerImage}
        name="unimelbSubjectsPlannerImage"
        description="PERN stack website for University of Melbourne students to plan their course and subjects based on 
        university guidelines.
        Built a web scrapper to scrape all subjects listed on the University website and stored this data into a 
        postgreSQL database.
        Includes functionality to search and select subjects, and check if those combinations of subjects adhere 
        to the university guidelines.
        Frontend built using React, server built using Express.js and Node.js."
      />
      <Project
        img={SnacksInAVanImage}
        name="SnacksInAVanImage"
        description="SnacksInAVanImage"
      />
      <Project
        img={creditCardImage}
        name="creditCardImage"
        description="creditCardImage"
      />
    </div>
  );
};

export default ProjectsArray;
