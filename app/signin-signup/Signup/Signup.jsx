import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/redux/features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  confirmPassword: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام کاربری را وارد کنید")
    .min(3, "نام کاربری کوتاه است"),
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور کوتاه است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور همخوانی ندارد")
    .required("تایید رمز عبور را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل نادرست است")
    .nullable(),
});

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, user } = useSelector((state) => state.user);

  const onSubmit = (values) => {
    const { confirmPassword, ...newValues } = values;
    dispatch(signup(newValues));
  };

  useEffect(() => {
    user && router.push("/");
  }, [user]);
  
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit,
  });

  return (
    <form
      dir="rtl"
      className="w-full gap-4 px-5 sm:px-10 flex flex-col justify-center h-full pb-8 pt-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2 ">
        <label className="text-sm flex justify-between w-full font-medium">
          نام کاربری
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500">{formik.errors.name}</span>
          )}
        </label>
        <input
          name="name"
          {...formik.getFieldProps("name")}
          className={`border  rounded-md py-2 px-3  w-full ${
            formik.touched.name && formik.errors.name
              ? "border-red-500 outline-red-500"
              : "border-gray-300 outline-blue-400"
          }`}
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-sm flex justify-between w-full font-medium">
          شماره موبایل
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <span className="text-red-500">{formik.errors.phoneNumber}</span>
          )}
        </label>
        <input
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          className={`border  rounded-md py-2 px-3  w-full ${
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "border-red-500 outline-red-500"
              : "border-gray-300 outline-blue-400"
          }`}
          type="tel"
          placeholder="*******0915"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-sm flex justify-between w-full font-medium">
          ایمیل
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </label>
        <input
          name="email"
          {...formik.getFieldProps("email")}
          className={`border  rounded-md py-2 px-3  w-full ${
            formik.touched.email && formik.errors.email
              ? "border-red-500 outline-red-500"
              : "border-gray-300 outline-blue-400"
          }`}
          type="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-sm flex justify-between w-full font-medium">
          رمز عبور
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500">{formik.errors.password}</span>
          )}
        </label>
        <input
          name="password"
          {...formik.getFieldProps("password")}
          className={`border  rounded-md py-2 px-3  w-full ${
            formik.touched.password && formik.errors.password
              ? "border-red-500 outline-red-500"
              : "border-gray-300 outline-blue-400"
          }`}
          type="password"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-sm flex justify-between w-full font-medium">
          تایید رمز عبور
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span className="text-red-500">
              {formik.errors.confirmPassword}
            </span>
          )}
        </label>
        <input
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
          className={`border  rounded-md py-2 px-3  w-full ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "border-red-500 outline-red-500"
              : "border-gray-300 outline-blue-400"
          }`}
          type="password"
        />
      </div>
      <button
        className={` rounded-lg px-10 py-2 w-fit text-white flex justify-center ${
          loading ? "bg-blue-300" : "bg-blue-500"
        }`}
        type="submit"
        disabled={loading}
      >
        {loading && (
          <svg
            aria-hidden="true"
            className="inline w-6 h-6 text-white animate-spin fill-blue-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}
        {!loading && <span>ثبت نام</span>}
      </button>
    </form>
  );
};

export default Signup;
