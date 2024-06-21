import { InitialState } from "./InitialState.js";
import { COLORS_ACTIONS } from "./ColorType.js";

const Reducer = (state = InitialState, action) => {
  console.log(action, "myState");
  switch (action.type) {
    case COLORS_ACTIONS.INCREAMENTS.RED:
      return { ...state, red: state.red < 255 ? state.red + 1 : 255 };
    case COLORS_ACTIONS.DECREAMENTS.RED:
      return { ...state, red: state.red > 0 ? state.red - 1 : 0 };
    case COLORS_ACTIONS.INCREAMENTS.GREEN:
      return { ...state, green: state.green < 255 ? state.green + 1 : 255 };
    case COLORS_ACTIONS.DECREAMENTS.GREEN:
      return { ...state, green: state.green > 0 ? state.green - 1 : 0 };
    case COLORS_ACTIONS.INCREAMENTS.BLUE:
      return { ...state, blue: state.blue < 255 ? state.blue + 1 : 255 };
    case COLORS_ACTIONS.DECREAMENTS.BLUE:
      return { ...state, blue: state.blue > 0 ? state.blue - 1 : 0 };
    case COLORS_ACTIONS.RESET:
      return {
        red: 0,
        green: 0,
        blue: 0,
      };

    case COLORS_ACTIONS.ADD:
      return;
    default:
      return state;
  }
};

export default Reducer;
