import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ProductReducer from "./Product/ProductReducer";

export default combineReducers({
  ProductReducer,
  UserReducer
});
