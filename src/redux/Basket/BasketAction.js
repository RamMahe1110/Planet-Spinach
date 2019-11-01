import axios from "axios";

export const getUserBasket = data => dispatch => {
  axios.get(`http://localhost:5000/basket?token=${data.token}`).then(res => {
    dispatch({
      type: "GET-USER-BASKET",
      data: res.data
    });
  });
};

export const incrementProductQty = data => dispatch => {
  axios
    .post("http://localhost:5000/basket/increment/product", data)
    .then(res => {
      dispatch({
        type: "GET-USER-BASKET",
        data: res.data
      });
    });
};

export const decrementProductQty = data => dispatch => {
  axios
    .post("http://localhost:5000/basket/decrement/product", data)
    .then(res => {
      dispatch({
        type: "GET-USER-BASKET",
        data: res.data
      });
    });
};