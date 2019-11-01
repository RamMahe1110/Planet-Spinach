const initialState = {
  currentUser: null,
  signupErr: null,
  loginErr: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON-AUTH-SUCCESS":
      return {
        ...state,
        currentUser: action.data,
        signupErr: null
      };

    case "ON-SIGNUP-ERROR":
      return {
        ...state,
        signupErr: action.data
      };

    case "ON-LOGIN-ERROR":
      return {
        ...state,
        loginErr: action.data
      };

    default:
      return state;
  }
};

export default UserReducer;
