import { AppSettings } from "../constants";

const Order = async ({ name, email, address, phone, quantity, price }) => {
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

const getOrders = async () => {
  const apiUrl = AppSettings.Urls.Product.getProduct;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error; // You can choose to handle the error here or let it propagate to the caller
  }
};

export { Order, getOrders };
