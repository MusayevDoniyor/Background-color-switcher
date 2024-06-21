import { useReducer, useState } from "react";
import ButtonComponent from "./Components/ButtonComponent";
import Reducer from "./Components/Reducer";
import { InitialState } from "./Components/InitialState";
import { COLORS_ACTIONS } from "./Components/ColorType";
import Colors from "./Components/Colors";

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const { red, green, blue } = state;
  const [colorsArray, setColorsArray] = useState([]);

  const handleColor = () => {
    const newColor = `rgb(${red}, ${green}, ${blue})`;
    setColorsArray([...colorsArray, newColor]);

    state.red = 0;
    state.green = 0;
    state.blue = 0;
  };

  const removeColor = (index) => {
    setColorsArray(colorsArray.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div
          className="w-80 h-80 border rounded-lg"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        ></div>
        <div className="flex justify-between space-x-7 mt-5">
          <ButtonComponent dispatch={dispatch} color_type="RED">
            <p className="font-bold text-center">RED: {red}</p>
          </ButtonComponent>

          <ButtonComponent dispatch={dispatch} color_type="GREEN">
            <p className="font-bold text-center">GREEN: {green}</p>
          </ButtonComponent>

          <ButtonComponent dispatch={dispatch} color_type="BLUE">
            <p className="font-bold text-center">BLUE: {blue}</p>
          </ButtonComponent>
        </div>

        <div className="flex space-x-4">
          <div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={() => {
                dispatch({ type: COLORS_ACTIONS.RESET });
              }}
            >
              RESET
            </button>
          </div>

          <div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={handleColor}
            >
              ADD
            </button>
          </div>
        </div>
        {/* <Colors colorsArray={colorsArray} red={red} green={green} blue={blue} /> */}
        <Colors colorsArray={colorsArray} removeColor={removeColor}></Colors>
      </div>
    </>
  );
}

export default App;
