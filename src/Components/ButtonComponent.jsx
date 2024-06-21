import React from "react";
import { COLORS_ACTIONS } from "./ColorType";

const ButtonComponent = ({ children, dispatch, color_type }) => {
  const colorCLasses = {
    RED: "bg-red-500 hover:bg-red-700 focues:ring-red-300",
    GREEN: "bg-green-500 hover:bg-green-700 focus:ring-green-300",
    BLUE: "bg-blue-500 hover:bg-blue-700 focus:ring-blue-300",
  };

  return (
    <div className="space-x-2">
      {children}

      <button
        className={`${colorCLasses[color_type]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2`}
        onClick={() => {
          dispatch({ type: COLORS_ACTIONS.INCREAMENTS[color_type] });
        }}
      >
        +1
      </button>
      <button
        className={`${colorCLasses[color_type]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2`}
        onClick={() => {
          dispatch({ type: COLORS_ACTIONS.DECREAMENTS[color_type] });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default ButtonComponent;
