import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
};
