import axios from "axios";

export const getAllCategoryList = () => dispatch => {
  axios
    .get("http://localhost:5000/product/category/all")
    .then(res => dispatch({ type: "GET-All-CATEGORY", data: res.data }));
};

export const setAllCatToNull = () => ({
  type: "SET-ALL-CATLIST-TO-NULL"
});

export const getLimitedProducts = data => dispatch => {
  axios
    .post("http://localhost:5000/product/limitedItems", data)
    .then(res => dispatch({ type: "GET-LIMITED-PRODUCTS", data: res.data }));
};

export const setProductsToNull = () => ({
  type: "SET-PRODUCTS-TO-NULL"
});

export const onCategoryRequest = (catID, page, limit) => dispatch => {
  axios
    .post(
      `http://localhost:5000/product/category/${catID}?page=${page}&limit=${limit}`
    )
    .then(res => dispatch({ type: "ON-CATEGORY-SELECT", data: res.data }));
};

export const setCategoryToNull = () => ({
  type: "SET-CATEGORY-TO-NULL"
});

export const onProductRequest = productID => dispatch => {
  axios.post(`http://localhost:5000/product/single/${productID}`).then(res =>
    dispatch({
      type: "ON-SINGLE-PRODUCT-SELECT",
      data: res.data
    })
  );
};

export const setSingleProductToNull = () => ({
  type: "SET-SINGLE-PRODUCT-TO-NULL"
});
