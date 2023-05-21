import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const onSubmit = (values) => {
    const { confirmPassword, ...newValues } = values;
    console.log("🚀 ~ file: Signup.jsx:31 ~ onSubmit ~ newValues:", newValues);
    axios
      .post("http://localhost:5000/api/user/signup", newValues, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("ثبت نام با موفقیت انجام شد");
        router.push("/");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

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
        className="bg-blue-500 rounded-lg px-10 py-2 w-fit text-white"
        type="submit"
      >
        ثبت نام
      </button>
    </form>
  );
};

export default Signup;
