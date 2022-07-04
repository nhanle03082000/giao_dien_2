import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import { apiUrl, Token_Location, apiUrlProduct } from "./constant";
import { productReducer } from "../reducers/productReducer";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [Location, dispatch] = useReducer(productReducer, {
    Users: [],
    user: "",
    authLoading: true,
  });
  const checkAuth = async (userForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/khoqua/tonkho/kiemtrathuebao?a=select`,
        {
          jsonData: userForm,
        }

        // {
        //   headers: {
        //     Authorization: Token_Location,
        //   },
        // }
      );
      if (response.data)
        dispatch({ type: "ADD_MST_SDT", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };

  const authContextData = {};
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
