"use client";
import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: false,
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
    default: {
      return state;
    }
  }
};

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
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
          dispatch({
            type: "SIGNIN-FAILURE",
            error: err.response?.data?.message,
          });
        });
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
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
