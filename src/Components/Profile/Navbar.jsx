import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "Funeral Details", link: "/funeral-details" },
  { name: "Daily Tracker", link: "/daily-tracker" },
  { name: "Email", link: "/email" },
  { name: "Tasks", link: "/tasks" },
  { name: "Forms", link: "/forms" },
  { name: "Billing", link: "/billing" },
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-[80px]">
      {/* lg:absolute lg:-top-16 lg:right-0 */}
      <div className="w-full bbb hidden lg:block  h-[80px]  hover:top-0 transition-all z-50 bg-white">
        <div className="h-full lg:flex flex-row items-center justify-evenly ">
          {menu.map((item, index) => (
            <Button
              key={index}
              className="bg-red-800"
              onClick={() => navigate(`/client/:id/profile${item.link}`)}
            >
              {item.name}
            </Button>
          ))}
          {/* <Button className="bg-red-800">Funeral Detail</Button>
          <Button className="bg-red-800">Daily Tracker</Button>
          <Button className="bg-red-800">Email</Button>
          <Button className="bg-red-800">Tasks</Button>
          <Button className="bg-red-800">Forms</Button>
          <Button className="bg-red-800">Billing</Button> */}
        </div>
      </div>
      <div className="w-full bbb lg:hidden block h-[80px]">
        <div className="m-5 protest-riot-regular md:text-3xl text-2xl">
          Funeral System
        </div>
        <div className="flex absolute top-3 right-20 items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
