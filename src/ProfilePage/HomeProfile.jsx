import Sidebar from "../Components/Profile/SidebarProfile";
import Navbar from "../Components/Profile/Navbar";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { customfetch } from "../lib/fetchhandler/requestHandler";
import { LoadingScreen } from "../CheckAuth/CheckAuth";
import ErrorPage from "../Components/ErrorPage";

import { openClient, sideBarProfileData } from "../utils/jotai/atoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import AddClient from "../Components/Account/AddClient";
import { useEffect } from "react";

function HomeProfile() {
  const { clientId } = useParams();
  const openclient = useAtomValue(openClient);
  const setsidebarprofiledata = useSetAtom(sideBarProfileData);

  // useEffect(() => {
  //   return () => {
  //     setsidebarprofiledata(RESET);
  //   };
  // }, []);

  if (!clientId) return (window.location.href = "/dashboard/client");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["clientprofile", clientId],
    queryFn: async () => {
      const result = await customfetch(
        `http://localhost:3000/clients/${clientId}`,
        "GET"
      );

      return result?.client;
    },
  });

  if (isLoading) return <LoadingScreen />;

  if (isError) return <ErrorPage />;

  if (data) {
    setsidebarprofiledata(data);
  }

  return (
    <div className="flex h-[100vh] overflow-hidden relative">
      {openclient && <AddClient />}
      <Sidebar />

      <div className="w-full ">
        <div className="w-[100%] h-auto relative">
          <Navbar />
        </div>
        <main className="height-e ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HomeProfile;
