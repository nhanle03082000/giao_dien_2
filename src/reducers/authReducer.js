export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        user: payload,
        authLoading: false,
      };
    case "USERS_LOAD_SCUCCESSS":
      return {
        ...state,
        // Users: action.payload,
        Users: action.payload,

        authLoading: false,
      };
    case "USERS_LOAD_FAIL":
      return {
        ...state,
        Users: [],
        authLoading: false,
      };
    default:
      return state;
  }
};
