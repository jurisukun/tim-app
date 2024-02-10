import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import MobileSidebar from "./MobileSidebar";

import { useState } from "react";

function SideBar() {
  const navigate = useNavigate();
  const goto = (e) => {
    navigate(`/dashboard/${e.target.value}`);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:h-[70px] w-full flex flex-row items-center justify-end b-shadow">
        <div className=" w-[60%] sm:w-[100%] md:h-[70px] lg:flex md:bg-white md:p-4  hidden  md:justify-between b-shadow ">
          <div className="text-2xl flex items-center font-medium text-left protest-riot-regular">
            Dashboard
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row ">
            <div className=" flex items-center">
              <Menu placement="bottom" FaUserPlus>
                <MenuHandler>
                  <Button className=" text-left bg-red-900 mx-[10px]">
                    Funeral
                  </Button>
                </MenuHandler>
                <MenuList onClick={(e) => goto(e)}>
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="contracts">Contracts</MenuItem>
                  <MenuItem value="itinerary">Itineraries</MenuItem>
                  <MenuItem value="daily">Daily Tracker</MenuItem>
                </MenuList>
              </Menu>

              <Menu placement="bottom">
                <MenuHandler>
                  <Button className=" text-left  mx-[10px]  bg-red-900">
                    Events
                  </Button>
                </MenuHandler>
                <MenuList onClick={(e) => goto(e)}>
                  <MenuItem value="event">Event Calendar</MenuItem>
                  <MenuItem value="task">Task Calendar</MenuItem>
                </MenuList>
              </Menu>

              <Menu placement="bottom">
                <MenuHandler>
                  <Button className=" text-left  mx-[10px]  bg-red-900">
                    Links
                  </Button>
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
              </Menu>

              <Menu placement="bottom">
                <MenuHandler>
                  <Button className="flex  text-left bg-gray-700  mx-[6px]">
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
            <div className="flex items-center px-4 gap-2">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                className="w-[35px] h-[35px]"
              />
              <h1 className="text-sm font-semibold text-black/80">Username</h1>
              <span>
                <RiLogoutBoxLine className="font-bold text-2xl text-black/60 cursor-pointer " />
              </span>
            </div>
          </div>
        </div>

        <div className="lg:hidden  md:h-[70px]  aspect-square w-14 items-center flex self-end justify-center">
          {!isOpen && (
            <IoMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default SideBar;
