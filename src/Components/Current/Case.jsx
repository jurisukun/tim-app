import AddClient from "../Account/AddClient";
import AddAccount from "../Account/AddAccount";

import { useState } from "react";

export default function Case() {
  const [openAccount, setOpenAccount] = useState(true);
  const [openClient, setOpenClient] = useState(false);

  return (
    <div className="relative">
      {openAccount && <AddAccount setOpenAccount={setOpenAccount} />}
      {openClient && <AddClient setOpenClient={setOpenClient} />}
      Case
    </div>
  );
}
