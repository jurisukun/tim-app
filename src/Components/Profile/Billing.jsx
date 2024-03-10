import {
  Button,
  Card,
  Select,
  Option,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";
import { BillSchema } from "../../utils/zod/validation";
import { newBill } from "../../utils/jotai/atoms";
import { useAtom } from "jotai";
import { handleChange } from "../Account/AddClient";
import { useUser } from "../../utils/context/useUser";
import { toast } from "react-toastify";
import { format } from "date-fns";

function AddBilling({ setOpen, bill, setBill, clientId }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["billingmutation", clientId],
    mutationFn: saveBilling,
    onSuccess: (response) => {
      if (response?.error) return toast.error(response.message);

      queryClient.setQueryData(["billing", clientId], (oldData) => {
        return {
          ...oldData,
          bills: [...oldData.bills, response.bill],
          total: oldData?.total + response.bill.amount,
        };
      });
      toast.success(response?.message);
      setOpen(false);
      setBill({ createdBy: user?.userId });
    },
  });
  const { user } = useUser();

  async function saveBilling() {
    const valdbill = BillSchema.safeParse({
      ...bill,
      amount: parseFloat(bill?.amount),
      createdBy: user?.userId,
    });
    if (!valdbill.success) return toast.error(valdbill.error?.message);
    const response = await customfetch(
      import.meta.env.VITE_API_URL + "/billing",
      "POST",
      { ...valdbill.data, client_id: clientId }
    );

    console.log(response);
    return response;
  }

  return (
    <div className="fixed  w-full h-full top-0 right-0 flex items-center justify-center bg-[rgb(0,0,0,0.7)] z-50">
      <Card className="shadowwp  p-4 py-6 h-[80%]  w-[350px] gap-2 ">
        <div className="mb-4">
          <Typography className="text-center text-lg  text-red-800 font-bold">
            Payment
          </Typography>
        </div>
        <div className="h-full overflow-y-scroll flex flex-col p-3 gap-3">
          <div className="  w-full">
            <Select
              label="Overall Payment Status"
              value={bill?.overall_status}
              name="overall_status"
              onChange={(e) => {
                handleChange(e, setBill, "overall_status");
              }}
            >
              <Option value="Paid in full">Paid in full</Option>
              <Option value="Pending in balance">Pending in balance</Option>
              <Option value="Insurance to pay">Insurance to pay</Option>
            </Select>
          </div>
          <div className=" w-full">
            <Input
              label="Date Of Payment"
              type="date"
              defaultValue={bill?.date ? format(bill?.date, "yyyy-MM-dd") : ""}
              name="date"
              onChange={(e) => {
                handleChange(e, setBill);
              }}
            />
          </div>
          <div className="my-2">
            <Select
              label="Payment Status"
              value={bill?.payment_status}
              name="payment_status"
              onChange={(e) => {
                handleChange(e, setBill, "payment_status");
              }}
            >
              <Option value="Not yet paid">Not yet paid</Option>
              <Option value="Paid">Paid</Option>
              <Option value="Paid with balance">Paid with balance</Option>
            </Select>
          </div>

          <div className=" w-full">
            <Select
              label="Via"
              value={bill?.via}
              name="via"
              onChange={(e) => {
                handleChange(e, setBill, "via");
              }}
            >
              <Option value="Zelle">Zelle</Option>
              <Option value="Cash">Cash</Option>
              <Option value="Check">Check</Option>
              <Option value="Credit Card">Credit Card</Option>
              <Option value="Bank Transfer">Bank Transfer</Option>
            </Select>
          </div>
          <div className=" w-full">
            <Input
              label="Amount"
              defaultValue={bill?.amount}
              name="amount"
              onChange={(e) => {
                handleChange(e, setBill);
              }}
            />
          </div>
          <div className=" w-full">
            <Textarea
              label="Notes"
              defaultValue={bill?.notes}
              name="notes"
              onChange={(e) => {
                handleChange(e, setBill, "notes");
              }}
            />
          </div>
        </div>
        <div className="w-full flex gap-4 justify-between px-4">
          <Button
            size="sm"
            className="mt-4"
            variant="outlined"
            onClick={() => {
              setOpen(false);
              setBill({ createdBy: user?.userId });
            }}
          >
            Cancel
          </Button>
          <Button size="sm" className="mt-4" onClick={() => mutation.mutate()}>
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}

function Billing() {
  const [open, setOpen] = useState(false);
  const { clientId } = useParams();
  const [bill, setBill] = useAtom(newBill);

  const thead = [
    { title: "Overall  Status" },
    { title: "Date" },
    { title: "Payment status" },
    { title: "Via" },
    { title: "Amount" },
    { title: "Notes" },
  ];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["billing", clientId],
    queryFn: async () => {
      const response = await customfetch(
        import.meta.env.VITE_API_URL + "/billing/" + clientId,
        "GET"
      );

      return response;
    },
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorPage />;
  console.log(data);

  return (
    <div className="w-full h-full p-4 gap-2">
      {open && (
        <AddBilling
          setOpen={setOpen}
          bill={bill}
          setBill={setBill}
          clientId={clientId}
        />
      )}
      <div className="text-xl font-medium text-blue-gray-800  h-[50px] w-full flex justify-between items-center">
        Billing
        <div className="flex  md:hidden ">
          <Button
            size="sm"
            className="bg-blue-gray-700"
            onClick={() => setOpen(true)}
          >
            Add Payment
          </Button>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row h-[50px] w-full justify-between items-center px-3">
        <div className="hidden w-full md:flex md:w-[20%]">
          <Button
            size="sm"
            className="bg-blue-gray-700"
            onClick={() => setOpen(true)}
          >
            Add Payment
          </Button>
        </div>

        <div className="flex h-full flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <div>
            <Typography className="font-semibold text-xs text-center">
              Total Charges:
            </Typography>
            <input
              readOnly={true}
              placeholder="Total"
              value={1500}
              className="max-w-[80px] border rounded-md p-1 text-left max-h-[40px] flex items-center m-0  border-gray-800 focus:outline-none"
            />
          </div>
          <div>
            <Typography className="font-semibold text-xs ">
              Total Payment:
            </Typography>
            <input
              readOnly={true}
              placeholder="Total"
              value={data?.total ?? 0}
              className="max-w-[80px] border rounded-md p-1 text-left max-h-[40px] flex items-center m-0 border-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <Typography className="font-semibold text-xs ">Balance</Typography>
            <input
              readOnly={true}
              placeholder="Total"
              value={1500 - data?.total ?? 0}
              className="max-w-[80px] border rounded-md p-1 text-left h-[50px  border-gray-800 focus:outline-none  "
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col h-[calc(100%-100px)]">
        <div className="mt-6 h-full w-full  overflow-y-auto">
          <table className="flex flex-col  lg:gap-0 w-full h-full p-3">
            <tbody className="lg:table lg:flex-col  grid sm:grid-cols-2 gap-2 h-full space-y-3">
              <tr className=" top-0 bg-blue-gray-300 z-20 w-full hidden lg:flex  justify-evenly text-center p-2 rounded-md text-white ">
                {thead.map((head, index) => {
                  return (
                    <th
                      key={index}
                      className={`px-3  text-left  ${
                        index == 0 || index == 5 ? " w-[20%]" : "w-[15%]"
                      }`}
                    >
                      <Typography
                        variant="small"
                        className="font-semi-bold text-1xl x "
                      >
                        {head.title}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
              {data?.bills?.map((bill, index) => {
                return (
                  <tr
                    className=" px-3 py-6 border border-black rounded-md lg:p-1 flex flex-col lg:flex-row  text-gray-800 cursor-pointer hover:shadow-md hover:shadow-red-800 hover:border-red-600 transition-all  w-full justify-evenly"
                    key={index}
                    onClick={() => {
                      setOpen(true);
                      setBill(bill);
                    }}
                  >
                    <td className="py-1  px-2 text-sm flex justify-between lg:w-[20%]  ">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Overall Status:
                      </span>
                      {bill?.overall_status}
                    </td>
                    <td className="py-1   px-2 text-sm flex justify-between lg:w-[15%] ">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Date:
                      </span>
                      {format(bill?.date, "MMM dd, yyy") ?? ""}
                    </td>
                    <td className="py-1  px-2 text-sm flex justify-between lg:w-[15%] ">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Payment Status:
                      </span>
                      {bill?.payment_status}
                    </td>
                    <td className="py-1  px-2 text-sm flex justify-between lg:w-[15%]">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Via:
                      </span>
                      {bill?.via}
                    </td>
                    <td className="py-1 px-2 text-sm flex justify-between lg:w-[15%] ">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Amount:
                      </span>
                      ${bill?.amount}
                    </td>
                    <td className="py-1  px-2 text-sm flex justify-between gap-4 lg:w-[20%]">
                      <span className="lg:hidden text-red-700 text-xs font-semibold">
                        Notes
                      </span>
                      <p className="min-h-[50px] max-h-[80px] w-3/4 lg:w-full border rounded-md p-2 text-sm ">
                        {bill?.notes}
                      </p>
                    </td>
                    {/* <td className="border  flex justify-center items-center px-2 text-sm">
                      <Button size="sm">View receipt</Button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <table className="shadow-lg bg-white w-full ">
            <tbody className="h-[80%] overflow-y-scroll w-full flex flex-col flex-1 ">
              <tr className="w-full hidden lg:flex lg:flex-1">
                {thead.map((head, index) => {
                  return (
                    <th
                      key={index}
                      className="bg-blue-gray-300 border text-left p-2"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semi-bold text-1xl text-white "
                      >
                        {head.title}
                      </Typography>
                    </th>
                  );
                })}
              </tr>

              {data?.bills?.map((bill, index) => {
                return (
                  <tr
                    className="p-1  text-gray-800 cursor-pointer hover:shadow-lg transition-all"
                    key={index}
                    onClick={() => {
                      setOpen(true);
                      setBill(bill);
                    }}
                  >
                    <td className="border  px-2 text-sm">
                      {bill?.overall_status}
                    </td>
                    <td className="border  px-2 text-sm">
                      {format(bill?.date, "MMM dd, yyy") ?? ""}
                    </td>
                    <td className="border  px-2 text-sm">
                      {bill?.payment_status}
                    </td>
                    <td className="border  px-2 text-sm">{bill?.via}</td>
                    <td className="border  px-2 text-sm">{bill?.amount}</td>
                    <td className="border  px-2 text-sm">{bill?.notes}</td>
                    <td className="border  flex justify-center items-center px-2 text-sm">
                      <Button size="sm">View receipt</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          {data?.bills?.length <= 0 && (
            <div className="flex-1 flex h-full w-full items-center justify-center">
              <Typography className="text-gray-600 text-lg">
                No records found
              </Typography>
            </div>
          )}
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
  );
}

export default Billing;
