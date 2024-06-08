import React from "react";
import { Login as LoginComponent } from "../../components";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="924614841454-3onhpmuo14la14i4mror701dvoiq1ov9.apps.googleusercontent.com">
      <LoginComponent />
    </GoogleOAuthProvider>
  );
};

export default Login;
