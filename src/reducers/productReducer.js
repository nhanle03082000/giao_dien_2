import { act } from "react-dom/test-utils";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LOAD_SCCUESS":
      return {
        ...state,
        products: payload,
        productsLoading: false,
      };
    case "CATEGORIES_LOAD_FAIL":
      return {
        ...state,
        products: [],
        productsLoading: false,
      };
    case "ADD_MST_SDT":
      return {
        ...state,
        products: action.payload,
        productsLoading: false,
      };
    default:
      return state;
  }
};
