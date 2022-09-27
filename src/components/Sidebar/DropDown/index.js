import React from "react";
import { useMainContext } from "../../../context/MainContext";
function DropDownMenu() {
  const { city, setCity, citiesJSON } = useMainContext();
  const changeCityName = (e) => {
    for (let i = 0; i < citiesJSON.length; i++) {
      if (e.target.value === citiesJSON[i].name) {
        setCity(citiesJSON[i]);
      }
    }
  };
  return (
    <div className=" mt-3 flex items-center overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-500">
      <select
        className="h-8 outline-none bg-white text-gray-700   dark:bg-gray-500 dark:text-gray-200 text-sm px-2 w-full"
        name="cityname"
        id="cityname"
        value={city.name}
        onChange={changeCityName}
      >
        {citiesJSON.map((item, key) => (
          <option className="dark:text-gray-400" key={key} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownMenu;
