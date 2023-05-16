"use client";

import Comment from "@/components/Comment/Comment";
import ReplyComment from "@/components/ReplyComment/ReplyComment";
import React, { useState } from "react";

const BlogComments = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="className='container max-w-screen-lg mx-auto mb-10 px-3 md:px-0'">
      <h2 className="text-3xl text-end font-semibold mb-10">نظرات</h2>
      {/* comments */}
      <div className="mb-10">
        {comments.map((comment, index) => {
          return (
            !comment.responseTo &&
            comment.status === 2 && (
              <React.Fragment key={index}>
                <Comment details={comment} />
                <ReplyComment comments={comments} parentID={comment._id} />
              </React.Fragment>
            )
          );
        })}
        {comments.length === 0 && <h3 className="text-center text-lg font-semibold px-6 py-2 rounded-xl  w-fit border-2 mx-auto">هیچ نظری ثبت نشده است</h3>}
      </div>
      {/* comment form  */}
      <form onSubmit={onSubmit} dir="rtl" className="flex flex-col justify-end">
        <h3 className="mb-2">ارسال دیدگاه جدید</h3>
        <textarea
          placeholder="نظرت رو برام بنویس ..."
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          className="mb-6 border-2 border-gray-300 focus:border-purple-500 rounded-lg p-3 outline-purple-600"
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white w-fit px-10 py-3 rounded-lg"
        >
          ارسال نظر
        </button>
      </form>
    </section>
  );
};

export default BlogComments;
