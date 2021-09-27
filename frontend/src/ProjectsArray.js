import React from "react";
import Project from "./Project";
import creditCardImage from "./images/creditcard1.png";
import unimelbSubjectsPlannerImage from "./images/unimelb_subjects_project.png";
import SnacksInAVanImage from "./images/SnacksInAVan.PNG";

const ProjectsArray = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "90vw",
        overflow: "auto",
      }}
    >
      <Project img={creditCardImage} name="수달" description="cute" />
      <Project
        img={unimelbSubjectsPlannerImage}
        name="수달"
        description="cute"
      />
      <Project img={SnacksInAVanImage} name="수달" description="cute" />
      <Project
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fischotter_Lutra_lutra1.jpg/300px-Fischotter_Lutra_lutra1.jpg"
        name="수달"
        description="cute"
      />
    </div>
  );
};

export default ProjectsArray;
