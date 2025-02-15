import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/Layout/MainComponent";
import Home from "../components/Pages/Home";
import AddMovie from "../components/Pages/AddMovie";
import ALLMovies from "../components/Pages/ALLMovies";
import Blogs from "../components/Pages/Blogs";
import MyFavorites from "../components/Pages/MyFavorites";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent></MainComponent>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/addmovie",
        element: <AddMovie></AddMovie>,
      },
       {
        path: "/AllMovies",
        element: <ALLMovies></ALLMovies>,
      },
       {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader:()=>fetch('/Data/blog.json')
      },
       {
        path: "/myfavorites",
        element: <MyFavorites></MyFavorites>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ],
  },
]);

export default router;
