import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";

import "./Login.css";
import { login } from "../../services/AuthService";
import { login as authLogin } from "../../store/authSlice";
import Spinner from "../Spinner/Spinner";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email or Username is a required field")
    .min(3, "Enter altest 3 characters"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
});
const Login = () => {
  const navigate = useNavigate();
  const [failBtn, setFailBtn] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  async function loginUser({ email, password }) {
    try {
      setLoading(true);
      const response = await login(email, password);
      if (response.success) {
        dispatch(authLogin(response.data));
        localStorage.setItem("user", response.data.user.username);
        console.log("User logged in successfully");
        navigate("/dashboard");
      } else {
        // Handle unsuccessful login
      }
    } catch (error) {
      setTimeout(() => {
        setFailBtn(true);
      }, 5000);
      console.log(error);
    } finally {
      setLoading(false);
      setFailBtn(false);
    }
  }

  const googleLogin = () => {
    console.log("hii");
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => loginUser(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {failBtn ? (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Try after 5 minutes</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                ) : null}
                <button type="submit" disabled={loading}>
                  {loading ? <Spinner /> : "Login"}
                </button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                ;
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
