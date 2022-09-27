import React from "react";
import { useMainContext } from "../../../../context/MainContext";
function WeeklyForecast() {
  const { weatherData, days, city } = useMainContext();

  return (
    <div className="mt-12">
      <h2 className="pt-5  text-sky-500 text-2xl font-medium">
        Weekly Forecast
      </h2>
      <h1 className="text-gray-600 dark:text-gray-200">{city.name}</h1>
      <ul className="grid grid-cols-2 lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-2 gap-3 md:gap-6 lg:gap-2 ">
        {weatherData &&
          weatherData.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col justify-center items-center bg-white  dark:bg-gray-900 rounded-xl p-3"
            >
              <span className="font-semibold text-sm  text-gray-600 dark:text-gray-200">
                {days[new Date(item.dt * 1000).getDay()]}
              </span>

              <img
                className="w-2/3"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon-01n"
              />
              <span className="text-xs text-gray-500 dark:text-gray-200">
                {" "}
                {item.weather[0].description.substring(0, 5)}
              </span>
              <span className="text-lg text-gray-500 dark:text-gray-200 ">
                {Math.floor(item.temp.max)}°
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WeeklyForecast;
