import SideBar from "../Components/SideBar";
import CheckAuth from "../CheckAuth/CheckAuth";
import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../Components/MobileSidebar";

import AddAccount from "../Components/Account/AddAccount";
import AddClient from "../Components/Account/AddClient";

import { useAtom } from "jotai";
import { openMobileNav, openClient, openAccount } from "../utils/jotai/atoms";
import { Typography } from "@material-tailwind/react";

function Home() {
  const [, setopenmobilenav] = useAtom(openMobileNav);
  const [openaccount] = useAtom(openAccount);
  const [openclient] = useAtom(openClient);

  return (
    // <CheckAuth>
    <div className="w-full h-screen items-center ">
      {openaccount && <AddAccount />}
      {openclient && <AddClient />}
      <MobileSidebar />
      <div className="flex flex-row">
        <SideBar />
        <div className="lg:hidden flex w-full bbb justify-between  items-center h-[60px] px-6">
          <Typography className="text-2xl flex items-center font-medium text-left protest-riot-regular flex-start">
            Dashboard
          </Typography>
          <IoMenu
            className="font-bold text-3xl cursor-pointer lg:hidden flex "
            onClick={() => setopenmobilenav(true)}
          />
        </div>
      </div>
      <Outlet />
    </div>
    // </CheckAuth>
  );
}

export default Home;
