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

import { useAtom } from "jotai";
import { openSidebar } from "../../utils/jotai/atoms";

function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [, setsidebar] = useAtom(openSidebar);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="overflow-hidden  relative b-shadow ">
      <Card className="h-screen  w-full   p-4 shadow-xl shadow-blue-gray-900/5  z-50 lg:z-0 overflow-y-scroll">
        <div className=" lg:hidden block absolute top-0 right-0 z-10 m-2  ">
          <FaWindowClose
            onClick={() => setsidebar(false)}
            className="font-bold text-3xl cursor-pointer rounded-full"
          />
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className=" text-blue-gray-700 text-center"
        >
          Deceased Profile
        </Typography>
        <div className="mb-2 p-4 flex items-center gap-[10px] mt-4 justify-left">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className=" cursor-pointer"
          />
          <Typography className=" text-blue-gray-500 text-[15px]">
            Name of this shit
          </Typography>
        </div>
        <div className="mx-4">
          <Typography className=" text-blue-gray-500 text-[15px]">
            Client Details
          </Typography>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Menu
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>Life Insurance</ListItem>
                <ListItem>Memorial Card</ListItem>
                <ListItem>Memorail Program</ListItem>
                <ListItem>Casket / Urn and Merchandise Selection</ListItem>
                <ListItem>Flower Instructions</ListItem>
                <ListItem>To do list</ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <div className="">
            {" "}
            <Select label="Referal Status">
              <Option>Test 1</Option>
              <Option>Test 2 </Option>
              <Option>Test 3 </Option>
              <Option>Test 4 </Option>
              <Option>Test 5 </Option>
            </Select>
          </div>
        </List>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Name Of Contact :
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            John john
          </Typography>
        </div>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Email:
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            Jjoopota@gmail.com
          </Typography>
        </div>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Telephone:
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            09608481234
          </Typography>
        </div>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Service Type :
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            1 day Cremation and Memorial Service at Church
          </Typography>
        </div>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Inquiry Status :
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            Test 123
          </Typography>
        </div>
        <div className="p-3">
          <Typography className=" text-blue-gray-800 text-[12px] text-red-800 font-semibold">
            Notes :
          </Typography>
          <Typography className=" text-blue-gray-600 text-[15px] border-b-2">
            Test 123
          </Typography>
        </div>
        <div className="p-3 flex items-center lg:hidden">
          <ListItemPrefix>
            <IoChevronBackCircleSharp className="h-5 w-5 cursor-pointer" />
          </ListItemPrefix>
          <Typography
            color="blue-gray"
            className="mr-auto font-normal cursor-pointer"
          >
            Go back
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default Sidebar;
