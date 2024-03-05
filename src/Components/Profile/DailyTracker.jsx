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
          ? `http://localhost:3000/dailytracker/${clientId}`
          : `http://localhost:3000/dailytracker`,
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
        ? `http://localhost:3000/dailytracker/${selectedRecord?.id}`
        : `http://localhost:3000/dailytracker`,

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
      `http://localhost:3000/dailytracker/${recordId}`,
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
      <div className="flex-1 h-[80%] p-3">
        {daily?.length > 0 && (
          <Card className="mt-3 hidden md:block p-2 h-full overflow-y-scroll">
            <table className="shadow-lg bg-white w-full">
              <tbody>
                <tr className="sticky top-0 text-xs text-white font-bold">
                  <th className="bg-blue-gray-300 border  text-left px-2 py-2">
                    <Typography variant="small">Date</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Time</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Staff Name</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Interaction Type</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Interaction With</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Purpose of call</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Phone Number</Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography variant="small">Notes</Typography>
                  </th>
                </tr>
                {daily.map((item, key) => {
                  return (
                    <Menu className="bg-black" key={key}>
                      <MenuHandler>
                        <tr key={key} className="hover:shadow-md text-sm ">
                          <td className="border px-2 py-2  align-top">
                            {format(item?.date, "MMM dd, yyyy")}
                          </td>
                          <td className="border px-2 py-2 align-top">
                            {item?.time}
                          </td>
                          <td className="border px-2 py-2 align-top">
                            {item?.staff}
                          </td>
                          <td className="border px-2 py-2 align-top">
                            {item?.interaction_type}
                          </td>
                          <td className="border px-2 py-2 align-top">
                            {item?.interaction_with}
                          </td>
                          <td className="border px-2 py-2 align-top">
                            {item?.call_purpose}
                          </td>
                          <td className="border px-2 py-2 text-start align-top">
                            {item?.phone_number}
                          </td>
                          <td className="border px-2 py-2 text-xs text-ellipsis w-[20%] ">
                            <div className=" max-h-[100px] overflow-y-scroll">
                              {item?.notes}
                            </div>
                          </td>
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
          </Card>
        )}
        {daily?.length <= 0 && (
          <div className="h-full w-full items-center flex justify-center text-gray-400">
            No records found
          </div>
        )}
        {
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
        }
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
