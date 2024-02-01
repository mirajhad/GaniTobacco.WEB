import { AppSettings } from "../constants";

export const Order = async ({
  name,
  email,
  address,
  phone,
  quantity,
  price,
}) => {
  try {
    const apiUrl = AppSettings.Urls.Product.addProduct;
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    const requestBody = {
      name,
      email,
      address,
      phone,
      quantity,
      price,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
      redirect: "follow",
    };

    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Order failed:", error);
    throw error;
  }
};
