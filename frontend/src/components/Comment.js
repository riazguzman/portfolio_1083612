import React from "react";

const Comment = ({ name, id, title, content, date }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        backgroundColor: "white",
        margin: "10px",
        padding: "0 10px",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginRight: "0px",
          minWidth: "50px",
          minHeight: "50px",
          textAlign: "center",
          backgroundColor: "#AD9281",
          lineHeight: "50px",
          borderRadius: "50%",
        }}
      >
        {name[0]}
      </div>
      <div
        style={{
          margin: "0 10px",
          padding: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "12px",
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: "12px" }}>{title}</div>
        <div style={{ fontSize: "12px" }}>{content}</div>
        <div style={{ fontSize: "12px" }}>{date}</div>
      </div>
    </div>
  );
};

export default Comment;
