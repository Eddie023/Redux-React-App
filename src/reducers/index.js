import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import loginReducer from "./loginReducer";

const reducer = combineReducers({
  todo: todoReducer,
  login: loginReducer
});

export default reducer;
