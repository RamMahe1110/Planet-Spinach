import Products from "../../data/Products";
import { getCurrentCategory, getCurrentProduct } from "./ProductFunction";

const initialState = {
  products: Products,
  selectedCat: null,
  selectedProduct: null
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON-CATEGORY-SELECT":
      return {
        ...state,
        selectedCat: getCurrentCategory(action.data, Products)
      };

    case "ON-SINGLE-PRODUCT-SELECT":
      return {
        ...state,
        selectedProduct: getCurrentProduct(action.data, Products)
      };

    case "SET-CATEGORY-TO-NULL":
      return {
        ...state,
        selectedCat: null
      };

    case "SET-SINGLE-PRODUCT-TO-NULL":
      return {
        ...state,
        selectedProduct: null
      };

    default:
      return state;
  }
};

export default ProductReducer;
