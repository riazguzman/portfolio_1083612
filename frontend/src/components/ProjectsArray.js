import React from "react";
import Project from "./Project";
import creditCardImage from "../images/creditcard1.png";
import unimelbSubjectsPlannerImage from "../images/unimelb_subjects_project.png";
import SnacksInAVanImage from "../images/SnacksInAVan.PNG";
import pegGIF from "../images/pegsolitaire.gif";

const ProjectsArray = () => {
  const UnimelbSubjectsPlanner = [
    "> Built a web scrapper to scrape all subjects listed on the University website and stored this data into a postgreSQL database.",
    "> Includes functionality to search and select subjects, and check if those combinations of subjects adhere to the university guidelines.",
  ];
  const SnacksInAVan = [
    "> MERN stack website that supports a sales system between food vans and customers, where a customer can search for a nearby food van, and order food online.",
    "> Frontend built using React, server and REST API built using Express.js and Node.js, and MongoDB and Mongoose used to manage the database.",
  ];
  const CreditCardForm = [
    "> Credit Card Form and Validator built using React.",
    "> Custom Regex Validation Forms",
  ];
  const peg = [
    "> When the AI solver is called,  it should explore all possible paths (sequence of jumpactions) following a Depth First Search (DFS) strategy.",
    "> Program continues to search for the solution until consuming the budget or until a pathsolving the game is found.",
    "> Algorith implemented using C.",
  ];
  return (
    <div>
      <Project
        img={unimelbSubjectsPlannerImage}
        name="unimelb Subjects Planner"
        github="https://github.com/riazguzman/unimelb_subjects_project"
        description={UnimelbSubjectsPlanner}
      />
      <Project
        img={SnacksInAVanImage}
        name="Snacks In A Van"
        github="https://github.com/INFO30005-2021-SM1/project-t08-fletcher"
        link="https://snacksinavan-kelvin.herokuapp.com/"
        description={SnacksInAVan}
      />
      <Project
        img={pegGIF}
        name="Peg Solitaire AI solver"
        github="https://github.com/riazguzman/peg_solitaire"
        description={peg}
      />
      <Project
        img={creditCardImage}
        name="Credit Card Form"
        github="https://github.com/riazguzman/CardForm"
        description={CreditCardForm}
      />
    </div>
  );
};

export default ProjectsArray;
