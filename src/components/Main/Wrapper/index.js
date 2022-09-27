import React from "react";
import Sidebar from "../../Sidebar";
import Container from "../Container";
import Navbar from "../../Navbar";
import { useWindowWidth } from "@react-hook/window-size";

function Wrapper() {
  const windowWidth = useWindowWidth();
  return (
    <div className="wrapper">
      {windowWidth <= 1024 && <Navbar />}
      <Sidebar />
      <Container />
    </div>
  );
}

export default Wrapper;
