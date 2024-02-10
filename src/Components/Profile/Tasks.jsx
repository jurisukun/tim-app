import {
  Button,
  Card,
  Select,
  Option,
  Input,
  Typography,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleTaskClick = () => {
    setIsTaskModalOpen(true);
  };

  const handleClosetaskModal = () => {
    setIsTaskModalOpen(false);
  };
  return (
    <div className="w-full height-e relative p-4 ">
      <div className="text-xl font-medium text-blue-gray-800 flex items-center gap-3 ">
        <div className="gap-4 flex items-center">
          Task Lists
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={handleAddTaskClick}>
            Add task
          </Button>
        </div>
        <div>
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={handleTaskClick}>
            Assign Task
          </Button>
        </div>
      </div>

      {/* add task */}

      {isModalOpen && (
        <div className="w-full h-full  flex items-center justify-center absolute top-0 bg-black/80 left-0 z-10">
          <div className="w-[80%] md:w-[40%] lg:w-[50%] xl:w-[25%] ">
            <Card className=" p-4 gap-4">
              <div className="text-center text-xl font-semi-bold">Add Task</div>

              <div className="">
                <Input label="Task Description" />
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
                <Button onClick={handleCloseModal}>Exit</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
      {/* assign task */}
      {isTaskModalOpen && (
        <div className="w-full h-full  flex items-center justify-center absolute top-0 bg-black/80 left-0 z-10">
          <div className="w-[80%] md:w-[40%] lg:w-[50%] xl:w-[25%] ">
            <Card className=" p-4 gap-4">
              <div className="text-center text-xl font-semi-bold">
                Assign Task
              </div>

              <div className="">
                <Input label="Date" type="date" />
              </div>
              <div>
                <Select label="Select Status">
                  <Option>Pending</Option>
                  <Option>In Progress</Option>
                  <Option>Completed</Option>
                  <Option>Blocked</Option>
                </Select>
              </div>
              <div>
                <Select label="Assign Task To">
                  <Option>Lawrence Neil</Option>
                  <Option>Julius Abucejo</Option>
                  <Option>Kevin Aquino</Option>
                  <Option>Patrick Bongalos</Option>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Button>Submit</Button>
                <Button onClick={handleClosetaskModal}>Exit</Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* content */}
      <Card className="mt-3 hidden xl:block h-[80vh] overflow-y-scroll">
        {" "}
        <table className="shadow-lg bg-white w-full">
          <tr>
            <th className="bg-blue-gray-300 border  text-left px-2 py-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semi-bold text-1xl ">
                Task
              </Typography>
            </th>
            <th className="bg-blue-gray-300 border text-left px-2 py-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semi-bold text-1xl ">
                Due Date
              </Typography>
            </th>
            <th className="bg-blue-gray-300 border text-left px-2 py-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semi-bold text-1xl ">
                Status
              </Typography>
            </th>
            <th className="bg-blue-gray-300 border text-left px-2 py-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semi-bold text-1xl ">
                Task Group
              </Typography>
            </th>
            <th className="bg-blue-gray-300 border text-left px-2 py-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semi-bold text-1xl ">
                Notes
              </Typography>
            </th>
          </tr>
          <tr>
            <td className="border px-2 py-2">
              <div className="flex items-center">
                <Checkbox />
                <p>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </p>
              </div>
            </td>
            <td className="border px-2 py-2">
              <Input type="date" />
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Select label="Status">
                  <Option>Pending</Option>
                  <Option>In Progress</Option>
                  <Option>Completed</Option>
                  <Option>Blocked</Option>
                </Select>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div className="flex flex-col gap-3">
                <Select label="Assign To">
                  <Option>Lawrence Neil</Option>
                  <Option>Kevin Aquino</Option>
                  <Option>Juls Abucejo</Option>
                  <Option>Patrick Bongalos</Option>
                </Select>
                <Button size="sm">Go</Button>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Textarea label="Message" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-2">
              <div className="flex items-center ">
                <Checkbox />
                <p>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </p>
              </div>
            </td>
            <td className="border px-2 py-2">
              <Input type="date" />
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Select label="Status">
                  <Option>Pending</Option>
                  <Option>In Progress</Option>
                  <Option>Completed</Option>
                  <Option>Blocked</Option>
                </Select>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div className="flex flex-col gap-3">
                <Select label="Assign To">
                  <Option>Lawrence Neil</Option>
                  <Option>Kevin Aquino</Option>
                  <Option>Juls Abucejo</Option>
                  <Option>Patrick Bongalos</Option>
                </Select>
                <Button size="sm">Go</Button>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Textarea label="Message" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-2">
              <div className="flex items-center ">
                <Checkbox />
                <p>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </p>
              </div>
            </td>
            <td className="border px-2 py-2">
              <Input type="date" />
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Select label="Status">
                  <Option>Pending</Option>
                  <Option>In Progress</Option>
                  <Option>Completed</Option>
                  <Option>Blocked</Option>
                </Select>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div className="flex flex-col gap-3">
                <Select label="Assign To">
                  <Option>Lawrence Neil</Option>
                  <Option>Kevin Aquino</Option>
                  <Option>Juls Abucejo</Option>
                  <Option>Patrick Bongalos</Option>
                </Select>
                <Button size="sm">Go</Button>
              </div>
            </td>
            <td className="border px-2 py-2">
              <div>
                {" "}
                <Textarea label="Message" />
              </div>
            </td>
          </tr>
        </table>
      </Card>

      {/* mobile view */}
      <div className="xl:hidden lg:block overflow-y-scroll  w-full h-[80vh] mt-3 p-1">
        <div className="  grid  md:grid-cols-2 gap-2  grid-cols-1   ">
          <Card className="mt-3 d-b  p-2 md:w-full w-[100%] mx-auto ">
            {" "}
            <div className="flex items-start gap-3">
              <Typography className="text-black w-[90px]">Task:</Typography>
              <div className="flex items-start ">
                <Checkbox />
                <Typography>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black w-[90px]">Due Date:</Typography>
              <Input type="date" className="w-full" />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Typography className="text-black w-[90px]">Status:</Typography>
              <Select label="Status">
                <Option>Pending</Option>
                <Option>In Progress</Option>
                <Option>Completed</Option>
                <Option>Blocked</Option>
              </Select>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[100px]">
                Task Group:
              </Typography>
              <Select label="Assign To">
                <Option>Lawrence Neil</Option>
                <Option>Kevin Aquino</Option>
                <Option>Juls Abucejo</Option>
                <Option>Patrick Bongalos</Option>
              </Select>
              <Button
                size="sm"
                className="w-[20px] flex items-center justify-center">
                Go
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[90px]">Notes:</Typography>
              <Textarea label="Message" />
            </div>
          </Card>
          <Card className="mt-3 d-b  p-2 md:w-full w-[100%] mx-auto ">
            {" "}
            <div className="flex items-start gap-3">
              <Typography className="text-black w-[90px]">Task:</Typography>
              <div className="flex items-start ">
                <Checkbox />
                <Typography>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black w-[90px]">Due Date:</Typography>
              <Input type="date" className="w-full" />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Typography className="text-black w-[90px]">Status:</Typography>
              <Select label="Status">
                <Option>Pending</Option>
                <Option>In Progress</Option>
                <Option>Completed</Option>
                <Option>Blocked</Option>
              </Select>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[100px]">
                Task Group:
              </Typography>
              <Select label="Assign To">
                <Option>Lawrence Neil</Option>
                <Option>Kevin Aquino</Option>
                <Option>Juls Abucejo</Option>
                <Option>Patrick Bongalos</Option>
              </Select>
              <Button
                className="w-[20px] flex items-center justify-center"
                size="sm">
                Go
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[90px]">Notes:</Typography>
              <Textarea label="Message" />
            </div>
          </Card>
          <Card className="mt-3 d-b  p-2 md:w-full w-[100%] mx-auto ">
            {" "}
            <div className="flex items-start gap-3">
              <Typography className="text-black w-[90px]">Task:</Typography>
              <div className="flex items-start ">
                <Checkbox />
                <Typography>
                  Determine Intentions for the funeral service (One day
                  viewing/service or a two day funeral service. Find out the
                  location of Services. Will it be a burial or cremation etc.)
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Typography className="text-black w-[90px]">Due Date:</Typography>
              <Input type="date" className="w-full" />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Typography className="text-black w-[90px]">Status:</Typography>
              <Select label="Status">
                <Option>Pending</Option>
                <Option>In Progress</Option>
                <Option>Completed</Option>
                <Option>Blocked</Option>
              </Select>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[100px]">
                Task Group:
              </Typography>
              <Select label="Assign To">
                <Option>Lawrence Neil</Option>
                <Option>Kevin Aquino</Option>
                <Option>Juls Abucejo</Option>
                <Option>Patrick Bongalos</Option>
              </Select>
              <Button
                className="w-[20px] flex items-center justify-center"
                size="sm">
                Go
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Typography className="text-black w-[90px]">Notes:</Typography>
              <Textarea label="Message" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
