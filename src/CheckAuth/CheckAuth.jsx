import LoginPage from "../LoginPage/loginPage";
import { ImSpinner3 } from "react-icons/im";
import { useCheckAuth } from "../utils/hooks/useCheckAuth";

export function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-semibold text-lg text-red-700">
      <p className="flex flex-row items-center text-sm">
        Loading... <ImSpinner3 className="animate-spin" />
      </p>
    </div>
  );
}
export default function CheckAuth({ children }) {
  const { loading, error, data } = useCheckAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <LoginPage />;
  }

  if (data) {
    return <>{children}</>;
  }
}
