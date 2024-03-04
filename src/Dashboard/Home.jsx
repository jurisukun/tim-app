import SideBar from "../Components/SideBar";

import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../Components/MobileSidebar";

import AddAccount from "../Components/Account/AddAccount";
import AddClient from "../Components/Account/AddClient";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { openMobileNav, openClient, openAccount } from "../utils/jotai/atoms";
import { Typography } from "@material-tailwind/react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaUserPlus } from "react-icons/fa6";
import { useUser } from "../utils/context/useUser";

function Home() {
  const openaccount = useAtomValue(openAccount);
  const openclient = useAtomValue(openClient);

  const { user } = useUser();

  return (
    <div className="w-full h-screen items-center ">
      {openaccount && user?.isAdmin && <AddAccount />}
      {openclient && <AddClient />}
      <MobileSidebar />
      <div className="flex flex-row">
        <SideBar />
        <div className="lg:hidden flex w-full bbb justify-between  items-center h-[60px] px-4"></div>
      </div>
      <div className="h-full ">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
