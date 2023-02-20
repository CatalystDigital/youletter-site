import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import "../App.css";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
