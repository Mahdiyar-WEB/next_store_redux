"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { handleLogout, handleSignin, handleSignup } from "./userApi";
import { useRouter } from "next/router";
import axios from "axios";

const initialState = {
  user: null,
  loading: true,
  error: null,
};

export const signin = createAsyncThunk("content/signin", async (payload) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/user/signin",
      payload,
      {
        withCredentials: true, //must be set for receive http only cookies form backend
      }
    );
    toast.success("خوش آمدید");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
});

export const signup = createAsyncThunk("content/signup", async (payload) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/user/signup",
      payload,
      { withCredentials: true }
    );
    toast.success("حساب شما با موفقیت ایجاد شد");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
});

export const loadUser = createAsyncThunk("content/loadUser", async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/user/load",
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("content/logout", async () => {
  try {
    const { data } = await fetch("http://localhost:5000/api/user/logout", {
      method: "GET",
      credentials: "include",
    });
    toast.success("از حساب خود خارج شدید");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin_pending: () => {
      return { loading: true, error: null, user: null };
    },
    signin_success: (state, action) => {
      return { loading: false, error: null, user: action.payload };
    },
    signin_failure: (state, action) => {
      return { loading: false, error: action.payload, user: null };
    },
    signup_pending: () => {
      return { loading: true, error: null, user: null };
    },
    signup_success: (state, action) => {
      return { loading: false, error: null, user: action.payload };
    },
    signup_failure: (state, action) => {
      return { loading: false, error: action.payload, user: null };
    },
    signout_success: () => {
      return { loading: false, error: null, user: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
