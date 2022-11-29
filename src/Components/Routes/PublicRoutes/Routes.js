import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../LayOuts/DashboardLayOut";
import Main from "../../LayOuts/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import BikesDetails from "../../Pages/Home/Categories/CategoryMenu/BikesDetails/BikesDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:name',
                element: <BikesDetails></BikesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.name}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])