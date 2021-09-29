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

  const [emailSubmit, setEmailSubmit] = useState(false);

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
      console.log(posts.data);
      setComments(posts.data.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  const OnSubmitEmail = async (e) => {
    e.preventDefault();
    console.log("herehere");
    let options = {
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
      console.log("heree");
      await Promise.all(axios.request(options), setEmailSubmit(true));
      console.log(formData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (emailSubmit) {
      console.log("lol");
      setTimeout(() => {
        setEmailSubmit(false);
      }, 3000);
    }
  }, [emailSubmit]);

  useEffect(() => {
    console.log("now");
    getPosts();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
      <SendEmail
        formData={formData}
        OnChange={OnChange}
        OnSubmitEmail={OnSubmitEmail}
        emailSubmit={emailSubmit}
      />
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
            {comments.map((data, i) => {
              return (
                <Comment
                  id={i}
                  name={data.name}
                  title={data.title}
                  content={data.content}
                  date={
                    data.createdAt.slice(0, 10) +
                    " " +
                    data.createdAt.slice(11, 16)
                  }
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
