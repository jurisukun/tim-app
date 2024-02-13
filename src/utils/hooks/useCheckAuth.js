import { useState, useEffect } from "react";
import { customfetch } from "../../lib/fetchhandler/requestHandler";

export const useCheckAuth = () => {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    customfetch(import.meta.env.VITE_API_URL + "/auth/verify", "POST")
      .then((res) => {
        if (!res?.refreshToken && !res?.token) {
          setStatus({ loading: false, error: true, data: null });
          return;
        }

        // localStorage.setItem("token", res?.refreshToken ?? res?.token);
        setStatus({ loading: false, error: false, data: res });
      })
      .catch((err) => setStatus({ loading: false, error: true, data: err }));
  }, []);

  return status;
};
