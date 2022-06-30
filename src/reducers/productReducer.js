import { act } from "react-dom/test-utils";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LOAD_SCCUESS":
      return {
        ...state,
        maTinh: payload,
        maTinhLoading: false,
      };
    case "CATEGORIES_LOAD_FAIL":
      return {
        ...state,
        maTinh: [],
        maTinhLoading: false,
      };
    case "ADD_MST_SDT":
      return {
        ...state,
        maTinh: action.payload,
        // products: [...state.products, payload],
        maTinhLoading: false,
      };
    default:
      return state;
  }
};
