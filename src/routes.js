import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {Home} from "./pages";
import About from "./components/About/About";
import {Login} from "./pages";
import {Register} from "./pages";
import Contact from "./components/Contact/Contact";
import {Dashboard} from "./pages";
import {Order} from "./pages";
import AuthLayout from "./components/AuthLayout/AuthLayout";
const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"contact",
                element:<Contact/>
                
            },
            {
                path:"order",
                element:<Order/>
            },
            {
                path:"dashboard",
                element:
                (
                    <AuthLayout authentication>
                         <Dashboard/>,       
                    </AuthLayout>
                )
                                    
                       
            }           
        ]
    },
    
])
export default routes;