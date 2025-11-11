import { createBrowserRouter } from "react-router";
import Register from "../Pages/Register";
import Login from "../Pages/LoginForm";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ForgetFrom from "../Pages/ForgetFrom";
import PrivateProvider from "../Utilitys/PrivateProvider";
import Addcrops from "../Pages/Addcrops";
import AllCrops from "../Pages/AllCrops";
import MyPosts from "../Pages/MyPosts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", Component: Home },
      {
        path: "/allcrops",
        Component: AllCrops,
      },
      {
        path: "/addcrops",
        element: (
          <PrivateProvider>
            <Addcrops></Addcrops>
          </PrivateProvider>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateProvider>
            <MyPosts></MyPosts>
          </PrivateProvider>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/forgetPassword",
    Component: ForgetFrom,
  },
]);
