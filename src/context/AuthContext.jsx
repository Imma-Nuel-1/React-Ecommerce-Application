import { createContext, useState } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../utils";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const data = getFromLocalStorage("userData");
  const [userData, setUserData] = useState(data || null);

  const logout = () => {
    setUserData(null);
    removeFromLocalStorage("userdata");
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
