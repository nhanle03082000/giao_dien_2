import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import { apiUrl } from "./constant";
import { productReducer } from "../reducers/productReducer";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, {
    products: [],
    productsLoading: true,
  });
  const getProductsByPisdn = async (productForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/khoqua/tonkho/thuebao?a=select`,
        productForm
      );
      console.log("data", response.data);
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };
  const ProductContextData = { productState, getProductsByPisdn };
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
