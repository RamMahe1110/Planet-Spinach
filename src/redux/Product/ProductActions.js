export const onCategoryRequest = catID => ({
  type: "ON-CATEGORY-SELECT",
  data: catID
});

export const setCategoryToNull = () => ({
  type: "SET-CATEGORY-TO-NULL"
});

export const onProductRequest = details => ({
  type: "ON-SINGLE-PRODUCT-SELECT",
  data: details
});

export const setSingleProductToNull = () => ({
  type: "SET-SINGLE-PRODUCT-TO-NULL"
});
