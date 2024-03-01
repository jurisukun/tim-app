import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

import { useAtom } from "jotai";
import { openMobileNav, openAccount, openClient } from "../utils/jotai/atoms";
import { useNavigate } from "react-router-dom";

export function MenuRender({ data, title, position }) {
  const navigate = useNavigate();

  const goto = (e) => {
    if (data[e?.index]?.link) {
      window.open(data[e.index].link, "_blank");
    } else navigate(`/dashboard/${e.value}`);
  };

  return (
    <Menu placement={position}>
      <MenuHandler>
        <Button
          tabIndex={-1}
          className="hover:underline border-0  hover:text-red-800 text-left  mx-[4px]   bg-transparent text-gray-900 shadow-none hover:shadow-none"
        >
          {title}
        </Button>
      </MenuHandler>
      <MenuList>
        {data?.map((item, index) => (
          <MenuItem
            onClick={(e) => {
              goto({ value: item.value, index });
            }}
            key={index}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export const funeral = [
  { label: "Client", value: "client" },
  { label: "Contracts", value: "contract" },
  { label: "Itineraries", value: "itinerary" },
  { label: "Daily Tracker", value: "daily" },
];
export const calendar = [
  { label: "Event Calendar", value: "events" },
  { label: "Task Calendar", value: "tasks" },
];
export const links = [
  { label: "Drive", link: "https://drive.google.com" },
  { label: "Calendar", link: "https://calendar.google.com" },
  { label: "Maps", link: "https://maps.google.com" },
  { label: "Gmail", link: "https://gmail.com" },
  { label: "Drive", link: "https://drive.google.com" },
  { label: "FDJ Website", link: "https://fdj.com" },
  { label: "Canva", link: "https://canva.com" },
  { label: "Youtube", link: "https://youtube.com" },
  { label: "Casket Orders", link: "https://casketorders.com" },
  { label: "E-Vital", link: "https://evital.com" },
];

export default function MobileSidebar() {
  const [openmobilenav, setopenmobilenav] = useAtom(openMobileNav);

  return (
    <>
      <div
        className={`transition-all w-[250px]  absolute top-0  h-screen bg-white p-2 lg:-left-[275px] block b-shadow z-50  ${
          openmobilenav ? "left-0" : "-left-[275px]"
        }`}
      >
        <div className="mt-[10px] text-2xl font-medium text-left protest-riot-regular flex items-center justify-between">
          Dashboard
          <IoMdClose
            className="font-bold text-3xl cursor-pointer lg:hidden block"
            onClick={() => setopenmobilenav(false)}
          />
        </div>

        <div className="w-full flex flex-col items-start justify-start h-[90%] py-6 gap-3">
          <MenuRender data={funeral} title="Funeral" position="right-start" />
          <MenuRender data={calendar} title="Calendar" position="right-start" />
          <MenuRender data={links} title="Links" position="right-start" />
        </div>
        <div className="flex h-[20px] items-center justify-between px-4 gap-2 w-full ">
          <Menu placement="right-start">
            <MenuHandler>
              <div className="flex items-center gap-3 justify-center mb-10">
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
        </div>
      </div>
    </>
  );
}
