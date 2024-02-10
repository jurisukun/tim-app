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

function SideBar() {
  const navigate = useNavigate();
  const goto = (e) => {
    navigate(`/user/${e.target.value}`);
  };
  return (
    <div className="w-[100%] h-[70px] bg-white p-4 lg:flex hidden justify-between b-shadow ">
      <div className="text-2xl flex items-center font-medium text-left protest-riot-regular">
        Dashboard
      </div>
      <div className="flex items-center justify-between ">
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
              <MenuItem value="itenerar">Itineraries</MenuItem>
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
              <MenuItem value="calendar">Event Calendar</MenuItem>
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
              <MenuItem value="https://calendar.google.com">Calendar</MenuItem>
              <MenuItem value="https://maps.google.com">Maps</MenuItem>
              <MenuItem value="https://mail.google.com">Gmail</MenuItem>
              <MenuItem value="https://drive.google.com">Dave</MenuItem>
              <MenuItem value="https://drive.google.com">FDJ Website</MenuItem>
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
          {/* <span>
            <RiLogoutBoxLine className="font-bold text-2xl text-black/60 cursor-pointer " />
          </span> */}
        </div>

      </div>
      
    </div>
  );
}

export default SideBar;
