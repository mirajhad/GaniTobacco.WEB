import React from "react";
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
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardSummary = () => {
  const menuState = useSelector((state) => state.header.showMenu);

  return (
    <>
      {menuState && (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
          <div className="w-full md:w-64 bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold text-center sm:text-left">
              Dashboard
            </h1>
            <ul className="mt-4 flex flex-col items-center sm:list-item">
              <li className="mb-2 w-[150px] sm:w-auto">
                <LinkContainer to="/dashboard/item" className="mb-2">
                  <Nav.Link>
                    <strong className="flex items-center">
                      <FaTable
                        style={{ marginRight: "10px", marginBottom: "3px" }}
                        size={16}
                      />
                      Item
                    </strong>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li className="mb-2 w-[150px] sm:w-auto">
                <LinkContainer to="/dashboard/itemList" className="mb-2">
                  <Nav.Link>
                    <strong className="flex items-center">
                      <FaCartShopping
                        style={{ marginRight: "10px", marginBottom: "3px" }}
                        size={16}
                      />
                      Item List
                    </strong>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li className="mb-2 w-[150px] sm:w-auto">
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
              <li className="mb-2 w-[150px] sm:w-auto">
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
              <li className="mb-2 w-[150px] sm:w-auto">
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
              <li className="mb-2 w-[150px] sm:w-auto">
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
            </ul>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSummary;
