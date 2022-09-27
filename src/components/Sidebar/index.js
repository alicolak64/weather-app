import React from "react";
import DropDownMenu from "./DropDown";
import ForecastCard from "./ForecastCard";

function Sidebar() {
  return (
    <aside className="sidebar">
      <DropDownMenu />
      <ForecastCard />
    </aside>
  );
}

export default Sidebar;
