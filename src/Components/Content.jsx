import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import MainContainer from "./MainContainer";
import AddClient from "./Account/AddClient";
function Content() {
  const [isDashboardVisible, setDashboardVisible] = useState(false);

  const showDashboard = () => {
    setDashboardVisible(true);
  };

  const hideDashboard = () => {
    setDashboardVisible(false);
  };

  return (
    <div className="w-full h-screen relative p-4">
      <div className="absolute top-0 right-0 justify-end p-3">
        <IoMenu
          className="font-bold text-4xl cursor-pointer lg:hidden block"
          onClick={showDashboard}
        />
      </div>
      {isDashboardVisible && (
        <div className="w-[60%] md:w-[40%] absolute top-0 left-0 h-screen bg-white p-2 lg:hidden block b-shadow z-10 ">
          <div className="mt-[10px] text-2xl font-medium text-left protest-riot-regular flex items-center justify-between">
            Dashboard
            <IoMdClose
              className="font-bold text-3xl cursor-pointer lg:hidden block"
              onClick={hideDashboard}
            />
          </div>

          <div className=" flex-col items-center justify-between h-[90%]">
            <Menu placement="right-start">
              <MenuHandler>
                <Button className=" text-left bg-red-900 mx-[4px] w-[70%] mt-[30px]">
                  Funeral
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Client</MenuItem>
                <MenuItem>Contracts</MenuItem>
                <MenuItem>Itineraries</MenuItem>
                <MenuItem>Daily Tracker</MenuItem>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <Button className=" text-left  mx-[4px] mt-[10px] w-[70%] bg-red-900">
                  Events
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Event Calendar</MenuItem>
                <MenuItem>Task Calendar</MenuItem>
              </MenuList>
            </Menu>

            <Menu placement="right-start">
              <MenuHandler>
                <Button className=" text-left  mx-[4px] mt-[10px] w-[70%] bg-red-900">
                  Links
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Drive</MenuItem>
                <MenuItem>Calendar</MenuItem>
                <MenuItem>Maps</MenuItem>
                <MenuItem>Gmail</MenuItem>
                <MenuItem>Dave</MenuItem>
                <MenuItem>FDJ Website</MenuItem>
                <MenuItem>Canva</MenuItem>
                <MenuItem>Youtube</MenuItem>
                <MenuItem>Casket Orders</MenuItem>
                <MenuItem>E-Vital</MenuItem>
                <MenuItem>Call FWD</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="right-start">
              <MenuHandler>
                <Button className="flex text-left items-center  mx-[4px] mt-[10px] w-[70%] bg-gray-800">
                  Account
                  <FaUserPlus className="mx-2" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem> Add Account</MenuItem>
                <MenuItem>Add Client</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex h-[20px] items-center justify-between px-4 gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className="w-[35px] h-[35px]"
            />
            <h1 className="text-[20px] font-semibold text-black/80">
              Username
            </h1>
            <span>
              <RiLogoutBoxLine className="font-bold text-2xl text-black/60 cursor-pointer " />
            </span>
          </div>
        </div>
      )}
      <main className="w-full">
        <MainContainer />
        {/* <AddClient /> */}
      </main>
    </div>
  );
}

export default Content;
