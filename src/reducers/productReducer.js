export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LOAD_SCUSESS":
      return {
        ...state,
        product: action.payload,
        // maTinh: [...state.maTinh, payload],
        productLoading: false,
      };
    case "CHECK_PRODUCT_LOAD_SCUSESS":
      return {
        ...state,
        checkProduct: payload,
        // maTinh: [...state.maTinh, payload],
        productLoading: false,
      };
    case "PRODUCT_LOAD_FAIL":
      return {
        ...state,
        product: [],
        productLoading: false,
      };
    default:
      return state;
  }
};
