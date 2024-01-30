import { AppSettings } from "../constants";
export const RegisterUser = async (username, email, password) => {
  try {
    const apiUrl = AppSettings.Urls.Auth.RegisterUser;
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    const requestBody = {
      username,
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
      redirect: "follow",
    };

    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();

    // You can handle the result as needed
    console.log(result);

    return result;
  } catch (error) {
    console.error("Regsiter failed:", error);
    throw error;
  }
};

export default RegisterUser;
