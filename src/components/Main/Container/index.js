import React from "react";
import Navbar from "../../Navbar";
import { useWindowWidth } from "@react-hook/window-size";
import Highlights from "./Highlights";
import WeeklyForecast from "./WeeklyForecast";

function Container() {
  const windowWidth = useWindowWidth();
  return (
    <div className="container">
      {windowWidth >= 1024 && <Navbar />}
      <WeeklyForecast />
      <Highlights />
    </div>
  );
}

export default Container;
