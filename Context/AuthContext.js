"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN-PENDING": {
      return {
        user: null,
        loading: true,
        error: null,
      };
    }
    case "SIGNIN-SUCCESS": {
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    }
    case "SIGNIN-FAILURE": {
      return {
        user: null,
        loading: false,
        error: action.error,
      };
    }
    case "SIGNUP-PENDING": {
      return {
        user: null,
        loading: true,
        error: null,
      };
    }
    case "SIGNUP-SUCCESS": {
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    }
    case "SIGNUP-FAILURE": {
      return {
        user: null,
        loading: false,
        error: action.error,
      };
    }
    case "SIGNOUT-SUCCESS": {
      return {
        user: null,
        loading: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const asyncActionHandlers = {
    SIGNIN:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "SIGNIN-PENDING" });
        await axios
          .post("http://localhost:5000/api/user/signin", action.payload, {
            withCredentials: true, //must be set for receive http only cookies form backend
          })
          .then((res) => {
            toast.success("خوش آمدید");
            dispatch({ type: "SIGNIN-SUCCESS", payload: res.data });
            router.push("/");
          })
          .catch((err) => {
            err.response?.data?.message &&
              toast.error(err.response?.data?.message);
            dispatch({
              type: "SIGNIN-FAILURE",
              error: err.response?.data?.message,
            });
          });
      },
    SIGNUP:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "SIGNUP-PENDING" });
        await axios
          .post("http://localhost:5000/api/user/signup", action.payload, {
            withCredentials: true, //must be set for receive http only cookies form backend
          })
          .then((res) => {
            toast.success("ثبت نام با موفقیت انجام شد");
            dispatch({ type: "SIGNUP-SUCCESS", payload: res.data });
            router.push("/");
          })
          .catch((err) => {
            err.response?.data?.message &&
              toast.error(err.response?.data?.message);
            dispatch({
              type: "SIGNUP-FAILURE",
              error: err.response?.data?.message,
            });
          });
      },
      LOAD:
      ({ dispatch }) =>
      async () => {
        dispatch({ type: "SIGNUP-PENDING" });
        await axios
          .get("http://localhost:5000/api/user/load", {
            withCredentials: true, //must be set for receive http only cookies form backend
          })
          .then((res) => {
            dispatch({ type: "SIGNUP-SUCCESS", payload: res.data });
          })
          .catch((err) => {
            dispatch({
              type: "SIGNUP-FAILURE",
              error: err.response?.data?.message,
            });
          });
      },
      SIGNOUT:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "SIGNUP-PENDING" });
        await axios
          .get("http://localhost:5000/api/user/logout", {
            withCredentials: true, //must be set for receive http only cookies form backend
          })
          .then(() => {
            toast.success("از حساب خود خارج شدید")
            dispatch({ type: "SIGNOUT-SUCCESS" });
          })
          .catch((err) => {
            dispatch({
              type: "SIGNUP-FAILURE",
              error: err.response?.data?.message,
            });
          });
      }
  };
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(()=>{
    dispatch({type:"LOAD"})
  },[])
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
