import React from "react";

const Project = ({ img, name, description, github, link }) => {
  console.log(description);
  return (
    <div
      style={{
        padding: "10px",
        margin: "20px",
        marginBottom: "50px",
        display: "flex",
      }}
    >
      <img
        style={{
          minHeight: "16vw",
          maxHeight: "16vw",
          minWidth: "30vw",
          maxWidth: "30vw",
          boxShadow: "5px 5px 1px 1px #F2F2F7",
        }}
        src={img}
        alt=""
      />
      <div style={{ marginLeft: "20px" }}>
        {" "}
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div style={{ display: "flex", margin: "10px 0" }}>
          <div style={{ fontWeight: "bold" }}>Github: </div>
          <div style={{ lineBreak: "anywhere" }}>{github}</div>
        </div>
        {link && (
          <div style={{ display: "flex", margin: "10px 0" }} link={link}>
            <div style={{ fontWeight: "bold" }}>Link: </div>
            <div>{link}</div>
          </div>
        )}
        {description.map((descrip, i) => {
          return (
            <div
              style={{
                boxSizing: "border-box",
                padding: "10px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              {descrip}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
