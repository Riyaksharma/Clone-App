export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "success":
      return { products: action.payload };

    case "fail":
      return { error: action.payload };

    default:
      return state;
  }
};
