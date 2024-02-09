import { useState, useEffect } from "react";
import LoginPage from "../LoginPage/loginPage";
import { ImSpinner3 } from "react-icons/im";

export default function CheckAuth({ children }) {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    fetch("http://localhost:35000/auth/verify", {
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

  if (status.loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center font-semibold text-lg text-red-700">
        <p className="flex flex-row items-center">
          Loading... <ImSpinner3 className="animate-spin" />
        </p>
      </div>
    );
  }

  if (status.error) {
    return <LoginPage />;
  }

  if (status.data) {
    return <>{children}</>;
  }
}
