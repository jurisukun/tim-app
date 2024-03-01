import {
  Button,
  Card,
  Select,
  Option,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { useState } from "react";

function AddBilling({ setOpen }) {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-[rgb(0,0,0,0.5)] z-30">
      <Card className="shadowwp  p-4 py-6 h-96  w-[350px] ">
        <div className="mb-4">
          <Typography className="text-center text-lg font-medium">
            Payment
          </Typography>
        </div>
        <div className="h-full overflow-y-scroll">
          <div>
            <Typography className="">Overall Payment Status</Typography>
            <div className="lg:w-72 md:w-72  w-full my-2">
              <Select label="Select">
                <Option>Paid In Full</Option>
                <Option>Pending In Balance</Option>
                <Option>Insurance To Pay</Option>
              </Select>
            </div>
          </div>
          <div className="lg:w-72 md:w-72 w-full my-2">
            <Input label="Date Of Payment" />
          </div>
          <div className="my-2">
            <Typography className="my-2">Payment Status</Typography>
            <div className="lg:w-72 md:w-72 w-full my-2">
              <Select label="Select">
                <Option>Not yet Paid</Option>
                <Option>Paid</Option>
                <Option>Paid with balance</Option>
              </Select>
            </div>
          </div>
          <div className="my-2">
            <Typography className="my-2">Via</Typography>
            <div className="lg:w-72 md:w-72 w-full my-2">
              <Select label="Select">
                <Option>Zelle</Option>
                <Option>Cash</Option>
                <Option>Check</Option>
                <Option>Credit Card</Option>
                <Option>Bank Transfer</Option>
              </Select>
            </div>
          </div>
          <div className="lg:w-72 md:w-72 w-full my-2">
            <Input label="Amount" />
          </div>
          <div className="lg:w-72 md:w-72 w-full my-2">
            <Textarea label="Notes" />
          </div>

          <div className="w-full flex gap-4 justify-end px-4">
            <Button
              size="sm"
              className="mt-4"
              variant="outlined"
              onClick={() => setOpen((prev) => !prev)}
            >
              Cancel
            </Button>
            <Button size="sm" className="mt-4">
              Save
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Billing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full relative p-4 gap-2">
      {open && <AddBilling setOpen={setOpen} />}
      <div className="text-xl font-medium text-blue-gray-800 p-4">Billing</div>

      <div className=" lg:flex lg:flex-row lg:gap-10 md:gap-0 md:flex md:flex-col px-4">
        <div className="w-full flex flex-col">
          <div className="flex w-full justify-between items-center gap-8">
            <div>
              <Button
                size="sm"
                className="border-red-900"
                variant="outlined"
                onClick={() => setOpen(true)}
              >
                Add Payment
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 self-end">
              <Typography className="font-semibold text-1xl ">
                Total Funeral Home Charges:
              </Typography>
              <div className="w-72">
                <Input />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="">
              <table className="shadow-lg bg-white w-full">
                <tr>
                  <th className="bg-blue-gray-300 border  text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Date Of Payment
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Payment status
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Via
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Amount
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Notes
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Receipt
                    </Typography>
                  </th>
                </tr>
                <tr>
                  <td className="border px-2 py-2">2024-02-09</td>
                  <td className="border px-2 py-2">Paid</td>
                  <td className="border px-2 py-2"> Cash</td>
                  <td className="border px-2 py-2"> $ 200.00</td>
                  <td className="border px-2 py-2">hehe</td>
                  <td className="border px-2 py-2">View receipt</td>
                </tr>
              </table>
            </div>
            {/* mobile view */}
            {/* <div className="shadow-lg p-6 lg:hidden grid grid-cols-1 w-full ">
         
              <Card className="mt-3 shadoww p-2">
                <div className="flex items-center gap-3">
                  <Typography className="text-black">
                    Date Of Payment:
                  </Typography>
                  <Typography>2024-02-09</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Typography className="text-black">
                    Payment status:
                  </Typography>
                  <Typography> Paid</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Typography className="text-black">Via:</Typography>
                  <Typography>Cash</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Typography className="text-black">Amount:</Typography>
                  <Typography>$ 200.00</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Typography className="text-black">Notes:</Typography>
                  <Typography>Wala</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Typography className="text-black"> Receipt:</Typography>
                  <Typography>View receipt</Typography>
                </div>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
