import React from "react";
import { useMainContext } from "../../../../context/MainContext";
import thermometerWarmer from "../../../../icons/thermometer-warmer.svg";
import thermometerColder from "../../../../icons/thermometer-colder.svg";
function Tempratures() {
  const { oneCity } = useMainContext();

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900  p-4 rounded-3xl mt-2">
      <h3 className="text-base text-gray-400 font-semibold dark:text-gray-200">
        Tempratures
      </h3>
      <div>
        <div className="flex items-center">
          <figure>
            <img className="w-24" src={thermometerWarmer} alt="sunrise" />
          </figure>
          <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
            <span className="font-semibold ">Max: </span>
            <br />
            <span className="font-normal">
              {Math.floor(oneCity.main?.temp_max)}°
            </span>
          </span>
        </div>
        <div className="flex items-center">
          <figure>
            <img className="w-24" src={thermometerColder} alt="sunrise" />
          </figure>
          <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
            <span className="font-semibold">Min: </span>
            <br />
            <span className="font-normal">
              {Math.floor(oneCity.main?.temp_min)}°
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tempratures;
