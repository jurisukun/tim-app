import SideBar from "../Components/SideBar";
import Content from "../Components/Content";
import HomeProfile from "../ProfilePage/HomeProfile";
function Home() {
  return (
    <div className="w-full h-screen items-center">
      <SideBar />
      <Content />
      <HomeProfile />
    </div>
  );
}

export default Home;
