import React from "react";
import SidebarProfile from "../Components/Profile/SidebarProfile";
import ClientProfile from "../Components/Profile/contentProfile";
function HomeProfile() {
  return (
    <div className="flex">
      <SidebarProfile />
      <ClientProfile />
    </div>
  );
}

export default HomeProfile;
