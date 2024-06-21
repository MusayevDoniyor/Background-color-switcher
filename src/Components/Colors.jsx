import React from "react";

// This function determines if text should be black or white
// I writed this function with GPT
const getContrastYIQ = (rgb) => {
  const [r, g, b] = rgb
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);

  const yiq = (r * 299 + g * 587 + b * 114) / 100;
  return yiq >= 128 ? "black" : "white";
};

// To convert a component to HEX
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

// To convert RGB to HEX
const rgbToHex = (rgb) => {
  const [r, g, b] = rgb
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const Colors = ({ colorsArray, removeColor }) => {
  return (
    <div className="flex flex-col items-center mt-10 justify-center">
      <h2 className="font-bold text-xl py-2 px-4">
        Colors: {colorsArray.length}
      </h2>
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {colorsArray.map((color, index) => (
          <li
            className="w-60 h-60 border rounded-lg text-center flex justify-center items-center
            flex-col"
            key={index}
            style={{ backgroundColor: color }}
          >
            <p
              className="font-bold text-left"
              style={{ color: getContrastYIQ(color) }}
            >
              <i>RGB - </i>
              {color}
              <br />
              <i>HEX - </i>
              {rgbToHex(color)}
            </p>

            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={() => {
                removeColor(index);
              }}
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
