import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import { apiUrl, Token_Location, apiUrlProduct } from "./constant";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    Users: [],
    user: "",
    authLoading: true,
  });
  const checkAuth = async (userForm) => {
    console.log("userForm", userForm);
    try {
      const response = await axios.post(
        `${apiUrl}/khoqua/tonkho/kiemtrathuebao?a=select`,
        {
          jsonData: userForm,
        }
      );
      if (response.data)
        dispatch({ type: "USERS_LOAD_SCUCCESSS", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };

  const authContextData = { authState, checkAuth };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
