import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور کوتاه است"),
});
const Signin = () => {
  const onSubmit = (values) => {};

  const formik = useFormik({
    validateOnMount: true,
    initialValues,
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
        <label className="text-sm font-medium flex justify-between w-full">
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
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-sm font-medium flex justify-between w-full">
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
      <button
        className="bg-blue-500 rounded-lg px-10 py-2 w-fit text-white"
        type="submit"
      >
        ورود
      </button>
    </form>
  );
};

export default Signin;
