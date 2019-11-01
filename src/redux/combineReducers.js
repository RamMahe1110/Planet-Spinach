import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ProductReducer from "./Product/ProductReducer";
import BasketReducer from "./Basket/BasketReducer";

export default combineReducers({
  UserReducer,
  ProductReducer,
  BasketReducer
});
