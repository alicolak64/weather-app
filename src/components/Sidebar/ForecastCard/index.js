import React from "react";
import { useMainContext } from "../../../context/MainContext";

function ForecastCard() {
  const { oneCity, day, todayDate } = useMainContext();

  return (
    <>
      {typeof oneCity !== "undefined" ? (
        <>
          <h2 className="pt-5 text-center text-sky-500 text-2xl font-medium">
            {oneCity.name} / {oneCity.sys?.country}
          </h2>
          <figure className="flex items-center justify-center">
            <img
              src={`http://openweathermap.org/img/wn/${oneCity.weather?.[0]?.icon}@4x.png`}
              alt={oneCity?.name}
              className="h-52"
            />
          </figure>

          <div className="flex items-center justify-center flex-col">
            <div className="weather-inner">
              <span className="text-6xl text-sky-500">
                <strong>{Math.floor(oneCity.main?.temp)}</strong>
              </span>
              <span className="text-3xl pb-5 text-gray-400  dark:text-gray-200">
                °
              </span>
            </div>
            <span className="text-gray-500  text-sm font-semibold mt-4 dark:text-gray-200">
              Feels Like: {Math.floor(oneCity.main?.feels_like)}°
            </span>
            <div className="grid text-center mt-4">
              <time className="text-gray-400 dark:text-gray-200">
                {todayDate}
              </time>
              <span className="text-3xl text-sky-500 font-semibold pr-2 dark:text-gray-200">
                {day}
              </span>
            </div>
          </div>
          <div className="border-b border-gray-200 border-bottom w-full my-8 mx-auto"></div>
          <div>
            <div className="flex items-center justify-items-center">
              <img
                className="h-14"
                src={`http://openweathermap.org/img/wn/${oneCity.weather?.[0]?.icon}@4x.png`}
                alt={oneCity?.name}
              />
              <span className="capitalize pl-1 dark:text-gray-200">
                {oneCity?.weather?.[0]?.description}
              </span>
            </div>
            <div className="flex items-center justify-items-center">
              <figure>
                <img
                  className="h-14"
                  src={`http://openweathermap.org/img/wn/${oneCity.weather?.[0]?.icon}@4x.png`}
                  alt={oneCity?.name}
                />
              </figure>
              <span className="capitalize pl-1  dark:text-gray-200">
                Humidity : {oneCity.main?.humidity}
              </span>
            </div>
            <div></div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ForecastCard;
