import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Order as AddOrder } from "../../services/OrderService";
import "./Order.css";
const Order = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const addProduct = async (data) => {
    const values = {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
      price: data.quantity,
    };
    let response = await AddOrder(values);
    console.log(response);
    setError("");
    console.log(data);
    // const data = await Order()
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Order Now
          </h2>
          <form onSubmit={handleSubmit((values) => addProduct(values))}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  label="Name: "
                  placeholder="Enter your name"
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  label="Email: "
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  label="Address: "
                  placeholder="Enter your address"
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  label="Phone: "
                  placeholder="Enter your number"
                  type="number"
                  {...register("phone", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  label="Quantity: "
                  placeholder="Enter quantity in grams"
                  type="number"
                  {...register("quantity", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg ring-4  ring-primary-200 text-gray-900 dark:text-white"
            >
              Order Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Order;
