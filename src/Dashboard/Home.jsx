import SideBar from "../Components/SideBar";
import CheckAuth from "../CheckAuth/CheckAuth";
import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../Components/MobileSidebar";

import { useAtom } from "jotai";
import { openMobileNav } from "../utils/jotai/atoms";

function Home() {
  const [, setopenmobilenav] = useAtom(openMobileNav);

  return (
    // <CheckAuth>
    <div className="w-full h-screen items-center">
      <MobileSidebar />
      <div className="flex flex-row">
        <SideBar />
        <div className="lg:hidden flex w-full bbb justify-end  items-center h-[60px] px-6">
          <IoMenu
            className="font-bold text-3xl cursor-pointer lg:hidden flex flex-end"
            onClick={() => setopenmobilenav(true)}
          />
        </div>
      </div>
      <Outlet />
    </div>
    // </CheckAuth>
  );
}

export default Home;
