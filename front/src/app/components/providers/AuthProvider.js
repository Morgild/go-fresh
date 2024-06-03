"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(true);

  return (
    <AuthContext.Provider value={{ isReady, setIsReady }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
