import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Register.css";
// import { useDispatch } from "react-redux";
// import { register } from "../../store/authSlice";
import { RegisterUser } from "../../services/RegisterService";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("username is a required field")
    .min(5, "Invalid username format"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Register = () => {
  const [successBtn, setSuccessBtn] = useState(false);
  async function Signup({ username, email, password }) {
    try {
      // dispatch(register(values));
      const response = await RegisterUser(username, email, password);
      if (response.success) {
        setSuccessBtn(true)
        setTimeout(() => {
          setSuccessBtn(false);
        }, 5000);
      }
    } catch (error) {}
  }

  // const dispatch = useDispatch();

  return (
    <>
      {successBtn ? (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Successfully Regsiter!</span> Now you can
          login
        </div>
      ) : null}

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
                <span>Register</span>
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
                  placeholder="Enter email id / username"
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
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Register;
