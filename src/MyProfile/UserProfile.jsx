import { Avatar, Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useUser } from "../utils/context/useUser";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "../CheckAuth/CheckAuth";
import ErrorPage from "../Components/ErrorPage";

export default function UserProfile() {
  const { user } = useUser();

  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["user", user?.userId],
  //   queryFn: async () => {

  //     const response = await fetch(
  //       import.meta.env.VITE_API_URL + `/accounts/${user?.userId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   },
  // });

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  // if (isError) {
  //   return <ErrorPage />;
  // }
  // const { user } = data;

  return (
    <div className="w-full p-4 flex-1 h-full bg-gray-50">
      <Typography className="font-bold text-xl ">Profile</Typography>
      <main className="h-full w-full p-3 flex flex-col gap-3">
        <div className="flex w-full justify-between">
          <div className="flex flex-row items-center  h-auto gap-3 w-3/4">
            <Avatar
              color="blue"
              size="lg"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
            ></Avatar>
            <div className="flex flex-col gap-0 px-3">
              <Typography className="text-gray-800 font-semibold">
                {user?.firstname + " " + user?.lastname}
              </Typography>
              <Typography color="gray">{"@" + user?.username}</Typography>
            </div>
          </div>
          <div>
            <Button
              size="sm"
              variant="outlined"
              className=" px-4 py-2 rounded-md text-red-800 border-2 border-red-800"
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <div className=" flex flex-row border border-gray-400 rounded-md gap-2 w-full items-center justify-between p-3">
          <div className="flex flex-col gap-2   w-[40%] text-left">
            <Typography className="text-red-800 font-semibold text-sm">
              Email
            </Typography>
            <Typography className="text-gray-800 ">{user?.email}</Typography>
          </div>
          <div className="flex flex-col gap-2  w-[40%] text-left">
            <Typography className="text-red-800 font-semibold text-sm">
              Role
            </Typography>
            <Typography className="text-gray-800 ">{user?.role}</Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
