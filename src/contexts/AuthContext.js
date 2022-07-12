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
      if (response.data.data) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          JSON.stringify(response.data.data)
        );

        dispatch({ type: "SET_AUTH", payload: response.data.data });
        console.log(response.data.data);
        return response.data.data;
      } else {
        console.log("khi đăng nhpaja thất bại", response.data);
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, null);
        return response.data;
      }
    } catch (error) {
      console.log(error);
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
