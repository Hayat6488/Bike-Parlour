import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../LayOuts/DashboardLayOut";
import Main from "../../LayOuts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/MyOrders/Payment/Payment";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Error from "../../Pages/Error/Error";
import BikesDetails from "../../Pages/Home/Categories/CategoryMenu/BikesDetails/BikesDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../PrivateRoutes/SellerRoutes";
import UserRoutes from "../PrivateRoutes/UserRoutes";

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
                path: '/blogs',
                element: <Blogs></Blogs>
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
                element: <PrivateRoutes><BikesDetails></BikesDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://bike-parlour-server.vercel.app/categories/${params.name}`)
            },
            {
                path: '/*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: '/dashboard/myproducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/myorders',
                element: <UserRoutes><MyOrders></MyOrders></UserRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myorders/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://bike-parlour-server.vercel.app/myorders/products/${params.id}`)
            }
        ]
    }
])