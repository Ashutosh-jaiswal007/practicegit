
const initialState = {
  login: false,
  error: [],
  result: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
          ...state,
        login: false,
      };
    case "GET_DATA":
        console.log(action.json,'in getData')
      return {
        ...state,
        result: action.json,
        login: true,
      };
    case "CATCH_ERROR":
      return {
        ...state,
        error:action.json,
        login:true
      };
    default:
      return {
        state,
      };
  }
};

export default reducers;
