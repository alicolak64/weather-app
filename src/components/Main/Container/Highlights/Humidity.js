import React from "react";
import { useMainContext } from "../../../../context/MainContext";
import humidityImage from "../../../../icons/humidity.svg";

function Humidity() {
  const { oneCity } = useMainContext();
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 p-4 rounded-3xl mt-2 ">
      <h3 className="text-base text-gray-400 dark:text-gray-200 font-semibold">
        Humidity
      </h3>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-semibold text-sky-500">
            {oneCity?.main?.humidity}
          </span>
          <span className="text-md font-semibold text-gray-500 dark:text-gray-200">
            %
          </span>
        </div>
        <figure>
          <img className="w-32" src={humidityImage} alt="sunrise" />
        </figure>
      </div>
      <p className="text-xl font-semibold text-gray-600 dark:text-gray-200 pt-2">
        {oneCity?.main?.humidity < 30
          ? "Low 👎🏻"
          : oneCity?.main?.humidity >= 30 && oneCity?.main?.humidity < 60
          ? "Normal 👌🏻"
          : "High 👍🏻"}
      </p>
    </div>
  );
}

export default Humidity;
