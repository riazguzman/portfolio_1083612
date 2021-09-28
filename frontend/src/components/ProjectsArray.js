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
        description="Unimelb Subjects Planner"
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
