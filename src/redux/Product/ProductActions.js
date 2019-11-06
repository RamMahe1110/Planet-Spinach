import axios from "axios";

export const getAllCategoryList = () => dispatch => {
  axios
    .get("https://radiant-waters-84361.herokuapp.com/product/category/all")
    .then(res => dispatch({ type: "GET-All-CATEGORY", data: res.data }));
};

export const setAllCatToNull = () => ({
  type: "SET-ALL-CATLIST-TO-NULL"
});

export const getLimitedProducts = data => dispatch => {
  axios
    .post(
      "https://radiant-waters-84361.herokuapp.com/product/limitedItems",
      data
    )
    .then(res => dispatch({ type: "GET-LIMITED-PRODUCTS", data: res.data }));
};

export const setProductsToNull = () => ({
  type: "SET-PRODUCTS-TO-NULL"
});

export const onCategoryRequest = (catID, page, limit) => dispatch => {
  axios
    .post(
      `https://radiant-waters-84361.herokuapp.com/product/category/${catID}?page=${page}&limit=${limit}`
    )
    .then(res => dispatch({ type: "ON-CATEGORY-SELECT", data: res.data }));
};

export const setCategoryToNull = () => ({
  type: "SET-CATEGORY-TO-NULL"
});

export const onProductRequest = (productID, token) => dispatch => {
  axios
    .post(
      `https://radiant-waters-84361.herokuapp.com/product/single/${productID}`,
      { token }
    )
    .then(res => {
      console.log("annn", res.data);
      dispatch({
        type: "ON-SINGLE-PRODUCT-SELECT",
        data: res.data
      });
    });
};

export const setSingleProductToNull = () => ({
  type: "SET-SINGLE-PRODUCT-TO-NULL"
});
