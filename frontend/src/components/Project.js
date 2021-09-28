import React from "react";

const Project = ({ img, name, description }) => {
  console.log(img);
  return (
    <div style={{ padding: "10px", border: "1px solid black", margin: "10px" }}>
      <img style={{ maxHeight: "600px", maxWidth: "600px" }} src={img} alt="" />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Project;
