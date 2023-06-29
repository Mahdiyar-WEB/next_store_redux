"use client"
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import commentSlice from "./features/comment/commentSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    comment: commentSlice
  },
});
export default store;
