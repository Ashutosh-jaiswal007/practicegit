import React, { useSelector, useDispatch } from "react";
import { buyCake } from "../redux";

export const HooksCakeContainer = (props) => {
  const noOfCakes = useSelector((state = state.noOfCakes));
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cake </h2>
      <button onClick={() => dispatch(buyCake())}>Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
