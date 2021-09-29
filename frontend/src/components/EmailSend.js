import React, { useState } from "react";

const SendEmail = ({ formData, OnChange, OnSubmitEmail, emailSubmit }) => {
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
          value={formData.email}
          style={{ marginBottom: "20px" }}
          name="email"
          type="text"
          onChange={OnChange}
        />
        <div>Title</div>
        <input
          value={formData.title}
          style={{ marginBottom: "20px" }}
          name="title"
          type="text"
          onChange={OnChange}
        />
        <div>Content</div>
        <textarea
          value={formData.content}
          name="content"
          type="text"
          onChange={OnChange}
          style={{ width: "100%", height: "100%", marginBottom: "20px" }}
        />
        <input
          style={{ width: "100px", height: "50px" }}
          name="submit"
          type="button"
          onClick={OnSubmitEmail}
          value="Email"
        />
      </div>
      <div style={{ color: emailSubmit ? "black" : "white" }}>Email Sent!</div>
    </div>
  );
};

export default SendEmail;
