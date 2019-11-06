import axios from "axios";

export const getUserBasket = data => dispatch => {
  axios
    .get(
      `https://radiant-waters-84361.herokuapp.com/basket?token=${data.token}`
    )
    .then(res => {
      dispatch({
        type: "GET-USER-BASKET",
        data: res.data
      });
    });
};

export const addProduct = data => dispatch => {
  axios
    .post("https://radiant-waters-84361.herokuapp.com/basket/add/product", data)
    .then(res => {
      dispatch({
        type: "GET-USER-BASKET",
        data: res.data
      });
    });
};

export const decrementProductQty = data => dispatch => {
  axios
    .post(
      "https://radiant-waters-84361.herokuapp.com/basket/decrement/product",
      data
    )
    .then(res => {
      dispatch({
        type: "GET-USER-BASKET",
        data: res.data
      });
    });
};

export const setBasketToNull = () => {
  return {
    type: "SET-BASKET-TO-NULL"
  };
};
