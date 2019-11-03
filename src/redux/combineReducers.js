import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ProductReducer from "./Product/ProductReducer";
import BasketReducer from "./Basket/BasketReducer";
import FooterReducer from "./Footer/FooterReducer";

export default combineReducers({
  UserReducer,
  ProductReducer,
  BasketReducer,
  FooterReducer
});
