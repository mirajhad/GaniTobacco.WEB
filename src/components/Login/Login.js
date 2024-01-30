import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { login } from "../../services/AuthService";
// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 8 characters"),
});
const Login = () => {
  const navigate  = useNavigate()

  async function loginUser({ email, password }) {
    try {
      const response = await login(email, password);
      if (response.success) {
        
        const {data}=response;
        localStorage.setItem("accessToken",data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        console.log("User logged in successfully");
        navigate('/dashboard');
      } else {
        console.error("Login failed:", response.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  // const user = useSelector(state=>state.users);
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
                  placeholder="Enter email id / username"
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
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
