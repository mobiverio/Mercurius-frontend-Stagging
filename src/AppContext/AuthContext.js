import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState({});

  //   const login = (user, token) => {
  //     setUser(user); // set user
  //     setToken(token); // set token
  //     localStorage.setItem("loggedInUser", JSON.stringify(user));
  //     localStorage.setItem("accessToken", token);
  //   };

  //   const logout = () => {
  //     setUser(null);
  //     setToken(null);
  //     localStorage.removeItem("loggedInUser");
  //     localStorage.removeItem("accessToken");
  //   };

  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
