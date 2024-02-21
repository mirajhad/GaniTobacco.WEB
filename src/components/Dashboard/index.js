import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        <div className="w-full md:w-64 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <LinkContainer to="/admin/product-list" className="mb-2">
                <Nav.Link>
                  <strong className="flex items-center">
                    <FaTable
                      style={{ marginRight: "10px", marginBottom: "3px" }}
                      size={16}
                    />
                    Products
                  </strong>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className="mb-2">
              <LinkContainer to="/admin/order-list" className="mb-2">
                <Nav.Link>
                  <strong className="flex items-center">
                    <FaCartShopping
                      style={{ marginRight: "10px", marginBottom: "3px" }}
                      size={16}
                    />
                    Orders
                  </strong>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className="mb-2">
              <LinkContainer to="/admin/user-list" className="mb-2">
                <Nav.Link>
                  <strong className="flex items-center">
                    <FaUsers
                      style={{ marginRight: "10px", marginBottom: "3px" }}
                      size={16}
                    />
                    Users
                  </strong>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className="mb-2">
              <LinkContainer to="/admin/admin-list" className="mb-2">
                <Nav.Link>
                  <strong className="flex items-center">
                    <FaUserGroup
                      style={{ marginRight: "10px", marginBottom: "3px" }}
                      size={16}
                    />
                    Admins
                  </strong>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className="mb-2">
              <LinkContainer to="/admin/profile" className="mb-2">
                <Nav.Link>
                  <strong className="flex items-center">
                    <FaCircleUser
                      style={{ marginRight: "10px", marginBottom: "3px" }}
                      size={16}
                    />
                    Profile
                  </strong>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className="mb-2">
              <Nav.Link>
                <strong className="flex items-center">
                  <FaPowerOff
                    style={{ marginRight: "10px", marginBottom: "3px" }}
                    size={16}
                  />
                  Logout
                </strong>
              </Nav.Link>
            </li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <div className="bg-white p-4 rounded shadow">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>

                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through products and generate table rows */}
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{product.name}</td>
                      <td className="px-6 py-4">{product.email}</td>
                      <td className="px-6 py-4">{product.address}</td>
                      <td className="px-6 py-4">{product.phone}</td>
                      <td className="px-6 py-4">{product.quantity}</td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`#`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
