import axios from "axios";
import { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { apiUrl_Login, Token_Location } from "./constant";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, {
    product: [],
    productLoading: true,
    checkProduct: "",
  });
  const checkInventory = async (dataProdcut) => {
    try {
      const response = await axios.post(
        `${apiUrl_Login}/khoqua/tonkho?a=select`,
        {
          jsonData: dataProdcut,
        },
        {
          headers: {
            Authorization: Token_Location,
          },
        }
      );
      if (response.data)
        dispatch({ type: "PRODUCT_LOAD_SCUSESS", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error) console.log(error);
      else return { success: false, message: "Server Error" };
    }
  };
  const receivingGift = async (dataGift) => {
    try {
      const response = await axios.post(
        `${apiUrl_Login}/khoqua/tonkho/giuqua?a=select`,
        {
          jsonData: dataGift,
        },
        {
          headers: {
            Authorization: Token_Location,
          },
        }
      );
      if (response.data) {
        console.log("data gift context", response.data);
        dispatch({
          type: "CHECK_PRODUCT_LOAD_SCUSESS",
          payload: response.data,
        });
      } else {
        dispatch({
          type: "CHECK_PRODUCT_LOAD_FAIL",
        });
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const ProductContextData = {
    productState,
    checkInventory,
    receivingGift,
  };
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
