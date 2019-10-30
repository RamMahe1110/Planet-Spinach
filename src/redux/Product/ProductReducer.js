const initialState = {
  allCatList: null,
  products: null,
  selectedCat: null,
  selectedProduct: null
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-All-CATEGORY":
      return {
        ...state,
        allCatList: action.data
      };
    case "GET-LIMITED-PRODUCTS":
      return {
        ...state,
        products: action.data
      };

    case "ON-CATEGORY-SELECT":
      console.log("sam", action.data);
      return {
        ...state,
        selectedCat: action.data
      };

    case "ON-SINGLE-PRODUCT-SELECT":
      return {
        ...state,
        selectedProduct: action.data
      };

    case "SET-ALL-CATLIST-TO-NULL":
      return {
        ...state,
        allCatList: null
      };

    case "SET-PRODUCTS-TO-NULL":
      return {
        ...state,
        products: null
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
