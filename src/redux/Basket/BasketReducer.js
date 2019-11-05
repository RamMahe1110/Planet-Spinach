const initialState = {
  userBasket: null
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-USER-BASKET":
      return {
        ...state,
        userBasket: action.data
      };
    case "SET-BASKET-TO-NULL":
      return {
        ...state,
        userBasket: null
      };

    case "ON-USER-LOGOUT":
      return {
        ...state,
        userBasket: null
      };

    default:
      return state;
  }
};

export default BasketReducer;
