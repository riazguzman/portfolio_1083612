import React from "react";

const LeaveComment = ({ OnChangeComment, OnSubmitComment }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ paddingBottom: "20px" }}>Leave a Comment</div>
      <div
        style={{
          margin: "auto",
          display: "flex",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          {" "}
          <div>Name</div>
          <input
            style={{ width: "70%" }}
            name="name"
            type="text"
            onChange={OnChangeComment}
          />
        </div>
        <div style={{ marginRight: "10px" }}>
          <div>Message Title</div>
          <input
            style={{ width: "70%" }}
            name="title"
            type="text"
            onChange={OnChangeComment}
          />
        </div>
        <div style={{ marginRight: "10px" }}>
          <div>Message</div>
          <input
            style={{ width: "70%" }}
            name="content"
            type="text"
            onChange={OnChangeComment}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {" "}
        <input
          name="submit"
          type="button"
          onClick={OnSubmitComment}
          value="Submit"
        />
      </div>
    </div>
  );
};

export default LeaveComment;
