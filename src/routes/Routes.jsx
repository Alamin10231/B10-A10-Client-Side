import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/Layout/MainComponent";
import Home from "../components/Pages/Home";
import AddMovie from "../components/Pages/AddMovie";
import ALLMovies from "../components/Pages/ALLMovies";
import Blogs from "../components/Pages/Blogs";
import MyFavorites from "../components/Pages/MyFavorites";
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
      },
       {
        path: "/myfavorites",
        element: <MyFavorites></MyFavorites>,
      },
    ],
  },
]);

export default router;
