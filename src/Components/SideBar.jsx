import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useCheckAuth } from "../utils/hooks/useCheckAuth";

import { FaPlus, FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useSetAtom } from "jotai";
import { openClient, openAccount } from "../utils/jotai/atoms";
import { MenuRender, funeral, links, calendar } from "./MobileSidebar";

function SideBar() {
  const setopenaccount = useSetAtom(openAccount);
  const setopenclient = useSetAtom(openClient);

  const { user } = useCheckAuth();

  const navigate = useNavigate();
  const goto = (e) => {
    navigate(`/dashboard/${e.target.value}`);
  };
  return (
    <div className="hidden transition-transform w-[275px]  absolute top-0 left-0 h-screen  lg:max-w-full p-2 lg:static lg:flex-row b-shadow z-40 lg:w-[100%] lg:h-[70px] bg-white lg:p-4 lg:flex  justify-between b-shadow ">
      <div className="text-2xl flex items-center font-medium text-left protest-riot-regular">
        Dashboard
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full">
        <div className="h-full flex flex-col lg:flex-row justify-between py-4">
          <div className=" flex flex-col lg:flex-row items-center ">
            <MenuRender data={funeral} title="Funeral" position="bottom" />
            <MenuRender data={calendar} title="Calendar" position="bottom" />
            <MenuRender data={links} title="Links" position="bottom" />
            {/* <Menu placement="bottom">
              <MenuHandler>
                <Typography className="cursor-pointer  uppercase font-bold text-xs  hover:underline  hover:text-red-800 transition-all border-0 bg-transparent text-gray-900 mx-[10px] shadow-none w-full lg:w-[80px] text-center">
                  Funeral
                </Typography>
              </MenuHandler>
              <MenuList onClick={(e) => goto(e)}>
                <MenuItem value="client">Client</MenuItem>
                <MenuItem value="contracts">Contracts</MenuItem>
                <MenuItem value="itenerary">Itineraries</MenuItem>
                <MenuItem value="daily">Daily Tracker</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom">
              <MenuHandler>
                <Typography className="cursor-pointer  uppercase font-bold text-xs  hover:underline  hover:text-red-800 transition-all border-0 bg-transparent text-gray-900 mx-[10px] shadow-none w-full lg:w-[80px] text-center">
                  Calendar
                </Typography>
              </MenuHandler>
              <MenuList onClick={(e) => goto(e)}>
                <MenuItem value="calendar">Event Calendar</MenuItem>
                <MenuItem value="task">Task Calendar</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom">
              <MenuHandler>
                <Typography className="cursor-pointer  uppercase font-bold text-xs  hover:underline  hover:text-red-800  transition-all border-0 bg-transparent text-gray-900 mx-[10px] shadow-none w-full lg:w-[80px] text-center">
                  Links
                </Typography>
              </MenuHandler>
              <MenuList>
                <MenuItem value="https://drive.google.com">Drive</MenuItem>
                <MenuItem value="https://calendar.google.com">
                  Calendar
                </MenuItem>
                <MenuItem value="https://maps.google.com">Maps</MenuItem>
                <MenuItem value="https://mail.google.com">Gmail</MenuItem>
                <MenuItem value="https://drive.google.com">Dave</MenuItem>
                <MenuItem value="https://drive.google.com">
                  FDJ Website
                </MenuItem>
                <MenuItem value="https://canva.com">Canva</MenuItem>
                <MenuItem value="https://youtube.com">Youtube</MenuItem>
                <MenuItem value="https://drive.google.com">
                  Casket Orders
                </MenuItem>
                <MenuItem value="https://drive.google.com">E-Vital</MenuItem>
                <MenuItem value="https://drive.google.com">Call FWD</MenuItem>
              </MenuList>
  </Menu>*/}
            <Menu placement="bottom">
              <MenuHandler>
                <Button
                  size="sm"
                  className="flex hover:scale-105  bg-gray-700  mx-[6px] w-full lg:w-[100px]  hover:bg-red-800  text-center items-center justify-center gap-2"
                >
                  ADD <FaUserPlus className="" />
                </Button>
              </MenuHandler>
              <MenuList>
                {user?.isAdmin && (
                  <MenuItem
                    onClick={() => {
                      console.log("open account");
                      setopenaccount(true);
                    }}
                  >
                    Add Account
                  </MenuItem>
                )}
                <MenuItem onClick={() => setopenclient(true)}>
                  Add Client
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex items-center px-4 gap-2">
            <Menu placement="bottom">
              <MenuHandler>
                <div className="flex items-center gap-3 justify-center">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    className="w-[35px] h-[35px]"
                  />
                  <h1 className="text-sm font-semibold text-black/80">
                    Username
                  </h1>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>

            {/* <span>
            <RiLogoutBoxLine className="font-bold text-2xl text-black/60 cursor-pointer " />
          </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
