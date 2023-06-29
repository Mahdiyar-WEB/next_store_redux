import axios from "axios";
import { toast } from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  comment: null,
  error: null,
};

export const addComment = createAsyncThunk("content/comment", async (payload) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/post-comment/save-comment",
      payload,
      { withCredentials: true }
    );
    toast.success("نظر شما با موفقیت ثبت شد");
    return data;
  } catch (error) {
    throw error;
  }
});

const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: ({addCase})=>{
    addCase(addComment.pending, (state)=>{
        state.loading = true;
        state.comment = null;
        state.error = null
    });
    addCase(addComment.fulfilled, (state,action)=>{
        state.loading = false;
        state.comment = action.payload;
        state.error = null
    })
    addCase(addComment.rejected, (state,action)=>{
        state.loading = false;
        state.comment = null;
        state.error = action.error.message
    })
  }
});

export default commentSlice.reducer;
