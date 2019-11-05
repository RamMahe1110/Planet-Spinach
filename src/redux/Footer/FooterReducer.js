const initialState = {
  display: true,
  class: null
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

    case "CHANGE-FOOTER-CLASS":
      return {
        ...state,
        class: action.data
      };

    default:
      return state;
  }
};

export default FooterReducer;
