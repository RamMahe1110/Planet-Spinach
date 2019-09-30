import { createStore } from "redux";
import CombineReducers from "./reducers/CombineReducers";

const store = createStore(CombineReducers);
export default store;
