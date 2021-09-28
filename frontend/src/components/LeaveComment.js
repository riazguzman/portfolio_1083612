import React from "react";

const LeaveComment = ({ OnChangeComment, OnSubmitComment }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ paddingBottom: "20px", boxSizing: "border-box" }}>
        Leave a Comment
      </div>
      <div
        style={{
          margin: "auto",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          {" "}
          <div>Name</div>
          <input
            style={{ width: "30%" }}
            name="name"
            type="text"
            onChange={OnChangeComment}
          />
        </div>
        <div style={{ marginRight: "10px" }}>
          <div>Message Title</div>
          <input
            style={{ width: "30%" }}
            name="title"
            type="text"
            onChange={OnChangeComment}
          />
        </div>
        <div style={{ marginRight: "10px", boxSizing: "border-box" }}>
          <div>Message</div>
          <textarea
            style={{ width: "100%", height: "100%" }}
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
