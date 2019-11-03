const initialState = {
  display: true
};

const FooterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-DISPLAY-TRUE":
      return {
        ...state,
        display: true
      };
    case "SET-DISPLAY-FALSE":
      return {
        ...state,
        display: false
      };

    default:
      return state;
  }
};

export default FooterReducer;
