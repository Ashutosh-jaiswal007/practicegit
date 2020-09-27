import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCES,
  FETCH_USER_FAILURE,
} from "./usertype";

import { axios } from "axios";

export const fetchUserRequest = (user) => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSucces = (user) => {
  return {
    type: FETCH_USER_SUCCES,
    paylode: user,
  };
};

export const fetchUserError = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    paylode: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSucces(user));
      })
      .user((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserError(errorMsg));
      });
  };
};
