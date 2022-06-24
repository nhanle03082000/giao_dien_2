import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import { apiUrl } from "./constant";
import { productReducer } from "../reducers/productReducer";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, {
    products: "",
    productsLoading: true,
  });
  const getDataProducts = async (ProductForm) => {
    try {
      console.log("data ProductForm", ProductForm);
      const response = await axios.post(
        `${apiUrl}/khoqua/tonkho/thuebao?a=select`,
        {
          jsonData: ProductForm,
        }
      );
      console.log("trog na", response.data.data);
      if (response.data)
        dispatch({ type: "ADD_MST_SDT", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };
  const ProductContextData = {
    productState,
    getDataProducts,
  };
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
