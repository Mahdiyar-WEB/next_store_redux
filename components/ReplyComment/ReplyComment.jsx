"use client";
import React from "react";
import Comment from "../Comment/Comment";

const ReplyComment = ({ parentID, comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          parentID === comment.responseTo && (
            <div className="me-5"  key={index}>
              <Comment details={comment} />
              <ReplyComment comments={comments} parentID={comment._id} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default ReplyComment;
