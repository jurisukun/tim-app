import SideBar from "../Components/SideBar";
import CheckAuth from "../CheckAuth/CheckAuth";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <CheckAuth>
      <div className="w-full h-screen items-center">
        <SideBar />
        <Outlet />
      </div>
    </CheckAuth>
  );
}

export default Home;
