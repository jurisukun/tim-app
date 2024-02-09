import { useState, useEffect } from "react";

export const useCheckAuth = () => {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    })
      .then((res) => {
        if (res.status !== 200) {
          setStatus({ loading: false, error: true, data: null });
          return;
        }
        res.json(setStatus({ loading: false, error: false, data: res }));
      })
      .catch((err) => setStatus({ loading: false, error: true, data: err }));
  }, []);

  return status;
};
