import React from "react";
import { getOrders } from "../../services/OrderService";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrders().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
     
      
    </>
  );
};

export default Dashboard;
