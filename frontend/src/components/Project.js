import React from "react";

const Project = ({ img, name, description }) => {
  console.log(img);
  return (
    <div
      style={{
        padding: "10px",
        margin: "20px",
        display: "flex",
      }}
    >
      <img
        style={{
          maxHeight: "500px",
          maxWidth: "500px",
          boxShadow: "5px 5px 1px 1px #F2F2F7",
        }}
        src={img}
        alt=""
      />
      <div style={{ marginLeft: "20px" }}>
        {" "}
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Project;
