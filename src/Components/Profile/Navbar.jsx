import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import { useNavigate, NavLink } from "react-router-dom";

import { useAtom } from "jotai";
import { openSidebar } from "../../utils/jotai/atoms";
import React from "react";

const menu = [
  { name: "Daily Tracker", link: "/daily-tracker" },
  { name: "Email", link: "/email" },
  { name: "Tasks", link: "/tasks" },
  { name: "Forms", link: "/forms" },
  { name: "Billing", link: "/billing" },
];

function Navbar() {
  const navigate = useNavigate();
  const [, opensidebar] = useAtom(openSidebar);

  return (
    <div className="flex items-center h-[80px]">
      {/* lg:absolute lg:-top-16 lg:right-0 */}
      <div className="w-full bbb hidden lg:block  h-[80px]  hover:top-0 transition-all z-40 bg-white">
        <div className="h-full lg:flex flex-row items-center justify-evenly ">
          <Button className="bg-red-800">Funeral Details</Button>
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink
                key={index}
                to={`/client/:id/profile${item.link}`}
                className={({ isActive, isPending }) =>
                  `uppercase w-auto text-sm underline-offset-8 transition-[underline]  ${
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-red-900 font-bold underline "
                      : "text-gray-800  text-sm  hover:underline  hover:font-semibold transition-all"
                  }`
                }
              >
                {item.name}
              </NavLink>

              {/* <Typography
                key={index}
                className="bg-red-800"
                onClick={() => navigate(`/client/:id/profile${item.link}`)}
              >
                {item.name}
              </Typography> */}
            </React.Fragment>
          ))}
          {/* <Button className="bg-red-800">Funeral Detail</Button>
          <Button className="bg-red-800">Daily Tracker</Button>
          <Button className="bg-red-800">Email</Button>
          <Button className="bg-red-800">Tasks</Button>
          <Button className="bg-red-800">Forms</Button>
          <Button className="bg-red-800">Billing</Button> */}
        </div>
      </div>
      <div className="w-full bbb lg:hidden  h-[80px] flex  items-center">
        <div className="m-5 protest-riot-regular md:text-3xl text-2xl">
          Funeral System
        </div>
        <div className="flex absolute top-3 right-20 items-center justify-center gap-6">
          <Menu placement="left-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              {menu.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => navigate(`/client/:id/profile${item.link}`)}
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
