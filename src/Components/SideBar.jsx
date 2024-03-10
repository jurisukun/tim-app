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
import { format } from "date-fns";
import { customfetch } from "../lib/fetchhandler/requestHandler";
import { toast } from "react-toastify";

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
        <div className="flex items-center gap-3 justify-center cursor-pointer hover:shadow-xl w-full p-2 rounded-md border-2 border-white hover:border-red-800 transition-all">
          <Avatar
            src="https://walnuteducation.com/static/core/images/icon-profile.png"
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

function Notification() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { isLoading, error, data } = useQuery({
    queryKey: ["notifications", user?.userId],
    queryFn: async () => {
      console.log("fetching notifications");
      const res = await fetch(
        import.meta.env.VITE_API_URL + `/notifications/${user?.userId}`,

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
  const messagenotif = [];
  const emailnotif = [];
  const tasknotif = [];
  let count = 0;

  if (data) {
    data.notifications.map((item) => {
      if (!item?.seen) {
        count += 1;
      }
      if (item.type === "message") {
        messagenotif.push(item);
      }
      if (item.type === "email") {
        emailnotif.push(item);
      }
      if (item.type === "task") {
        tasknotif.push(item);
      }
    });
  }
  const notification = [
    { label: "Message", value: "message", data: messagenotif },
    { label: "Email", value: "email", data: emailnotif },
    { label: "Tasks", value: "task", data: tasknotif },
  ];

  const gotoNotif = async (notif) => {
    const notifseen = await customfetch(
      import.meta.env.VITE_API_URL + `/notifications/updateseen/${notif?.id}`,
      "PUT"
    );
    console.log(notifseen);
    if (notifseen.error) {
      toast.error("Noitification error");
      return;
    }
    if (notif?.type === "task") {
      navigate(
        `/client/${notif?.client_id}/profile/tasks?id=${notif?.item_id}`
      );
    }
    if (notif?.type === "email") {
      navigate(`/client/${notif?.client_id}/profile/email`);
    }
  };

  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <div>
          <IoMdNotificationsOutline className=" text-3xl " />
          {count > 0 && (
            <p className="absolute top-0 -right-2 aspect-square w-[25px] h-[25px] rounded-full bg-red-800 text-white text-center text-xs p-1">
              {count}
            </p>
          )}
        </div>
      </PopoverHandler>
      <PopoverContent className="z-40 max-h-[250px] w-[300px] p-1">
        {isLoading && <p>Loading...</p>}
        {data && (
          <Tabs value={"message"}>
            <TabsHeader className="text-sm sticky top-0">
              {notification.map((item) => (
                <Tab
                  className="text-sm"
                  activeClassName="text-red-800 font-semibold"
                  key={item.value}
                  value={item?.value}
                  label={item.label}
                >
                  {item?.label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {notification.map((item) => (
                <TabPanel className="p-0" key={item.value} value={item.value}>
                  <ul className="h-[150px] overflow-y-scroll gap-0 p-2">
                    {item.data.map((data) => (
                      <li
                        className="w-full"
                        key={data?.id}
                        onClick={() => {
                          gotoNotif(data);
                        }}
                      >
                        <div
                          className={`w-full  flex justify-between items-center ${
                            data?.seen ? "bg-gray-100" : "bg-red-50"
                          } p-2 rounded-md cursor-pointer hover:border-gray-300 border-[3px] border-white transition-all`}
                        >
                          <p
                            className={`text-sm ${
                              !data?.seen ? "text-red-800 font-semibold" : ""
                            }`}
                          >
                            {data?.messaage ?? "New Task"}
                          </p>
                          <p className="text-xs scale-75">
                            {format(data?.updatedAt, "MMM dd, yyyy")}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
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
      <div className="flex items-center justify-center gap-4">
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
                  className="flex hover:scale-105  hover:bg-gray-700  mx-[6px] w-full lg:w-[100px]  bg-red-800  text-center items-center justify-center gap-2"
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
            <Button className="flex text-center items-center w-[80px] mx-[4px] hover:scale-105 bg-red-800  hover:bg-gray-800">
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
