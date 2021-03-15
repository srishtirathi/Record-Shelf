/* eslint-disable import/prefer-default-export */
export const groupByCategory = (products) => products.reduce((productsByCategory, product) => {
  const currentCategory = product.genre.name;
  const prevProductsOfSameCategory = productsByCategory[currentCategory] || [];

  return {
    ...productsByCategory,
    [currentCategory]: [...prevProductsOfSameCategory, product],
  };
}, {});
