import React from "react";
import Button from "../components/Button";

const SendEmail = ({ OnChange, OnSubmitEmail }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "50vw",
        margin: "auto",
        padding: "40px",
      }}
    >
      <div style={{ fontWeight: "bold" }}>Send an Email</div>
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
        <input
          style={{ marginBottom: "20px" }}
          name="email"
          type="text"
          onChange={OnChange}
        />
        <div>Title</div>
        <input
          style={{ marginBottom: "20px" }}
          name="title"
          type="text"
          onChange={OnChange}
        />
        <div>Content</div>
        <textarea
          name="content"
          type="text"
          onChange={OnChange}
          style={{ width: "100%", height: "100%", marginBottom: "20px" }}
        />
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
