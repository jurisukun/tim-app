import { useState } from "react";

import MainContainer from "./MainContainer";
import AddClient from "./Account/AddClient";
import AddAccount from "./Account/AddAccount";

function Content() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative  lg:height-c h-screen ">
      <main className="w-full">
        <MainContainer />
      </main>
    </div>
  );
}

export default Content;
