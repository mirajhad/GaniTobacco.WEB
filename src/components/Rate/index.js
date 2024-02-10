import React from "react";
import "./rate.css";
import { useForm } from "react-hook-form";
import { Rate as RateService } from "../../services/RateService";
const Rate = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const addProduct = async (data) => {
    try {
      let response = await RateService(data)
      if(response.statusCode===201){
        alert("Category added successfully")
      }else{
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
      debugger;
    }
    console.log(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit((values) => addProduct(values))}>
        <div className="main">
          <div className="item">
            <label for="item">Item name:</label>
            <input type="text" id="item" name="item"
            {...register("item", {
              required: true,
            })}
            />
          </div>
          <div className="category">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >
              Select an option
            </label>
            <select
               {...register("category", {
                required: true,
              })}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="price">
            <label for="price">Price:</label>
            <input
              className="form-control"
              type="text"
              id="price"
              name="price"
              {...register("price", {
                required: true,
              })}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </>
  );
};
export default Rate;
