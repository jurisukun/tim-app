import { createContext, useState } from "react";
import CheckAuth from "../../CheckAuth/CheckAuth";
import SocketProvider from "./Socketcontext";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAdmin: null, role: null, userId: null });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <CheckAuth>
        <SocketProvider>{children}</SocketProvider>
      </CheckAuth>
    </AuthContext.Provider>
  );
};
