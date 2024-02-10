import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Select,
  Option,
} from "@material-tailwind/react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
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

function content() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setMenuOpen(true);
    }
  };

  const handleCloseClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <div className="w-[100%] lg:w-[70%] xl:width-d  md:w-[100%] relative   h-screen">
      <Navbar />
      {/* <EmailTemplate /> */}
      {/* <DailyTracker /> */}
      {/* <Tasks /> */}
      {/* <AddClient /> */}
      <Forms />
      {/* <Billing /> */}

      <div
        onClick={handleMenuClick}
        className=" absolute top-0 right-0 z-10 m-4  cursor-pointer lg:hidden block">
        <TiThMenuOutline className="font-bold text-3xl  " />
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block absolute top-0 left-0  w-[70%] md:w-[40%]">
          <Sidebar
            handleCloseClick={handleCloseClick}
            className=" lg:w-[30%] "
          />
        </div>
      )}
    </div>
  );
}

export default content;
