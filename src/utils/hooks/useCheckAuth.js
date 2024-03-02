import { useState, useEffect } from "react";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { useUser } from "../context/useUser";

export const useCheckAuth = () => {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    data: null,
  });
  const [user, setUser] = useState({ isAdmin: null, role: null });
  const usr = useUser();

  useEffect(() => {
    customfetch(import.meta.env.VITE_API_URL + "/auth/verify", "POST")
      .then((res) => {
        if (!res?.refreshToken && !res?.token) {
          setStatus({ loading: false, error: true, data: null });
          return;
        }
        setStatus({ loading: false, error: false, data: res });

        const { isAdmin, role, userId } = res;
        setUser({ isAdmin, role, userId });

        usr.setUser({ isAdmin, role, userId });
      })
      .catch((err) => setStatus({ loading: false, error: true, data: err }));
  }, []);

  return { status, user };
};
