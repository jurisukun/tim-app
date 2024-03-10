import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { openAccount, newAccount } from "../../utils/jotai/atoms";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { toast } from "react-toastify";
import { AccountSchema } from "../../utils/zod/validation";

function AddAccount() {
  const setopenaccount = useSetAtom(openAccount);
  const [newaccount, setnewaccount] = useAtom(newAccount);
  const resetnewaccount = useSetAtom(newAccount);

  const handleAddAccount = async () => {
    console.log(newaccount);
    try {
      const validnewaccount = AccountSchema.parse(newaccount);
      console.log(validnewaccount);
      const result = await customfetch(
        import.meta.env.VITE_API_URL + "/accounts",
        "POST",
        validnewaccount
      );
      if (result.error) {
        toast.error(result.message);

        return;
      }
      toast.success(result.message);
      resetnewaccount(RESET);
      setopenaccount(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleChange = (e, name) => {
    setnewaccount({ ...newaccount, [name]: e.target.value });
  };

  return (
    <div className="w-full fixed z-50 top-0 left-0 h-screen flex justify-center items-center bg-black/70">
      <Card className=" p-4 max-w-[400px] w-[85%] ">
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          Add Account
        </Typography>
        <CardBody>
          <div className="w-full mt-3">
            <Input
              label="First Name"
              onChange={(e) => handleChange(e, "firstname")}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Last Name"
              onChange={(e) => handleChange(e, "lastname")}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Username"
              onChange={(e) => handleChange(e, "username")}
            />
          </div>
          <div className="w-full mt-3">
            <Input label="Email" onChange={(e) => handleChange(e, "email")} />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Password"
              type="password"
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Confirm Password"
              type="password"
              onChange={(e) => handleChange(e, "confirmpassword")}
            />
          </div>
          <div className=" w-full mt-4">
            <Select
              label="Select Level"
              onChange={(e) => {
                handleChange({ target: { value: e } }, "role");
              }}
            >
              <Option value="ADMIN">Admin</Option>
              <Option value="EXECUTIVE">Executive</Option>
              <Option value="OPERATIONS">Operations</Option>
            </Select>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-between">
          <Button
            variant="outlined"
            onClick={() => {
              setopenaccount(false);
              resetnewaccount(RESET);
              console.log(newaccount);
            }}
          >
            Exit
          </Button>
          <Button onClick={() => handleAddAccount()}>Add Account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AddAccount;
