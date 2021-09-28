import React from "react";
import Project from "./Project";
import creditCardImage from "../images/creditcard1.png";
import unimelbSubjectsPlannerImage from "../images/unimelb_subjects_project.png";
import SnacksInAVanImage from "../images/SnacksInAVan.PNG";

const ProjectsArray = () => {
  return (
    <div style={{}}>
      <Project
        img={creditCardImage}
        name="creditCardImage"
        description="creditCardImage"
      />
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
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fischotter_Lutra_lutra1.jpg/300px-Fischotter_Lutra_lutra1.jpg"
        name="수달"
        description="Unimelb Subjects Planner"
      />
    </div>
  );
};

export default ProjectsArray;
