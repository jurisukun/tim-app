import {
  Button,
  Card,
  Select,
  Option,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
function DailyTracker() {
  const [showAddRecord, setShowAddRecord] = useState(false);

  const handleAddRecordClick = () => {
    setShowAddRecord(true);
  };

  const handleExitClick = () => {
    setShowAddRecord(false);
  };
  return (
    <div className="w-full height-e relative p-4">
      <div className="text-xl font-medium text-blue-gray-800 flex items-center justify-between">
        Daily Tracker
        <Button
          size="sm"
          onClick={handleAddRecordClick}
          className="bg-blue-gray-700"
        >
          Add Record
        </Button>
      </div>
      <Card className="mt-3 hidden lg:block h-[85vh] overflow-y-scroll">
        {" "}
        <table className="shadow-lg bg-white w-full">
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
          <tr>
            <td className="border px-2 py-2">Feruary 10, 2024</td>
            <td className="border px-2 py-2">Alasyete ng gabi</td>
            <td className="border px-2 py-2">Kulas</td>
            <td className="border px-2 py-2">Diko alam</td>
            <td className="border px-2 py-2">Diko alam</td>
            <td className="border px-2 py-2">Mangungutang</td>
            <td className="border px-2 py-2">093947283483247</td>
            <td className="border px-2 py-2">Wala </td>
            <td className="border px-2 py-2">Pindot </td>
          </tr>
        </table>
      </Card>

      {/* mobile view */}
      <div className="lg:hidden block overflow-y-scroll h-[80vh] p-2">
        {" "}
        <div className="mt-3  grid md:grid-cols-3 grid-cols-1 gap-5  ">
          <Card className="mt-3 d-b  p-2 ">
            <div className="flex items-center gap-3">
              <Typography className="text-black">Date:</Typography>
              <Typography>February 10, 2024</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Time:</Typography>
              <Typography>Alasyete ng gabi</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Staff Name:</Typography>
              <Typography>Kulas</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction Type:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction With:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Purpose Of Call:</Typography>
              <Typography>utang</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Phone Number:</Typography>
              <Typography>Notes</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Actions:</Typography>
              <Typography>Pindot</Typography>
            </div>
          </Card>
          <Card className="mt-3 shadoww p-2">
            <div className="flex items-center gap-3">
              <Typography className="text-black">Date:</Typography>
              <Typography>February 10, 2024</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Time:</Typography>
              <Typography>Alasyete ng gabi</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Staff Name:</Typography>
              <Typography>Kulas</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction Type:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction With:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Purpose Of Call:</Typography>
              <Typography>utang</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Phone Number:</Typography>
              <Typography>Notes</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Actions:</Typography>
              <Typography>Pindot</Typography>
            </div>
          </Card>
          <Card className="mt-3 shadoww p-2">
            <div className="flex items-center gap-3">
              <Typography className="text-black">Date:</Typography>
              <Typography>February 10, 2024</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Time:</Typography>
              <Typography>Alasyete ng gabi</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Staff Name:</Typography>
              <Typography>Kulas</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction Type:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black">Interaction With:</Typography>
              <Typography>Wala</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Purpose Of Call:</Typography>
              <Typography>utang</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Phone Number:</Typography>
              <Typography>Notes</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black"> Actions:</Typography>
              <Typography>Pindot</Typography>
            </div>
          </Card>
        </div>
      </div>

      {/* add record */}
      {showAddRecord && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 bg-black/80 left-0 z-5">
          <Card className=" p-4 gap-4">
            <div>Add Daily Tracker</div>
            <div className="w-72 mt-3">
              <Select label="Select Type Of Interaction">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
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
              <Button>Submit</Button>
              <Button onClick={handleExitClick}>Exit</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default DailyTracker;
