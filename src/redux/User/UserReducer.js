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

    case "SET-ERR-TO-NULL":
      return {
        ...state,
        signupErr: null,
        loginErr: null
      };

    case "ON-USER-LOGOUT":
      return {
        ...state,
        currentUser: null,
        signupErr: null,
        loginErr: null
      };

    default:
      return state;
  }
};

export default UserReducer;
