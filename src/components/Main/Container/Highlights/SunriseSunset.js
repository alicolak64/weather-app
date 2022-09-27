import React from "react";
import { useMainContext } from "../../../../context/MainContext";
import sunriseImage from "../../../../icons/sunrise.svg";
import sunsetImage from "../../../../icons/sunset.svg";

function SunriseSunset() {
  const { oneCity } = useMainContext();

  function convertTime(unixTime, offset) {
    let dt = new Date((unixTime + offset) * 1000);
    let h = dt.getHours();
    let m = "0" + dt.getMinutes();
    let t = h + ":" + m.substr(-2);
    return t;
  }

  let sunrise = convertTime(oneCity?.sys?.sunrise, oneCity?.timezone);
  let sunset = convertTime(oneCity?.sys?.sunset, oneCity?.timezone);
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 p-4 rounded-3xl mt-2">
      <h3 className="text-base text-gray-400 dark:text-gray-200 font-semibold">
        Sunrise & Sunset
      </h3>
      <div className="flex items-center">
        <figure>
          <img className="w-24 mr-3" src={sunriseImage} alt="sunrise" />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
          {sunrise}
        </span>
      </div>
      <div className="flex items-center">
        <figure>
          <img className="w-24 mr-3" src={sunsetImage} alt="sunrise" />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200  font-semibold">
          {sunset}
        </span>
      </div>
    </div>
  );
}

export default SunriseSunset;
