import {
  Button,
  Card,
  Select,
  Option,
  Typography,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogBody,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";
import { useAtomValue, useSetAtom } from "jotai";
import { newDailyTracker } from "../../utils/jotai/atoms";

import { DailyTrackerSchema } from "../../utils/zod/validation";
import { toast } from "react-toastify";

import { handleChange } from "../Account/AddClient";
import { useUser } from "../../utils/context/useUser";

import { format } from "date-fns";

const DailyCard = ({ item, setSelectedRecord, setShowAddRecord }) => {
  return (
    <Card
      className="shadoww p-6 md:hidden cursor-pointer gap-2"
      onClick={() => {
        setSelectedRecord(item);
        setShowAddRecord(true);
      }}
    >
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-start  text-sm font-semibold">
          Date:
        </Typography>
        <Typography className="text-end ">
          {format(item?.date, "MMM dd, yyy")}
        </Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Time:
        </Typography>
        <Typography>{item?.time}</Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Staff Name:
        </Typography>
        <Typography>{item?.staff}</Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Interaction Type:
        </Typography>
        <Typography className="text-end">{item?.interaction_type}</Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Interaction With:
        </Typography>
        <Typography>{item?.interaction_with}</Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Purpose Of Call:
        </Typography>
        <Typography>{item?.call_purpose}</Typography>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <Typography className="text-red-800 text-sm font-semibold">
          Phone Number:
        </Typography>
        <Typography>{item?.phone_number}</Typography>
      </div>
      <div className="flex items-start gap-3 justify-between ">
        <Typography className="text-red-800 text-sm font-semibold">
          Notes:
        </Typography>
        {/* <pre className="border text-end text-pre text-pretty">{item?.notes}</pre> */}
        <div className=" flex max-h-[60px] overflow-y-scroll">
          <Typography className=" text-end  text-pretty">
            {item?.notes}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

function DailyTracker() {
  const { clientId } = useParams();
  const { user } = useUser();

  const newdailytracker = useAtomValue(newDailyTracker);
  const setnewdailytracker = useSetAtom(newDailyTracker);

  const [showAddRecord, setShowAddRecord] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState();
  const [recordId, setRecordId] = useState();

  useEffect(() => {
    if (selectedRecord) setnewdailytracker(selectedRecord);
  }, [selectedRecord]);

  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dailytracker", clientId],
    queryFn: async () => {
      const response = await fetch(
        clientId
          ? import.meta.env.VITE_API_URL + `/dailytracker/${clientId}`
          : import.meta.env.VITE_API_URL + `/dailytracker`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const handleAddRecordClick = () => {
    setShowAddRecord(true);
  };

  const handleExitClick = () => {
    setShowAddRecord(false);
  };

  const addupdateDailyTracker = async () => {
    console.log(newdailytracker);
    const parse = DailyTrackerSchema.safeParse({
      ...newdailytracker,
      client_id: clientId ?? "",
      staff: user?.firstname + " " + user?.lastname,
    });

    if (!parse.success) {
      toast.error(parse.error.errors[0].message);
      return;
    }

    const response = await fetch(
      selectedRecord
        ? import.meta.env.VITE_API_URL + `/dailytracker/${selectedRecord?.id}`
        : import.meta.env.VITE_API_URL + `/dailytracker`,

      {
        method: selectedRecord ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify({
          ...parse?.data,
          staff: user?.firstname + " " + user?.lastname,
          createdBy: user?.userId,
        }),
      }
    );
    if (!response.ok) {
      toast.error("Network response was not ok");
      // throw new Error("Network response was not ok");
    }
    const result = await response.json();
    if (result.error) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);
    setShowAddRecord(false);

    return result.data;
  };

  const deleteDailyTracker = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/dailytracker/${recordId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    if (result.error) {
      toast.error(result.message);
    }
    toast.success(result.message);
    setRecordId(null);
  };

  const mutation = useMutation({
    mutationFn: recordId ? deleteDailyTracker : addupdateDailyTracker,
    mutationKey: recordId
      ? ["deletedailytracker", recordId]
      : ["dailytrackermutation"],
    onSuccess: (data) => {
      if (data) {
        recordId
          ? queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
              return {
                daily: oldData.daily.filter((item) => item.id !== recordId),
              };
            })
          : selectedRecord
          ? queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
              console.log(oldData, data);
              return {
                daily: oldData.daily.map((item) =>
                  item.id === data.id ? data : item
                ),
              };
            })
          : queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
              return { daily: [data, ...oldData.daily] };
            });
      }
      setRecordId(null);
      setSelectedRecord(null);
    },
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  let daily = data?.daily;
  const thead = [
    { title: "Date/Time" },

    { title: "Staff Name" },
    { title: "Interaction Type" },
    { title: "Interaction With" },
    { title: "Purpose of Call" },
    { title: "Phone Number" },
    { title: "Notes" },
  ];
  return (
    <div className="w-full  h-full flex-1 max-w-full">
      <div className="w-full h-20 text-xl font-medium  bbb text-blue-gray-800 flex items-center justify-between p-4">
        Daily Tracker
        <Button
          size="sm"
          onClick={handleAddRecordClick}
          className="bg-blue-gray-700"
        >
          Add Record
        </Button>
      </div>
      <div className="flex-1 h-[80%] p-3 overflow-y-auto">
        {daily?.length > 0 && (
          <table className="flex flex-col  lg:gap-0 w-full h-full p-3">
            <tbody className="lg:table lg:flex-col  grid sm:grid-cols-2 gap-2 h-full space-y-3">
              <tr className=" top-0 bg-blue-gray-300 z-20 w-full hidden lg:flex  justify-evenly text-center p-2 rounded-md text-white ">
                {thead.map((head, index) => {
                  return (
                    <th
                      key={index}
                      className={`px-3  text-left ${
                        index == 6 || index == 4 ? "lg:w-[15%]" : "lg:w-[11%]"
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
              {daily.map((item, index) => {
                return (
                  <Menu
                    className="bg-black"
                    key={index}
                    // placement={"right" || "bottom"}
                  >
                    <MenuHandler>
                      <tr
                        className=" px-3 py-6 border border-black rounded-md lg:p-1 flex flex-col lg:flex-row  text-gray-800 cursor-pointer hover:shadow-md hover:shadow-red-800 hover:border-red-600 transition-all  w-full justify-evenly"
                        key={index}
                      >
                        <td className="py-1  px-2 text-sm flex justify-between lg:w-[11%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Date/Time:
                          </span>
                          {item?.date ? format(new Date(), "MMM dd, yyyy") : ""}{" "}
                          {item?.time}
                        </td>

                        <td className="py-1  px-2 text-sm flex justify-between  lg:w-[11%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Staff Name:
                          </span>
                          {item?.staff}
                        </td>
                        <td className="py-1  px-2 text-sm flex justify-between lg:w-[11%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Interaction Type:
                          </span>
                          {item?.interaction_type}
                        </td>
                        <td className="py-1 px-2 text-sm flex justify-between w-full lg:w-[15%] text-ellipsis overflow-hidden">
                          <span className="lg:hidden text-red-700 text-xs font-semibold w-1/2">
                            Interaction With:
                          </span>
                          <p className="w-1/2  text-ellipsis lg:text-left text-right overflow-hidden">
                            {item?.interaction_with}
                          </p>
                        </td>
                        <td className="py-1  px-2 text-sm flex justify-between gap-4 lg:w-[11%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Purpose of Call
                          </span>
                          {item?.call_purpose}
                        </td>
                        <td className="py-1  px-2 text-sm flex justify-between gap-4 lg:w-[11%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Phone Number:
                          </span>
                          {item?.phone_number ?? ""}
                        </td>

                        <td className="py-1  px-2 text-sm flex justify-between gap-4 lg:w-[15%]">
                          <span className="lg:hidden text-red-700 text-xs font-semibold">
                            Notes
                          </span>
                          <p className="min-h-[50px] max-h-[80px] w-3/4 lg:w-full border rounded-md p-2 text-sm ">
                            {item?.notes}
                          </p>
                        </td>
                        {/* <td className="border  flex justify-center items-center px-2 text-sm">
                      <Button size="sm">View receipt</Button>
                    </td> */}
                      </tr>
                    </MenuHandler>
                    <MenuList className="border shadow-md ">
                      <MenuItem
                        onClick={() => {
                          setSelectedRecord(item);
                          setShowAddRecord(true);
                        }}
                        className="text-orange-800 font-semibold"
                      >
                        View / Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => setRecordId(item.id)}
                        className="text-red-800 font-semibold"
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                );
              })}
            </tbody>
          </table>
          // <Card className="mt-3 hidden md:block p-2 h-full overflow-y-scroll">
          // <table className="shadow-lg bg-white w-full hidden md:table ">
          //   <tbody className="w-full">
          //     <tr className="sticky top-0  text-white font-bold w-full rounded-md bg-blue-gray-300 ">
          //       <th className="   text-left px-2 py-2">
          //         <Typography>Date</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Time</Typography>
          //       </th>
          //       <th className="border text-left px-2 py-2">
          //         <Typography>Staff Name</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Interaction Type</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Interaction With</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Purpose of call</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Phone Number</Typography>
          //       </th>
          //       <th className=" border text-left px-2 py-2">
          //         <Typography>Notes</Typography>
          //       </th>
          //     </tr>
          //     {daily.map((item, key) => {
          //       return (
          //         <Menu className="bg-black" key={key}>
          //           <MenuHandler>
          //             <tr key={key} className="hover:shadow-md text-sm ">
          //               <td className="border px-2 py-2  align-top">
          //                 {format(item?.date, "MMM dd, yyyy")}
          //               </td>
          //               <td className="border px-2 py-2 align-top">
          //                 {item?.time}
          //               </td>
          //               <td className="border px-2 py-2 align-top">
          //                 {item?.staff}
          //               </td>
          //               <td className="border px-2 py-2 align-top">
          //                 {item?.interaction_type}
          //               </td>
          //               <td className="border px-2 py-2 align-top">
          //                 {item?.interaction_with}
          //               </td>
          //               <td className="border px-2 py-2 align-top">
          //                 {item?.call_purpose}
          //               </td>
          //               <td className="border px-2 py-2 text-start align-top">
          //                 {item?.phone_number}
          //               </td>
          //               <td className="border px-2 py-2 text-xs text-ellipsis w-[20%] ">
          //                 <div className=" max-h-[100px] overflow-y-auto">
          //                   {item?.notes}
          //                 </div>
          //               </td>
          //             </tr>
          //           </MenuHandler>
          //           <MenuList className="border shadow-md ">
          //             <MenuItem
          //               onClick={() => {
          //                 setSelectedRecord(item);
          //                 setShowAddRecord(true);
          //               }}
          //               className="text-orange-800 font-semibold"
          //             >
          //               View / Edit
          //             </MenuItem>
          //             <MenuItem
          //               onClick={() => setRecordId(item.id)}
          //               className="text-red-800 font-semibold"
          //             >
          //               Delete
          //             </MenuItem>
          //           </MenuList>
          //         </Menu>
          //       );
          //     })}
          //   </tbody>
          // </table>
          // </Card>
        )}
        {daily?.length <= 0 && (
          <div className="h-full w-full items-center flex justify-center text-gray-400">
            No records found
          </div>
        )}
        {/* {
          <div className="mt-3 xl:hidden grid md:grid-cols-2 sm:grid-cols-2 gap-5 ">
            {daily?.map((item, key) => {
              return (
                <DailyCard
                  key={key}
                  item={item}
                  setShowAddRecord={setShowAddRecord}
                  setSelectedRecord={setSelectedRecord}
                />
              );
            })}
          </div>
        } */}
      </div>

      {/* add record */}
      {showAddRecord && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <Card className="  p-4 gap-4 max-h-[90%] max-w-[325px] w-[80%] flex flex-col items-center justify-center">
            <div className="text-center font-semibold">Add Daily Tracker</div>
            <div className="flex-1 w-full  flex flex-col p-4 gap-4 overflow-y-scroll">
              <div className="w-full ">
                <Input
                  type="date"
                  label="Date"
                  name="date"
                  defaultValue={selectedRecord?.date?.split("T")[0] ?? ""}
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
              <div className="w-full">
                <Input
                  type="time"
                  label="Time"
                  name="time"
                  defaultValue={selectedRecord?.time ?? ""}
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
              <div className="w-full ">
                <Select
                  label="Select Type Of Interaction"
                  value={selectedRecord?.interaction_type ?? ""}
                  onChange={(e) =>
                    handleChange(e, setnewdailytracker, "interaction_type")
                  }
                >
                  <Option value="Call To">Call To</Option>
                  <Option value="Call From">Call From</Option>
                  <Option value="Email Exchange">Email Exchange</Option>
                  <Option value="Meeting with">Meeting with</Option>
                </Select>
              </div>
              <div className="w-full">
                <Input
                  defaultValue={selectedRecord?.interaction_with ?? ""}
                  label="Interaction With"
                  name="interaction_with"
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
              <div className="w-full">
                <Input
                  defaultValue={selectedRecord?.call_purpose ?? ""}
                  label=" Purpose Of Call"
                  name="call_purpose"
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
              <div className="w-full">
                <Input
                  defaultValue={selectedRecord?.phone_number ?? ""}
                  label=" Phone Number"
                  name="phone_number"
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
              <div className="w-full">
                <Textarea
                  defaultValue={selectedRecord?.notes ?? ""}
                  label=" Notes"
                  name="notes"
                  onChange={(e) => handleChange(e, setnewdailytracker)}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between ">
              <Button
                onClick={() => {
                  handleExitClick();
                  setSelectedRecord(null);
                }}
                variant="outlined"
              >
                Exit
              </Button>
              <Button onClick={() => mutation.mutate()}>
                {selectedRecord ? "Edit" : "Submit"}
              </Button>
            </div>
          </Card>
        </div>
      )}

      <Dialog open={recordId ? true : false}>
        <DialogBody>
          <div className="flex flex-col items-center justify-between gap-8 ">
            <Typography variant="h6" color="blue-gray">
              Are you sure you want to delete this record?
            </Typography>
            <div className="flex items-center gap-4">
              <Button variant="outlined" onClick={() => setRecordId(null)}>
                No
              </Button>
              <Button color="red" onClick={() => mutation.mutate()}>
                Yes
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default DailyTracker;
