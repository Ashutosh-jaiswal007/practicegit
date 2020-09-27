import { BUY_CAKE } from "./caketype";

const initialState = {
  noOfCake: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log("in cake reducer");
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
