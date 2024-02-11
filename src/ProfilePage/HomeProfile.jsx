import Sidebar from "../Components/Profile/SidebarProfile";
import Menu from "../Components/Profile/contentProfile";
import { Outlet } from "react-router-dom";

function HomeProfile() {
  return (
    <div className="flex h-[100vh] overflow-hidden ">
      <div className="hidden lg:block lg:w-[30%]  xl:w-[300px] w-[70%] md:w-[50%] ">
        <Sidebar />
      </div>
      <div className="w-full">
        <Menu />
        <div className="h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
