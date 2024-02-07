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
function SideBar() {
  return (
    <div className="w-[100%] h-[70px] bg-white p-2 lg:flex hidden justify-between b-shadow">
      <div className="text-2xl flex items-center font-medium text-left protest-riot-regular">
        Dashboard
      </div>
      <div className="flex items-center justify-between ">
        <div className=" flex items-center">
          <Menu placement="bottom">
            <MenuHandler>
              <Button className=" text-left bg-red-900 mx-[10px]">
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

          <Menu placement="bottom">
            <MenuHandler>
              <Button className=" text-left  mx-[10px]  bg-red-900">
                Events
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Event Calendar</MenuItem>
              <MenuItem>Task Calendar</MenuItem>
            </MenuList>
          </Menu>

          <Menu placement="bottom">
            <MenuHandler>
              <Button className=" text-left  mx-[10px]  bg-red-900">
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
  );
}

export default SideBar;
