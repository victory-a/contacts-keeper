import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { container, innerContainer } from "./style.module.css";

export const FullPageSpinner = () => {
  return (
    <IconContext.Provider value={{ color: "#0d6797", size: "30px" }}>
      <div className={container}>
        <span className={innerContainer}>
          <AiOutlineLoading3Quarters aria-label="loading" />
        </span>
      </div>
    </IconContext.Provider>
  );
};

export const Spinner = () => {
  return (
    <IconContext.Provider value={{ color: "#0d6797", size: "15px" }}>
      <span className={innerContainer}>
        <AiOutlineLoading3Quarters aria-label="loading" />
      </span>
    </IconContext.Provider>
  );
};

export const ButtonSpinner = () => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <span className={innerContainer}>
        <AiOutlineLoading3Quarters aria-label="loading" />
      </span>
    </IconContext.Provider>
  );
};
