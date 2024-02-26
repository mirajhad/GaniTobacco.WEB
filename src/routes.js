import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { DashboardSummary } from "./components";
import { Home, Item } from "./pages";
import { Login } from "./pages";
import { Register } from "./pages";
import { Dashboard } from "./pages";
import { Order } from "./pages";
import { Rate } from "./pages";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Sidebar from "./components/Admin/Sidebar";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "order",
        element: <Order />,
      },
      {
        path: "rate",
        element: <Rate />,
      },
      {
        path: "dashboard",
        element: (
          <AuthLayout authentication>
            <DashboardSummary />,
          </AuthLayout>
        ),
        children:[
          {
            path:"item",
            element:<Item/>
          }
        ]
      },
    ],
  },
]);
export default routes;
