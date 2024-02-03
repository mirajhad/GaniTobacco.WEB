import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Register.css";
import Spinner from "../Spinner/Spinner";
import { RegisterUser } from "../../services/RegisterService";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("username is a required field")
    .min(3, "Invalid username format"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
});

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successBtn, setSuccessBtn] = useState(false);
  const [failBtn, setFailBtn] = useState(false);
  async function Signup({ username, email, password }) {
    try {
      setLoading(true);
      const response = await RegisterUser(username, email, password);
      if (response.success) {
        setSuccessBtn(true);
        setTimeout(() => {
          setSuccessBtn(false);
          navigate("/login");
        }, 5000);
      }
    } catch (error) {
      setTimeout(() => {
        setFailBtn(true);
      }, 5000);
    } finally {
      setLoading(false);
      setFailBtn(false);
    }
  }

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => Signup(values)}
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
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Sign Up</span>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  className="form-control inp_text"
                  id="username"
                />
                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>

                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                {failBtn ? (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Registration Failed!</strong>
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
                {successBtn ? (
                  <div
                    className="bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Registration Success!</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-green-500"
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
                  {loading ? <Spinner /> : "Sign Up"}
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Register;
