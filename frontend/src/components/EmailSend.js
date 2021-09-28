import React from "react";

const SendEmail = ({ OnChange, OnSubmitEmail }) => {
  return (
    <div
      style={{
        textAlign: "center",
        border: "3px solid black",
        width: "50vw",
        margin: "auto",
        padding: "40px",
      }}
    >
      <div>Send an Email</div>
      <div
        style={{
          margin: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div>Email</div>
        <input name="email" type="text" onChange={OnChange} />
        <div>Title</div>
        <input name="title" type="text" onChange={OnChange} />
        <div>Content</div>
        <input
          name="content"
          type="text"
          onChange={OnChange}
          style={{ resize: "both", overflow: "hidden" }}
        />
        <span
          contentEditable
          name="content"
          role="textbox"
          onChange={OnChange}
          style={{ resize: "both", overflow: "hidden" }}
        ></span>
        <input
          name="submit"
          type="button"
          onClick={OnSubmitEmail}
          value="Email"
        />
      </div>
    </div>
  );
};

export default SendEmail;
