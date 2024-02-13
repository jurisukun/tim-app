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
import { openMobileNav, openAccount, openClient } from "../utils/jotai/atoms";

export function MenuRender({ data, title }) {
  return (
    <Menu placement="right-start">
      <MenuHandler>
        <Button className="hover:underline text-left  mx-[4px] mt-[10px]  bg-transparent text-gray-900 shadow-none hover:shadow-none">
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
  const [, setopenaccount] = useAtom(openAccount);
  const [, setopenclient] = useAtom(openClient);

  const funeral = ["Client", "Contracts", "Itineraries", "Daily Tracker"];
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

        <div className="w-full flex flex-col items-start justify-start h-[90%]">
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
              <Button className="flex text-left items-center  mx-[4px] mt-[10px] bg-gray-800">
                ADD
                <FaUserPlus className="mx-2" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={() => setopenaccount(true)}>
                Add Account
              </MenuItem>
              <MenuItem onClick={() => setopenclient(true)}>
                Add Client
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="flex h-[20px] items-center justify-between px-4 gap-2 w-full pb-8">
          <Menu placement="right-start">
            <MenuHandler>
              <div className="flex items-center gap-3 justify-center ">
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
