import { AppSettings } from "../constants";

const Rate = async ({ item, category, price}) => {
  try {
    const apiUrl = AppSettings.Urls.Rate.addRate;
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    const requestBody = {
      item,
      category,
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
    console.error("Rate Adding failed:", error);
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

export { Rate, getOrders };
