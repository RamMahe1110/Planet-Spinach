export const getCurrentCategory = (catID, products) => {
  const singleCategory = getSingleCategory(catID, products);
  return singleCategory;
};

export const getCurrentProduct = (details, products) => {
  const singleCategory = getSingleCategory(details.catID, products);
  const singleProduct = singleCategory.products.filter(
    product => product.id.toString() === details.productID.toString()
  )[0];
  return singleProduct;
};

const getSingleCategory = (catID, products) => {
  return products.filter(
    category => category.catId.toString() === catID.toString()
  )[0];
};
