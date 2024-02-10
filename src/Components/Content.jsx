import { useState } from "react";

import MainContainer from "./MainContainer";
import AddClient from "./Account/AddClient";

function Content() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative  lg:height-c h-screen ">
      <main className="w-full">
        <MainContainer />
         <AddClient />
      </main>
    </div>
  );
}

export default Content;
