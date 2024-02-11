import AddClient from "../Account/AddClient";
import AddAccount from "../Account/AddAccount";

import { useAtom } from "jotai";

import { openClient, openAccount } from "../../utils/jotai/atoms";
import { ClientSchema } from "../../utils/zod/validation";

export default function Case() {
  const [openaccount] = useAtom(openAccount);
  const [openclient] = useAtom(openClient);

  try {
    ClientSchema.parse({ firstname: "John", lastname: "  " });
  } catch (err) {
    console.log(err.errors);
  }

  return (
    <div className="relative">
      {openaccount && <AddAccount />}
      {openclient && <AddClient />}
      Case
    </div>
  );
}
