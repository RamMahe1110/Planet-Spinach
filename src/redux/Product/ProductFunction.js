export const getCurrentCategory = (catID, products) => {
  const singleCategory = products.filter(
    category => category.catId.toString() === catID.toString()
  )[0];
  return singleCategory;
};
