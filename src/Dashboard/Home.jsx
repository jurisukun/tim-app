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
  const setopenmobilenav = useSetAtom(openMobileNav);
  const openaccount = useAtomValue(openAccount);
  const openclient = useAtomValue(openClient);
  const setopenaccount = useSetAtom(openAccount);
  const setopenclient = useSetAtom(openClient);

  return (
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
          <div className="flex items-center justify-center gap-3">
            <Menu placement="right-start">
              <MenuHandler>
                <Button className="flex text-center items-center w-[80px] mx-[4px]  bg-gray-800">
                  <FaUserPlus className="mx-2" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => setopenaccount(true)}>
                  Add Account
                </MenuItem>
                <MenuItem onClick={() => setopenclient(true)}>
                  Add Client
                </MenuItem>
              </MenuList>
            </Menu>
            <IoMenu
              className="font-bold text-3xl cursor-pointer lg:hidden flex "
              onClick={() => setopenmobilenav(true)}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
