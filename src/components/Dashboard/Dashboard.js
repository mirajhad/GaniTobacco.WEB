import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      {/* Moved up the parent div */}
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <Link to="#" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="#" className="hover:text-gray-300">
                Analytics
              </Link>
            </li>
            <li className="mb-2">
              <Link to="#" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <div className="bg-white p-4 rounded shadow">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        to="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        to="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        to="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4 text-right">
                      <Link
                        to="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
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
