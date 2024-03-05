import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Popover,
  PopoverHandler,
  List,
  ListItem,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  PopoverContent,
} from "@material-tailwind/react";

import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useSetAtom } from "jotai";
import { openClient, openAccount, openMobileNav } from "../utils/jotai/atoms";
import { MenuRender, funeral, links, calendar } from "./MobileSidebar";
import { useUser } from "../utils/context/useUser";
import { HeaderLogo } from "./Profile/Navbar";

import { IoMenu } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { socket } from "../utils/context/Socketcontext";

import { useQuery } from "@tanstack/react-query";

export const logout = (navigate) => {
  localStorage.removeItem("token");
  socket.disconnect();
  navigate("/login");
};

export const UserAvatar = ({ user, position }) => {
  const navigate = useNavigate();
  return (
    <Menu placement={position}>
      <MenuHandler>
        <div className="flex items-center gap-3 justify-center cursor-pointer hover:shadow-xl w-full p-2 rounded-md border-2 hover:border-red-800 transition-all">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="w-[35px] h-[35px]"
          />
          <h1 className="text-sm font-semibold text-black/80">
            {user?.firstname + " " + user?.lastname}
          </h1>
        </div>
      </MenuHandler>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={() => logout(navigate)}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

const notification = [
  {
    label: "Message",
    value: "message",
    icon: <IoMdNotificationsOutline />,
    data: ["Message 1", "Message 2", "Message 3"],
  },
  {
    label: "Email",
    value: "email",
    icon: <IoMdNotificationsOutline />,
    data: ["Email 1", "Email 2", "Email 3"],
  },
  {
    label: "Tasks",
    value: "task",
    icon: <IoMdNotificationsOutline />,
    data: ["Task 1", "Task 2", "Task 3", "Task 4"],
  },
];

function Notification() {
  const { user } = useUser();
  const { isLoading, error, data } = useQuery({
    queryKey: ["notifications", user?.userId],
    queryFn: async () => {
      console.log("fetching notifications");
      const res = await fetch(
        `http://localhost:3000/notifications/${user?.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.json();
    },
  });

  console.log(data);

  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <div>
          <IoMdNotificationsOutline className=" text-3xl " />
          <p className="absolute top-0 -right-2 aspect-square w-[25px] h-[25px] rounded-full bg-red-800 text-white text-center text-xs p-1">
            {isLoading ? " " : data?.notifications?.length ?? 0}
          </p>
        </div>
      </PopoverHandler>
      <PopoverContent className="z-40 max-h-[250px] w-[300px] p-1">
        <Tabs value={"message"}>
          <TabsHeader className="text-sm sticky top-0">
            {notification.map((item) => (
              <Tab
                className="text-sm"
                activeClassName="text-red-800 font-semibold"
                key={item.value}
                value={item?.value}
                label={item.label}
                icon={item.icon}
              >
                {item?.label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {notification.map((item) => (
              <TabPanel key={item.value} value={item.value}>
                <List className="h-[150px] overflow-y-scroll">
                  {item.data.map((data) => (
                    <ListItem className="text-xs" key={data}>
                      {data}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}

function SideBar() {
  const setopenmobilenav = useSetAtom(openMobileNav);
  const setopenaccount = useSetAtom(openAccount);
  const setopenclient = useSetAtom(openClient);
  const { user } = useUser();

  return (
    <div className="flex h-[70px] transition-transform w-full absolute top-0 left-0   lg:max-w-full p-4 lg:static lg:flex-row b-shadow z-40 lg:w-[100%]  bg-white lg:p-4 lg:flex  justify-between b-shadow ">
      <div className="flex items-center justify-center gap-8">
        <HeaderLogo />
        <div className="flex relative  aspect-square rounded-full p-2 cursor-pointer">
          <Notification />
        </div>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between h-full">
        <div className="hidden md:flex h-full  flex-col lg:flex-row justify-between py-4">
          <div className=" flex flex-row items-center ">
            <MenuRender data={funeral} title="Funeral" position="bottom" />
            <MenuRender data={calendar} title="Calendar" position="bottom" />
            <MenuRender data={links} title="Links" position="bottom" />

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
            <UserAvatar user={user} position={"bottom"} />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-center gap-3">
        <Menu placement="right-start">
          <MenuHandler>
            <Button className="flex text-center items-center w-[80px] mx-[4px] hover:scale-105 hover:bg-red-800  bg-gray-800">
              <FaUserPlus className="mx-2 " />
            </Button>
          </MenuHandler>
          <MenuList>
            {user?.isAdmin && (
              <MenuItem onClick={() => setopenaccount(true)}>
                Add Account
              </MenuItem>
            )}
            <MenuItem onClick={() => setopenclient(true)}>Add Client</MenuItem>
          </MenuList>
        </Menu>
        <IoMenu
          className="font-bold text-3xl cursor-pointer lg:hidden flex "
          onClick={() => setopenmobilenav(true)}
        />
      </div>
    </div>
  );
}

export default SideBar;
