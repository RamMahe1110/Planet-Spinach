const initialState = {
  userBasket: null,
  total: null
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-USER-BASKET":
      return {
        ...state,
        userBasket: action.data.records,
        total: action.data.total
      };
    case "SET-BASKET-TO-NULL":
      return {
        ...state,
        userBasket: null,
        total: null
      };

    case "ON-USER-LOGOUT":
      return {
        ...state,
        userBasket: null,
        total: null
      };

    default:
      return state;
  }
};

export default BasketReducer;
