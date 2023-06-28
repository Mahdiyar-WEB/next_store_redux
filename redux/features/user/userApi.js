import Redirect from "@/utils/redirect";
import axios from "axios";
import { toast } from "react-hot-toast";

const userApi = {
  handleSignin: async (payload) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signin",
        payload,
        {
          withCredentials: true, //must be set for receive http only cookies form backend
        }
      );

      toast.success("خوش آمدید");
      return response;
    } catch (error) {
      error.response?.data?.message &&
        toast.error(error.response?.data?.message);
    }
  },
  handleSignup: async (payload) => {
    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
    });
    if (response.ok) {
      toast.success("ثبت نام با موفقیت انجام شد");
      Redirect("/");
    } else {
      const err = await response.json();
      toast.error(err.response?.data?.message);
    }
    return response;
  },
  handleLogout: async () => {
    const response = await fetch("http://localhost:5000/api/user/logout", {
      method: "GET",
      credentials: "include",
    });
    return response;
  },
};

export const { handleLogout, handleSignin, handleSignup } = userApi;
