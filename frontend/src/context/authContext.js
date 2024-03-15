import { createContext} from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
 

  const decodeToken = (token) => {
    try {
      console.log("token", token);
      const decoded = jwtDecode(token);
      console.log("decode token", decoded);

      return decoded;
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  };

  const getUserRoles = () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decodedToken = decodeToken(token);
      return decodedToken ? decodedToken.roles : [];
    }
    return [];
  };

 

  return (
    <AuthContext.Provider value={{ getUserRoles }}>
      {children}
    </AuthContext.Provider>
  );
};
