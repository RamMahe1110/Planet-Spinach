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
    default:
      return state;
  }
};

export default BasketReducer;
