import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import Navbar from "./Navbar";
import EmailTemplate from "./emailTemplate";
import DailyTracker from "./DailyTracker";
import Tasks from "./Tasks";
import AddClient from "../Account/AddClient";
import Forms from "./Forms";
import Billing from "./Billing";
import Sidebar from "./SidebarProfile";
import { Outlet } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

import { useAtom } from "jotai";
import { openSidebar } from "../../utils/jotai/atoms";

function content() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [sidebar] = useAtom(openSidebar);

  return (
    <div className="w-[100%] relative  bbb">
      <Navbar />

      {sidebar && (
        <div className="lg:hidden block absolute top-0 left-0  w-[70%] md:w-[40%]">
          <Sidebar className=" lg:w-[30%] " />
        </div>
      )}
    </div>
  );
}

export default content;
