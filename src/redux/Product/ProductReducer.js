import Products from "../../data/Products";
import { getCurrentCategory } from "./ProductFunction";

const initialState = {
  products: Products,
  selectedCat: null
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON-CATEGORY-SELECT":
      return {
        ...state,
        selectedCat: getCurrentCategory(action.data, Products)
      };

    case "SET-CATEGORY-TO-NULL":
      return {
        ...state,
        selectedCat: null
      };

    default:
      return state;
  }
};

export default ProductReducer;
