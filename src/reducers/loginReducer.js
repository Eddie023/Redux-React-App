import { SET_LOGIN } from "../actions/loginAction";

const INITIAL_STATE = {
  isLogin: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      console.log("i am called");
      return {
        ...state,
        isLogin: true
      };
    // return state;

    default:
      return state;
  }
};

export default loginReducer;
