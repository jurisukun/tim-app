import React from "react";
import Sidebar from "../Components/Profile/SidebarProfile";
import Content from "../Components/Profile/contentProfile";
function HomeProfile() {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default HomeProfile;
