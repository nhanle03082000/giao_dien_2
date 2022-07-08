import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import { apiUrl, Token_Location } from "./constant";
import { locationReducer } from "../reducers/locationReducer";
export const LocationContext = createContext();
const LocationContextProvider = ({ children }) => {
  const [Location, dispatch] = useReducer(locationReducer, {
    maTinh: [],
    maHuyen: [],
    dataShop: [],
    maTinhLoading: true,
  });
  const getDataLocation = async (maSoTinh) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/tinh?a=select`,
        {
          jsonData: maSoTinh,
        },
        {
          headers: {
            Authorization: Token_Location,
          },
        }
      );
      if (response.data)
        dispatch({ type: "ADD_MST_SDT", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };

  const getMaQuan = async (maSoHuyen) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/huyen?a=select`,
        {
          jsonData: maSoHuyen,
        },
        {
          headers: {
            Authorization: Token_Location,
          },
        }
      );
      if (response.data)
        dispatch({ type: "ADD_MS_HUYEN", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };

  const GetShopLocation = async (dataShopLoacation) => {
    try {
      const response = await axios.post(
        `${apiUrl}/danhmuc/cuahang?a=select`,
        {
          jsonData: dataShopLoacation,
        },
        {
          headers: {
            Authorization: Token_Location,
          },
        }
      );
      if (response.data)
        dispatch({
          type: "ADD_DATA_SHOP_LOCATION",
          payload: response.data.data,
        });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };

  const LocationContextData = {
    Location,
    getDataLocation,
    getMaQuan,
    GetShopLocation,
  };
  return (
    <LocationContext.Provider value={LocationContextData}>
      {children}
    </LocationContext.Provider>
  );
};
export default LocationContextProvider;
