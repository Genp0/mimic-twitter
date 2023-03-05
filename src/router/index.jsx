import {  createBrowserRouter,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import TwitterRegister from "../components/TwitterRegister";
import NotFound from "../pages/NotFound";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
      path: "/signup",
      element: <TwitterRegister className="h-[37.5rem] w-[37.5rem] " />,
    }]
  },
  { path: "/login", element: <Login /> },
  { path: "/404", element: <NotFound /> },
  { path: '*', element: <Navigate to="/404" /> }
]);


export default routes
