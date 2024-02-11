import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";

import { useAtom } from "jotai";
import { openMobileNav } from "../utils/jotai/atoms";

export function MenuRender({ data, title }) {
  return (
    <Menu placement="right-start">
      <MenuHandler>
        <Button className=" text-left  mx-[4px] mt-[10px] w-[70%] bg-red-900">
          {title}
        </Button>
      </MenuHandler>
      <MenuList>
        {data?.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default function MobileSidebar() {
  const [openmobilenav, setopenmobilenav] = useAtom(openMobileNav);

  const funeral = ["Client", "Contracts", "Itineraries", "Daily Tracker"];
  return (
    <>
      <div
        className={`transition-all max-w-[275px]  absolute top-0  h-screen bg-white p-2 lg:-left-[275px] block b-shadow z-50  ${
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

        <div className="w-full flex-col items-center justify-between h-[90%]">
          <MenuRender data={funeral} title="Funeral" />
          <MenuRender
            data={["Event Calendar", "Task Calendar"]}
            title="Events"
          />
          <MenuRender
            data={[
              "Drive",
              "Calendar",
              "Maps",
              "Gmail",
              "Dave",
              "FDJ Website",
              "Canva",
              "Youtube",
              "Casket Orders",
              "E-Vital",
              "Call FWD",
            ]}
            title="Links"
          />

          <Menu placement="right-start">
            <MenuHandler>
              <Button className="flex text-left items-center  mx-[4px] mt-[10px] w-[70%] bg-gray-800">
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
        <div className="flex h-[20px] items-center justify-between px-4 gap-2">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="w-[35px] h-[35px]"
          />
          <h1 className="text-[20px] font-semibold text-black/80">Username</h1>
          <span>
            <RiLogoutBoxLine className="font-bold text-2xl text-black/60 cursor-pointer " />
          </span>
        </div>
      </div>
    </>
  );
}
