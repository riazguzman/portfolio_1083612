import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectsArray from "./ProjectsArray";

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
        "http://localhost:8000/api/comment",
        messageData
      );
      //console.log(message);
    } catch (err) {
      console.error(err);
    }
    await getPosts();
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

  useEffect(() => {
    console.log("comments", comments);
  }, [comments]);

  return (
    <div className="App">
      <ProjectsArray />
      <div>Leave a Comment</div>
      <input name="name" type="text" onChange={OnChangeComment} />
      <input name="email" type="text" onChange={OnChangeComment} />
      <input name="title" type="text" onChange={OnChangeComment} />
      <input name="content" type="text" onChange={OnChangeComment} />
      <input
        name="submit"
        type="button"
        onClick={OnSubmitComment}
        value="Message"
      />
      <div>Send an Email</div>
      <input name="name" type="text" onChange={OnChange} />
      <input name="email" type="text" onChange={OnChange} />
      <input name="title" type="text" onChange={OnChange} />
      <input name="content" type="text" onChange={OnChange} />
      <input
        name="submit"
        type="button"
        onClick={OnSubmitEmail}
        value="Message"
      />
      {comments.length > 0 && (
        <div
          style={{ backgroundColor: "red", height: "200px", overflow: "auto" }}
        >
          {comments.map((data, i) => {
            console.log(data);
            return (
              <div
                style={{
                  border: "1px solid black",
                }}
              >
                <div style={{ backgroundColor: "red" }}>{data.name}</div>
                <div style={{ backgroundColor: "red" }}>{data.email}</div>
                <div style={{ backgroundColor: "red" }}>{data.title}</div>
                <div style={{ backgroundColor: "red" }}>{data.content}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
