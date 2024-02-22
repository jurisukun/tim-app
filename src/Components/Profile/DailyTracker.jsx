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

import { useCheckAuth } from "../../utils/hooks/useCheckAuth";
import { set } from "date-fns";

function DailyTracker() {
  const { clientId } = useParams();
  const { user } = useCheckAuth();
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
        `http://localhost:3000/dailytracker/${clientId}`,
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

  const addDailyTracker = async () => {
    console.log(newdailytracker);
    const parse = DailyTrackerSchema.safeParse(
      selectedRecord ?? {
        ...newdailytracker,
        client_id: clientId,
      }
    );
    if (parse.success) {
      const response = await fetch(`http://localhost:3000/dailytracker`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify({
          client_id: clientId,

          ...parse.data,
          createdBy: user?.userId,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (result.error) {
        toast.error(result.message);
      }
      toast.success(result.message);
      setShowAddRecord(false);

      return result.data;
    } else {
      toast.error(parse.error.errors[0].message);
    }
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

  const updateDailyTracker = async () => {
    const parse = DailyTrackerSchema.safeParse({
      ...newdailytracker,
      client_id: clientId,
    });
    if (parse.success) {
      const response = await fetch(
        `http://localhost:3000/dailytracker/${selectedRecord.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON?.stringify({
            client_id: clientId,
            ...newdailytracker,
            createdBy: user?.userId,
          }),
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

      setShowAddRecord(false);

      return result.data;
    } else {
      toast.error(parse.error.errors[0].message);
    }
  };

  const mutation = useMutation({
    mutationFn: recordId
      ? deleteDailyTracker
      : selectedRecord
      ? updateDailyTracker
      : addDailyTracker,
    mutationKey: recordId
      ? ["deletedailytracker", recordId]
      : ["dailytrackermutation"],
    onSuccess: (data) => {
      recordId
        ? queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
            return {
              daily: oldData.daily.filter((item) => item.id !== recordId),
            };
          })
        : selectedRecord
        ? queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
            return {
              daily: oldData.daily.map((item) =>
                item.id === data.id ? data : item
              ),
            };
          })
        : queryClient.setQueryData(["dailytracker", clientId], (oldData) => {
            return { daily: [data, ...oldData.daily] };
          });
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
      <div className="hidden md:block flex-1 h-[80%] p-3">
        {daily?.length > 0 && (
          <Card className="mt-3 hidden md:block p-2 max-h-full overflow-y-scroll">
            <table className="shadow-lg bg-white w-full">
              <tbody>
                <tr className="sticky top-0">
                  <th className="bg-blue-gray-300 border  text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Date
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Time
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Staff Name
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Interaction Type
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Interaction With
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Purpose of call
                    </Typography>
                  </th>
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Phone Number
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
                </tr>
                {daily.map((item, key) => {
                  return (
                    <Menu className="bg-black">
                      <MenuHandler>
                        <tr key={key} className="hover:shadow-md ">
                          <td className="border px-2 py-2 text-xs">
                            {item?.date}
                          </td>
                          <td className="border px-2 py-2">{item?.time}</td>
                          <td className="border px-2 py-2">
                            {item?.staff_name}
                          </td>
                          <td className="border px-2 py-2">
                            {item?.interaction_type}
                          </td>
                          <td className="border px-2 py-2">
                            {item?.interaction_with}
                          </td>
                          <td className="border px-2 py-2">
                            {item?.call_purpose}
                          </td>
                          <td className="border px-2 py-2">
                            {item?.phone_number}
                          </td>
                          <td className="border px-2 py-2 text-xs text-ellipsis">
                            {item?.notes}
                          </td>
                        </tr>
                      </MenuHandler>
                      <MenuList className="border shadow-md ">
                        <MenuItem
                          onClick={() => {
                            setSelectedRecord(item);
                            setShowAddRecord(true);
                          }}
                          className="text-red-800"
                        >
                          View / Edit
                        </MenuItem>
                        <MenuItem
                          onClick={() => setRecordId(item.id)}
                          className="text-red-800"
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
      </div>

      {/* mobile view */}
      <div className="xl:hidden lg:block overflow-y-scroll h-full p-2 px-6">
        {daily?.length <= 0 && (
          <div className="h-full w-full items-center flex justify-center text-gray-400">
            No records found
          </div>
        )}
        <div className="mt-3  grid md:grid-cols-2 sm:grid-cols-2 gap-5 ">
          {daily?.map((item, key) => {
            return (
              <Card key={key} className="shadoww p-6">
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black text-start border">
                    Date:
                  </Typography>
                  <Typography className="text-start border">
                    {item?.date}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">Time:</Typography>
                  <Typography>{item?.time}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">Staff Name:</Typography>
                  <Typography>{item?.staff_name}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Interaction Type:
                  </Typography>
                  <Typography>{item?.interaction_type}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Interaction With:
                  </Typography>
                  <Typography>{item?.interaction_with}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Purpose Of Call:
                  </Typography>
                  <Typography>{item?.call_purpose}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black"> Phone Number:</Typography>
                  <Typography>{item?.phone_number}</Typography>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <Typography className="text-black"> Notes:</Typography>
                  <Typography className="border text-end">
                    {item?.notes}
                  </Typography>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* add record */}
      {showAddRecord && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <Card className=" p-4 gap-4 max-h-[90%] max-w-[325px] w-[80%] flex flex-col items-center justify-center">
            <div className="text-center font-semibold">Add Daily Tracker</div>
            <div className="w-full">
              <Input
                type="date"
                label="Date"
                name="date"
                defaultValue={selectedRecord?.date ?? ""}
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
              <Input
                defaultValue={selectedRecord?.notes ?? ""}
                label=" Notes"
                name="notes"
                onChange={(e) => handleChange(e, setnewdailytracker)}
              />
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
