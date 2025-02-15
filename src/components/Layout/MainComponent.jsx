import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainComponent = () => {
  return <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
  </div>;
};

export default MainComponent;
