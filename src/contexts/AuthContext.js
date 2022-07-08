import axios from "axios";
import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { apiUrl_Login, LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    Users: [],
    user: "",
    authLoading: true,
  });
  const checkAuth = async (userForm) => {
    try {
      const response = await axios.post(
        `${apiUrl_Login}/khoqua/tonkho/kiemtrathuebao?a=select`,
        {
          jsonData: userForm,
        }
      );
      if (response.data)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          JSON.stringify(response.data.data)
        );
      let token_user = response.data.data.pResultThueBao[0].id_tb;
      console.log("token_user", token_user);

      dispatch({ type: "SET_AUTH", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: "Server Error" };
    }
  };
  const logoutUser = (props) => {
    console.log(props);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
  };
  const authContextData = { authState, checkAuth, logoutUser };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
