import React from "react";
import { getOrders } from "../../services/OrderService";
import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import {
  FaCartShopping,
  FaCircleUser,
  FaPowerOff,
  FaTable,
  FaUserGroup,
  FaUsers,
} from "react-icons/fa6";

const Dashboard = ({children}) => {
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
