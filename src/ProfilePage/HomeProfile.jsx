
import Sidebar from "../Components/Profile/SidebarProfile";
import Content from "../Components/Profile/contentProfile";
function HomeProfile() {
  return (
    <div className="flex ">
      <div className="hidden lg:block lg:w-[30%]  xl:w-[300px] w-[70%] md:w-[50%]">
        <Sidebar />
      </div>
      <Content />
    </div>
  );
}

export default HomeProfile;
