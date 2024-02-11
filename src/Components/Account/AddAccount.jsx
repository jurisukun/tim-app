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

import { useAtom } from "jotai";
import { openAccount } from "../../utils/jotai/atoms";

function AddAccount() {
  const [, setopenaccount] = useAtom(openAccount);

  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black/70">
      <Card className="mt-6 p-4">
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          Add Account
        </Typography>
        <CardBody>
          <div className="w-80 mt-3">
            <Input label="First Name" />
          </div>
          <div className="w-80 mt-3">
            <Input label="Last Name" />
          </div>
          <div className="w-80 mt-3">
            <Input label="Username" />
          </div>
          <div className="w-80 mt-3">
            <Input label="Email" />
          </div>
          <div className="w-80 mt-3">
            <Input label="Password" />
          </div>
          <div className="w-80 mt-3">
            <Input label="Confirm Password" />
          </div>
          <div className=" w-80 mt-4">
            <Select label="Select Level">
              <Option>Admin</Option>
              <Option>Executive</Option>
              <Option>Operations</Option>
            </Select>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-between">
          <Button variant="outlined" onClick={() => setopenaccount(false)}>
            Exit
          </Button>
          <Button>Add Account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AddAccount;
