import { act } from "react-dom/test-utils";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOCATION_LOAD_SCUSESS":
      return {
        ...state,
        maTinh: payload,
        maTinhLoading: false,
      };
    case "LOCATION_LOAD_FAIL":
      return {
        ...state,
        maTinh: [],
        maTinhLoading: false,
      };
    case "ADD_MST_SDT":
      return {
        ...state,
        maTinh: action.payload,
        // maTinh: [...state.maTinh, payload],
        maTinhLoading: false,
      };
    case "ADD_MS_HUYEN":
      return {
        ...state,
        maHuyen: action.payload,
        // maHuyen: [...state.maHuyen, payload],
        maTinhLoading: false,
      };
    default:
      return state;
  }
};
