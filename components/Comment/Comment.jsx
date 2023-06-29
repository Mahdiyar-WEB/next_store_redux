"use client";
import { addComment } from "@/redux/features/comment/commentSlice";
import toLocalDate from "@/utils/toLocalDate";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Comment = ({ details: { writer, createdAt, content, _id }, postID }) => {
  const [response, setResponse] = useState({ isResponse: false, text: "" });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({ content: response.text, postId: postID, responseTo: _id })
    );
  };

  return (
    <div
      dir="rtl"
      className="p-4 shadow-sm border border-gray-400 rounded-lg flex flex-col gap-4 mb-4"
    >
      <div className="flex items-center gap-3">
        <div className="bg-gray-400 p-2 text-white rounded-full">
          <BsFillPersonFill size={24} />
        </div>
        <div className="flex flex-col  gap-1 text-gray-500">
          <span className="text-sm">{writer.name}</span>
          <span className="text-xs">{toLocalDate(createdAt)}</span>
        </div>
      </div>
      <p>{content}</p>
      <button
        className="w-fit mb-3 text-blue-500"
        onClick={() =>
          setResponse({ isResponse: !response.isResponse, text: "" })
        }
      >
        {response.isResponse ? "بیخیال" : "پاسخ"}
      </button>
      {response.isResponse && (
        <form
          onSubmit={onSubmit}
          dir="rtl"
          className="flex flex-col justify-end"
        >
          <h3 className="text-sm text-gray-500 mb-3">
            در حال پاسخ به {writer.name}
          </h3>
          <textarea
            placeholder="پاسخ را بنویسید ..."
            onChange={(e) => setResponse({ ...response, text: e.target.value })}
            value={response.text}
            className="mb-4 border-2 border-gray-300 focus:border-purple-500 rounded-lg p-3 outline-purple-600"
            cols="30"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-sm text-white w-fit px-4 py-2 rounded-lg"
          >
            ارسال پاسخ
          </button>
        </form>
      )}
    </div>
  );
};

export default Comment;
