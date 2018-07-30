import { createStore } from "redux";

// import reducer from "../src/reducers/index";
import reducer from "../src/reducers/index";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
