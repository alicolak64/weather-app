import React from "react";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import Tempratures from "./Tempratures";
import WindStatus from "./WindStatus";
function Highlights() {
  return (
    <div className="mt-14">
      <h2 className="pt-5  text-sky-500 text-2xl font-medium">
        Today's Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Tempratures />
        <Humidity />
        <SunriseSunset />
        <WindStatus />
      </div>
    </div>
  );
}

export default Highlights;
