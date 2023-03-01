import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  { path: "/", element: <MainLayout /> },
  { path: "/login", element: <Login /> },
]);


export default router
