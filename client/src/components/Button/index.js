import React from "react";
import { btn, btn_lg} from "./style.module.css";

const Button = ({ type = "button", size="small", label = "", ...props }) => {

  return (
    <span className={size==="large" ? `${btn} ${btn_lg}` : `${btn}`}>
      <button type={type} {...props} >
        {props.children?? label}
      </button>
    </span>
  );
};

export default Button;
