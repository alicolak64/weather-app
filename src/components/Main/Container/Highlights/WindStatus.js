import React from "react";
import { useMainContext } from "../../../../context/MainContext";
import windsockImage from "../../../../icons/windsock.svg";
import compassImage from "../../../../icons/compass.svg";
function WindStatus() {
  const { oneCity } = useMainContext();
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 p-4 rounded-3xl mt-2">
      <h3 className="text-base text-gray-400 font-semibold dark:text-gray-200">
        Wind Status
      </h3>
      <div className="flex flex-col justify-around h-full">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-6xl font-bold text-sky-500">
              {oneCity?.wind?.speed}
            </span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-200">
              Km/h
            </span>
          </div>
          <figure>
            <img className="w-32" src={windsockImage} alt="wind sock" />
          </figure>
        </div>
        <div className="flex items-center text-xl font-semibold text-gray-600 ">
          <figure>
            <img
              className="w-16"
              style={{ transform: `rotate(${oneCity?.wind?.deg}deg)` }}
              src={compassImage}
              alt="Direction"
            />
          </figure>
          <span className="text-gray-500 dark:text-gray-200">Direction</span>
        </div>
      </div>
    </div>
  );
}

export default WindStatus;
