import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      slug: "/register",
      active: !authStatus,
    },
    {
      name: "Order",
      slug: "/order",
      active: !authStatus,
    },
    {
      name: "Rate",
      slug: "/rate",
      active: !authStatus,
    },

  ];
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center max-w-screen-3xl">
            <Link to="/" className="flex items-center justify-center w-[100%] sm:justify-start sm:w-[169px]">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
                Gani Tobacco
              </span>
            </Link>

            <ul className="flex ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
              <ThemeBtn />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
