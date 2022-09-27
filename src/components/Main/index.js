import React from "react";
import Wrapper from "./Wrapper";
import { useMainContext } from "../../context/MainContext";

function Main() {
  const { isDark } = useMainContext();
  return (
    <div className={isDark}>
      <div className="main ">
        <Wrapper />
      </div>
    </div>
  );
}

export default Main;
