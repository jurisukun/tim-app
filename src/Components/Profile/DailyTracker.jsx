import {
  Button,
  Card,
  Select,
  Option,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";

function DailyTracker() {
  const { clientId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dailytracker", clientId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/dailytracker`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  const [showAddRecord, setShowAddRecord] = useState(false);

  const handleAddRecordClick = () => {
    setShowAddRecord(true);
  };

  const handleExitClick = () => {
    setShowAddRecord(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const { daily } = data;
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
      <div className="hidden md:block flex-1 h-full overflow-y-scroll pb-6">
        {daily?.length > 0 && (
          <Card className="mt-3 hidden md:block p-2 ">
            <table className="shadow-lg bg-white w-full">
              <tbody>
                <tr>
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
                  <th className="bg-blue-gray-300 border text-left px-2 py-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semi-bold text-1xl "
                    >
                      Action
                    </Typography>
                  </th>
                </tr>
                {daily.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td className="border px-2 py-2">{item.date}</td>
                      <td className="border px-2 py-2">{item.time}</td>
                      <td className="border px-2 py-2">{item.staffName}</td>
                      <td className="border px-2 py-2">
                        {item.interactionType}
                      </td>
                      <td className="border px-2 py-2">
                        {item.interactionWith}
                      </td>
                      <td className="border px-2 py-2">{item.purposeOfCall}</td>
                      <td className="border px-2 py-2">{item.phoneNumber}</td>
                      <td className="border px-2 py-2">{item.notes}</td>
                      <td className="border px-2 py-2">{item.action}</td>
                    </tr>
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
      <div className="xl:hidden lg:block overflow-y-scroll h-[80vh] p-2 px-6">
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
                    {item.date}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">Time:</Typography>
                  <Typography>{item.time}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">Staff Name:</Typography>
                  <Typography>{item.staffName}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Interaction Type:
                  </Typography>
                  <Typography>{item.interactionType}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Interaction With:
                  </Typography>
                  <Typography>{item.interactionWith}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black">
                    Purpose Of Call:
                  </Typography>
                  <Typography>{item.purposeOfCall}</Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black"> Phone Number:</Typography>
                  <Typography>{item.phoneNumber}</Typography>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <Typography className="text-black"> Notes:</Typography>
                  <Typography className="border text-end">
                    {item.notes}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <Typography className="text-black"> Actions:</Typography>
                  <Typography>{item.action}</Typography>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* add record */}
      {showAddRecord && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <Card className=" p-4 gap-4">
            <div>Add Daily Tracker</div>
            <div className="w-72 mt-3">
              <Select label="Select Type Of Interaction">
                <Option>Call To</Option>
                <Option>Call From</Option>
                <Option>Email Exchange</Option>
                <Option>Meeting with</Option>
              </Select>
            </div>
            <div>
              <Input label="Interaction With" />
            </div>
            <div>
              <Input label=" Purpose Of Call" />
            </div>
            <div>
              <Input label=" Phone Number" />
            </div>
            <div>
              <Input label=" Notes" />
            </div>
            <div className="flex items-center justify-between">
              <Button onClick={handleExitClick} variant="outlined">
                Exit
              </Button>
              <Button>Submit</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default DailyTracker;
