import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useCheckAuth } from "../utils/hooks/useCheckAuth";
import { LoadingScreen } from "../CheckAuth/CheckAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ImSpinner3 } from "react-icons/im";

export function LoginCheck() {
  const { loading, error, data } = useCheckAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <LoginPage />;
  }
  if (data) {
    window.location.replace("/dashboard");
  }
}

function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (
      !username ||
      !password ||
      !username.replace(/\s/g, "") ||
      !password.replace(/\s/g, "")
    ) {
      toast.error("Please fill in all fields");
      // window.location.reload();
    } else {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          if (!data?.token) {
            toast.error("Invalid username or password");
          }
          if (data.token) {
            localStorage.setItem("token", data.token);
            toast.success("Login successful");
            setTimeout(() => {
              window.location.replace("/dashboard");
            }, 2000);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error?.message);
        });
    }
  };

  return (
    <div className=" w-full h-screen bg-white flex justify-center items-center ">
      <Card color="transparent" shadow={false} className="shadoww p-4 lg:p-6">
        <Typography
          variant="h4"
          color="blue-gray"
          className=" text-3xl mb-3 protest-riot-regular text-center"
        >
          Funeral System
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Log in to continue your account
        </Typography>
        <form className="mt-[30px] mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
          <Button
            className="mt-6 bg-red-900 flex items-center justify-center gap-3"
            fullWidth
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            Log In {isLoading ? <ImSpinner3 className="animate-spin" /> : ""}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
