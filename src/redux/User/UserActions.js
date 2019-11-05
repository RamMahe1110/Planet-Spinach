import axios from "axios";

export const onUserSignUp = data => dispatch => {
  axios
    .post("http://localhost:5000/user/signup", data)
    .then(res => dispatch({ type: "ON-AUTH-SUCCESS", data: res.data }))
    .catch(err =>
      dispatch({ type: "ON-SIGNUP-ERROR", data: err.response.data })
    );
};

export const onUserLogin = data => dispatch => {
  axios
    .post("http://localhost:5000/user/login", data)
    .then(res => dispatch({ type: "ON-AUTH-SUCCESS", data: res.data }))
    .catch(err =>
      dispatch({ type: "ON-LOGIN-ERROR", data: err.response.data })
    );
};

export const setErrToNull = () => ({
  type: "SET-ERR-TO-NULL"
});

export const onUserLogout = () => ({
  type: "ON-USER-LOGOUT"
});
