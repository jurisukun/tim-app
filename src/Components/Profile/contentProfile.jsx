
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
    <div className="w-[100%] lg:w-[70%] xl:width-d  md:w-[100%] relative   h-screen overflow-hidden">
      <Navbar />
      {/* <EmailTemplate /> */}
      <DailyTracker />
      {/* <Tasks /> */}
      {/* <AddClient /> */}
      {/* <Forms /> */}
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
