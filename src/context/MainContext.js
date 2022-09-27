import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import citiesJSON from "../data/cities.json";
const MainContext = createContext();
const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const MainProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(citiesJSON[33]);
  const [oneCity, setOneCity] = useState([]);
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || "");
  const [isCelcius, setIsCelcius] = useState(
    localStorage.getItem("isCelcius") || "metric"
  );

  const getWeatherData = async () => {
    try {
      const { data } = await axios.get(
        `${api.base}onecall?lat=${city.latitude}&lon=${city.longitude}&units=${isCelcius}&exclude=current,minutely,hourly,alerts&lang=en&appid=${api.key}`
      );

      setWeatherData(data.daily);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getOneCity = async () => {
    try {
      const { data } = await axios.get(
        `${api.base}weather?lat=${city.latitude}&lon=${city.longitude}&units=${isCelcius}&appid=${api.key}`
      );
      setOneCity(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    localStorage.setItem("isCelcius", isCelcius);
    getWeatherData();
    getOneCity();
    // eslint-disable-next-line
  }, [city, isDark, isCelcius]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];

  const date = new Date();
  let todayDate = date.toLocaleDateString();
  let getDay = date.getDay();
  let day;
  switch (getDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "";
  }

  const values = {
    weatherData,
    setWeatherData,
    city,
    setCity,
    citiesJSON,
    day,
    days,
    getDay,
    todayDate,
    oneCity,
    isDark,
    setIsDark,
    isCelcius,
    setIsCelcius,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };
