import SideBar from "../Components/SideBar";
import CheckAuth from "../CheckAuth/CheckAuth";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    // <CheckAuth>
    <div className="w-full h-[100vh] items-center overflow-hidden relative">
      <SideBar />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
    // </CheckAuth>
  );
}

export default Home;
