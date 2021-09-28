import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectsArray from "./components/ProjectsArray";
import Comment from "./components/Comment";

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

  useEffect(() => {
    console.log("comments", comments);
  }, [comments]);

  return (
    <div className="App">
      <ProjectsArray />
      <div style={{ display: "flex", padding: "20px" }}>
        <div
          style={{ margin: "auto", border: "1px solid black", padding: "20px" }}
        >
          <div>Leave a Comment</div>
          <div>Name</div>
          <input name="name" type="text" onChange={OnChangeComment} />
          <div>Email</div>
          <input name="email" type="text" onChange={OnChangeComment} />
          <div>Title</div>
          <input name="title" type="text" onChange={OnChangeComment} />
          <div>Message</div>
          <input name="content" type="text" onChange={OnChangeComment} />
          <input
            name="submit"
            type="button"
            onClick={OnSubmitComment}
            value="Message"
          />
        </div>
        <div
          style={{ margin: "auto", border: "1px solid black", padding: "20px" }}
        >
          <div>Send an Email</div>
          <div>Email</div>
          <input name="email" type="text" onChange={OnChange} />
          <div>Title</div>
          <input name="title" type="text" onChange={OnChange} />
          <div>Content</div>
          <input name="content" type="text" onChange={OnChange} />
          <input
            name="submit"
            type="button"
            onClick={OnSubmitEmail}
            value="Message"
          />
        </div>
      </div>
      {comments.length > 0 && (
        <div
          style={{
            height: "400px",
            overflow: "auto",
            backgroundColor: "#e5e5e5",
          }}
        >
          {comments.map((data, i) => {
            console.log(data);
            let today = new Date();
            let date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();
            return (
              <Comment
                name={data.name}
                email={data.email}
                title={data.title}
                content={data.content}
                date={date}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
