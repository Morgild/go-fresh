"use client";
import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  useEffect(() => {}, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContextContext);
