import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useMainContext } from "../../context/MainContext";
import darkMoon from "../../icons/01n.svg";
import darkSun from "../../icons/01d.svg";
function Navbar() {
  const { isDark, setIsDark, isCelcius, setIsCelcius } = useMainContext();
  return (
    <div className="flex justify-end items-center mb-4">
      <div className="flex items-center mr-6">
        <label
          htmlFor="toggle"
          className="inline-block toggle-label pr-2 font-semibold text-xl text-gray-700 dark:text-gray-200 cursor-pointer"
        >
          °C
        </label>
        <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
          <input
            checked={isCelcius === "metric" ? false : true}
            onChange={() => {}}
            onClick={() =>
              setIsCelcius(isCelcius === "metric" ? "standart" : "metric")
            }
            type="checkbox"
            id="toggle"
            className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white  border-4 border-sky-300  appearance-none cursor-pointer checked:right-0"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-7 rounded-full bg-sky-300 cursor-pointer"
          ></label>
        </div>
        <label
          htmlFor="toggle"
          className="inline-block toggle-label pl-2 font-semibold text-xl text-gray-700 dark:text-gray-200 cursor-pointer"
        >
          °F
        </label>
      </div>
      <button
        onClick={() => setIsDark(isDark === "" ? "dark" : "")}
        className="group border border-gray-300 hover:border-gray-400 p-0.5  rounded-full transition-all mr-5"
      >
        {isDark ? (
          <figure>
            <img
              className="w-8 rounded-full"
              src={darkSun}
              alt="sun"
              title="Light Mode"
            />
          </figure>
        ) : (
          <figure>
            <img className="w-8" src={darkMoon} alt="moon" title="Dark Mode" />
          </figure>
        )}
      </button>
      <a
        className="mr-5"
        href="https://github.com/RasulSonmez/weather-forecast-reactjs"
        target="_blank"
        rel="noopener noreferrer"
        title="Repository"
      >
        <AiFillGithub
          size={38}
          className="text-gray-400 hover:text-gray-600  transition-colors"
        />
      </a>
    </div>
  );
}

export default Navbar;
