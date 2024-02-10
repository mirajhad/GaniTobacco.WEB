//Prod
const ApiEndpoint = "https://netflix-backend-seven.vercel.app/api/v1/";
// https://netflix-backend-seven.vercel.app/api/v1/rate/getAllRates

// Dev
// const ApiEndpoint = "http://localhost:8000/api/v1/";

export const AppSettings = {
  Urls: {
    Auth: {
      loginUrl: ApiEndpoint + "users/login",
      forgotPassword: ApiEndpoint + "forgotpassword",
      RegisterUser: ApiEndpoint + "users/register",
    },
    Product: {
      addProduct: ApiEndpoint + "products/addProduct",
      getProduct: ApiEndpoint + "products/getProducts",
      updateProduct: ApiEndpoint + "product/",
      deleteProduct: ApiEndpoint + "product/",
    },
    Rate:{
      getAllRates:ApiEndpoint +"rate/getAllRates",
      addRate:ApiEndpoint+"rate/addRate"
    }
  },
};
