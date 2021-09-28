import React from "react";
import GitHubIcon from "../images/github.png";
import EmailIcon from "../images/email.png";
// Emotion.js
import styled from "@emotion/styled";

const Icon = styled.div`
  height: 100px;
  width: 200px;
  background-color: #f2f2f7;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #e7f2ff;
    cursor: pointer;
  }
  & > img {
    max-height: 50px;
    margin: auto;
  }
`;

const Icons = () => {
  const scrollToBottom = () => [window.scrollTo(3000, 3000)];

  return (
    <div style={{ display: "flex", padding: "20px 30vw" }}>
      {" "}
      <a href="https://github.com/riazguzman">
        {" "}
        <Icon>
          <img
            src={GitHubIcon}
            style={{
              maxHeight: "50px",
            }}
          ></img>
        </Icon>
      </a>
      <Icon onClick={scrollToBottom}>
        <img
          src={EmailIcon}
          style={{
            maxHeight: "50px",
            maxWidth: "50px",
          }}
        ></img>
      </Icon>
    </div>
  );
};

export default Icons;
