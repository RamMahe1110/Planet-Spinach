export const onCategoryRequest = catID => ({
  type: "ON-CATEGORY-SELECT",
  data: catID
});

export const setCategoryToNull = () => ({
  type: "SET-CATEGORY-TO-NULL"
});
