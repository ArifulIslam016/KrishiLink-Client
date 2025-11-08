import { createBrowserRouter } from "react-router";
import Register from "../Pages/Register";
import Login from "../Pages/LoginForm";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";



export const router=createBrowserRouter([{
    path:'/',
    Component: MainLayout,
    children:([
        {path:'/',
            Component:Home
        }
    ])
},{
    path:'/login',
    Component:Login
}
,{
    path:'/register',
    Component:Register
}
])
