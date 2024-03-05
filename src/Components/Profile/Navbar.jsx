import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import { useNavigate, NavLink, useParams } from "react-router-dom";

import { useSetAtom } from "jotai";
import { openSidebar, openClient } from "../../utils/jotai/atoms";
import logo from "../../../public/pngegg.png";

import React from "react";

const menu = [
  { name: "Daily Tracker", link: "dailytracker" },
  { name: "Email", link: "email" },
  { name: "Tasks", link: "tasks" },
  { name: "Forms", link: "forms" },
  { name: "Billing", link: "billing" },
];

export const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={() => navigate("/")}
    >
      <img src={logo} alt="logo" width={45} height={45} />
      <div className=" protest-riot-regular md:text-2xl text-xl text-nowrap hidden sm:block">
        Funeral System
      </div>
    </div>
  );
};

function Navbar() {
  const navigate = useNavigate();

  const opensidebar = useSetAtom(openSidebar);
  const openclient = useSetAtom(openClient);
  const { clientId } = useParams();

  return (
    <div className="flex items-center h-[80px]">
      <div className="w-full md:bbb hidden lg:block  h-[80px]  hover:top-0 transition-all z-40 bg-white">
        <div className="h-full lg:flex flex-row items-center justify-evenly ">
          <Button
            className="bg-red-800"
            onClick={() => openclient(true)}
            size="sm"
          >
            Funeral Details
          </Button>
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink
                key={index}
                to={`/client/${clientId}/profile/${item.link}`}
                className={({ isActive }) =>
                  `uppercase  text-sm underline-offset-8 transition-[underline] w-auto text-center ${
                    isActive
                      ? "text-red-900 font-bold underline "
                      : "text-gray-800  text-sm  hover:underline  hover:font-semibold hover:text-red-700 transition-all"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full bbb lg:hidden  sm:h-[80px] flex p-2 justify-between items-center gap-2">
        <HeaderLogo />

        <div className="w-full flex top-3 justify-self-end items-center justify-end  gap-3 px-4">
          <div className="flex flex-col sm:flex-row  gap-2 items-center justify-self-end">
            <Button
              size="sm"
              className="bg-red-800 line-clamp-1 "
              onClick={() => openclient(true)}
            >
              Funeral Details
            </Button>
            <Menu placement="bottom">
              <MenuHandler>
                <Typography className="w-full text-center sm:w-auto font-semibold text-gray-900 cursor-pointer hover:underline transition-all hover:shadow-md sm:py-2 px-6 rounded-md hover:text-red-800">
                  Menu
                </Typography>
              </MenuHandler>
              <MenuList>
                {menu.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() =>
                      navigate(`/client/${clientId}/profile/${item.link}`)
                    }
                  >
                    {item.name}
                  </MenuItem>
                ))}
                {/* <MenuItem>Funeral Details</MenuItem>
              <MenuItem>Daily Tracker</MenuItem>
              <MenuItem>Email</MenuItem>
              <MenuItem>Tasks</MenuItem>
              <MenuItem>Forms</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              </MenuList>
            </Menu>
          </div>
          <div className="flex justify-center items-center">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className=" cursor-pointer"
              onClick={() => opensidebar(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
