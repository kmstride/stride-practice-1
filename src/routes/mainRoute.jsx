import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleItem from "../pages/SingleItem/SingleItem";
import AddItem from "../pages/Dashboard/AddItem";
import MyItems from "../pages/Dashboard/MyItems";
import EditItem from "../pages/Dashboard/EditItem";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <Home />,
                loader: ()=>fetch("http://localhost:3000/items")
            },
            {
                path: "items/:id",
                element: <SingleItem />,
                loader: ({params})=> fetch(`http://localhost:3000/items/${params.id}`)
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "add-item",
                element: <AddItem />
            },
            {
                path: "my-items",
                element: <MyItems />,
                loader: ()=>fetch("http://localhost:3000/items")
            },
            {
                path: "edit-item/:id",
                element: <EditItem />,
                loader: ({params})=> fetch(`http://localhost:3000/items/${params.id}`)
            }
        ]
    }
])
