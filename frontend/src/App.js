import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectsArray from "./components/ProjectsArray";
import Comment from "./components/Comment";
import SendEmail from "./components/EmailSend";
import LeaveComment from "./components/LeaveComment";

import Icons from "./components/Icons";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });

  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });

  const [comments, setComments] = useState([]);

  const OnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const OnChangeComment = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
    console.log(messageData);
  };

  const OnSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const message = await axios.post(
        "https://taegyuyun.herokuapp.com/api/comment",
        messageData
      );
      await getPosts();
      //console.log(message);
    } catch (err) {
      console.error(err);
    }
  };

  const getPosts = async (e) => {
    try {
      const posts = await axios.get(
        "https://taegyuyun.herokuapp.com/api/getComments"
      );
      setComments(posts.data);
    } catch (err) {
      console.error(err);
    }
  };

  const OnSubmitEmail = async (e) => {
    e.preventDefault();
    var options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": "429e25e66fmsh61927d98fae25adp1e283fjsn91e660eadb7a",
      },
      data: {
        personalizations: [
          {
            to: [{ email: "tgyyun@gmail.com" }],
            subject: formData.title,
          },
        ],
        from: { email: formData.email },
        content: [{ type: "text/plain", value: formData.content }],
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("now");
    getPosts();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          height: "70vh",
          marginTop: "20vh",
          textAlign: "center",
          fontSize: "100px",
          color: "#C4C4C6",
        }}
      >
        Hello Visitor,
        <div
          style={{
            marginTop: "20px",
            fontSize: "20px",
            lineHeight: "20px",
            color: "black",
          }}
        >
          My Name is Tae-gyu, a passionate software and web engineer
        </div>
        <Icons />
      </div>
      <ProjectsArray />
      <SendEmail OnChange={OnChange} OnSubmitEmail={OnSubmitEmail} />
      <div style={{ display: "flex", padding: "20px" }}></div>
      <div
        style={{
          backgroundColor: "#e5e5e5",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "50px",
        }}
      >
        <LeaveComment
          OnChangeComment={OnChangeComment}
          OnSubmitComment={OnSubmitComment}
        />
        {comments.length > 0 && (
          <div
            style={{
              height: "400px",
              overflow: "auto",
            }}
          >
            {comments.sort().map((data, i) => {
              let today = new Date();
              let date =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate();
              return (
                <Comment
                  id={i}
                  name={data.name}
                  title={data.title}
                  content={data.content}
                  date={date}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
