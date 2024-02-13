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

function TasksCard() {
  return (
    <Card className=" d-b  gap-2 md:w-full w-[100%] mx-auto p-6 scale-90">
      <div className="flex items-start gap-3 ">
        <div className="flex flex-col  items-start ">
          <Typography className="text-black w-[90px]">Task:</Typography>
          <div>
            <Typography className=" text-justify text-base">
              <Checkbox />
              Determine Intentions for the funeral service (One day
              viewing/service or a two day funeral service. Find out the
              location of Services. Will it be a burial or cremation etc.)
            </Typography>
          </div>
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
      <div className="flex items-center gap-3 mt-3 w-full">
        <Typography className="text-black w-[100px]">Task Group:</Typography>
        <div className="w-full flex  flex-wrap items-center justify-end gap-2">
          <Select label="Assign To">
            <Option>Lawrence Neil</Option>
            <Option>Kevin Aquino</Option>
            <Option>Juls Abucejo</Option>
            <Option>Patrick Bongalos</Option>
          </Select>
          <Button size="sm" className="flex items-center justify-center">
            Go
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Typography className="text-black w-[90px]">Notes:</Typography>
        <Textarea label="Message" />
      </div>
      <div className="flex justify-center py-3">
        <Button size="sm" className="bg-blue-gray-800">
          Save
        </Button>
      </div>
    </Card>
  );
}

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
    <div className="w-full height-e  py-4 flex flex-col justify-center overflow-hidden">
      <div className="text-xl font-medium text-blue-gray-800 flex items-center justify-between gap-4 px-8 h-[80px] shadow-md">
        <div className="gap-4 flex items-center">Task Lists</div>
        <div className="flex gap-4">
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={handleAddTaskClick}
          >
            Add task
          </Button>
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={handleTaskClick}
          >
            Assign Task
          </Button>
        </div>
      </div>

      {/* add task */}

      {isModalOpen && (
        <div className="w-full h-full  flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <div className="w-[80%] md:w-[40%] lg:w-[50%] xl:w-[25%] max-w-[300px] ">
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
                <Button onClick={handleCloseModal} variant="outlined">
                  Exit
                </Button>
                <Button>Submit</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
      {/* assign task */}
      {isTaskModalOpen && (
        <div className="w-full h-full  flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <div className="w-[80%] md:w-[40%] lg:w-[50%] xl:w-[25%] max-w-[300px]">
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
                <Button onClick={handleClosetaskModal} variant="outlined">
                  Exit
                </Button>
                <Button>Submit</Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* content */}
      <div className="lg:flex justify-center mt-3 hidden xl:block flex-1 "></div>

      {/* mobile view */}
      <div className="xl:hidden lg:block overflow-y-scroll  w-full h-[80vh] mt-3 p-1">
        <div className="  grid  md:grid-cols-2 gap-2  grid-cols-1   ">
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
