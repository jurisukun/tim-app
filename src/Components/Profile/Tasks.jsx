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

import { useEffect, useState, useRef } from "react";

import { useQueries, useQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { newTask } from "../../utils/jotai/atoms";
import { TaskSchema } from "../../utils/zod/validation";
import { handleChange } from "../Account/AddClient";

import { toast } from "react-toastify";

import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { useParams, useSearchParams } from "react-router-dom";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";

import { tasksocket } from "../../utils/context/Socketcontext";

import { useUser } from "../../utils/context/useUser";

function UserOptions() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(import.meta.env.VITE_API_URL + "/accounts");
      const data = await response.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return data?.accounts?.map((user) => {
    return <Option value={user.id}>{user.username}</Option>;
  });
}

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
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const task = useAtomValue(newTask);
  const setTask = useSetAtom(newTask);
  const { clientId } = useParams();
  const { user } = useUser();

  const [taskData, setTaskData] = useState([]);
  const taskref = useRef(null);

  const [urlparams, setUrlParams] = useSearchParams();

  const assignedtaskid = urlparams.get("id");

  const [tasks, users] = useQueries({
    queries: [
      {
        queryKey: ["tasks", clientId],
        queryFn: async () => {
          const response = await fetch(
            import.meta.env.VITE_API_URL + `/tasks/${clientId}`
          );
          const data = await response.json();
          console.log(data);
          setTaskData(data?.tasks);
          return data?.tasks;
        },
      },
      {
        queryKey: ["users"],
        queryFn: async () => {
          const response = await fetch(
            import.meta.env.VITE_API_URL + "/accounts"
          );
          const data = await response.json();
          return data?.accounts;
        },
      },
    ],
  });

  useEffect(() => {
    if (taskref.current) {
      setTimeout(() => {
        taskref.current.scrollIntoView({ behavior: "smooth" }), 1000;
      });
    }
  }, [tasks?.data]);

  if (tasks?.isLoading) {
    return <LoadingScreen />;
  }

  if (tasks?.isError) {
    return <div>Error</div>;
  }

  const saveTask = () => {
    const taskData = TaskSchema.safeParse({ ...task, createdBy: user?.userId });
    if (!taskData.success) {
      toast.error(taskData.error.message);
      return;
    }
    customfetch(import.meta.env.VITE_API_URL + "/tasks", "POST", {
      ...taskData.data,
    }).then((data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      return data.data;
    });
  };

  const updateTask = (id, prop, value) => {
    customfetch(import.meta.env.VITE_API_URL + `/tasks/${id}`, "PUT", {
      [prop]: value,
    }).then((data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      return data.data;
    });
  };

  const setTaskProps = (id, prop, value) => {
    setTaskData((prev) => {
      return prev.map((prevTask) => {
        if (prevTask.id === id) {
          prevTask[prop] = value;
        }
        return prevTask;
      });
    });
  };

  const handleSaveTask = (taskId) => {
    const task = taskData.find((task) => task.id === taskId);
    customfetch(
      import.meta.env.VITE_API_URL + `/tasks/${taskId}`,
      "PUT",
      task
    ).then((data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      if (task.assigned_to)
        tasksocket.emit("taskassigned", {
          taskId,
          userId: task.assigned_to,
          clientId,
        });

      return data.data;
    });
  };

  return (
    <div className="w-full height-e  py-4 flex flex-col justify-center overflow-hidden">
      <div className="text-xl font-medium text-blue-gray-800 flex items-center justify-between gap-4 px-8 h-[80px] shadow-md">
        <div className="gap-4 flex items-center">Task Lists</div>
        <div className="flex gap-4">
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={() => setIsModalOpen(true)}
          >
            Add task
          </Button>
          <Button
            size="sm"
            className="bg-blue-gray-800"
            onClick={() => setIsTaskModalOpen(true)}
          >
            Assign Task
          </Button>
        </div>
      </div>
      <div className="w-full p-3 h-[80vh] overflow-y-auto max-w-full">
        <table className="flex flex-col gap-2 w-full">
          <tbody className="md:flex md:flex-col sm:gap-2 grid sm:grid-cols-2 gap-5">
            <tr className=" top-0 bg-blue-gray-300 z-20 w-full hidden md:flex text-base justify-evenly text-center p-2 text-white rounded-md">
              <th>Task</th>
              <th>Due Date / Status</th>

              <th>Task Group</th>
              <th>Notes</th>
            </tr>

            {tasks?.data?.map((task) => {
              return (
                <tr
                  ref={
                    assignedtaskid && task?.id == assignedtaskid
                      ? taskref
                      : null
                  }
                  id={task?.id}
                  key={task?.id}
                  className={`border border-gray-800 mt-2 flex-col flex md:flex-row rounded-md md:max-h-[auto]  hover:border-red-800 hover:shadow-md hover:shadow-red-800 cursor-pointer box-border ${
                    assignedtaskid && task?.id == assignedtaskid
                      ? "border-orange-700  border-2"
                      : ""
                  }`}
                >
                  <td className="  text-balance p-3 h-[140px] w-full flex items-center [&>div]:w-full [&>div]:h-full ">
                    <Checkbox
                      className="w-[20px]"
                      label={task?.desc?.desc}
                      labelProps={{
                        className:
                          "text-[14px] text-gray-800 md:w-[200px] w-full flex-1 max-h-[130px] ",
                      }}
                    />
                    {/* <Typography className="text-black w-[90px]">
                      {task.desc}
                    </Typography> */}
                  </td>
                  <td className="p-3 flex flex-col gap-2">
                    <Input
                      type="date"
                      label="Due Date"
                      className="w-full"
                      defaultValue={task?.due_date?.split("T")[0]}
                      onChange={(e) => {
                        setTaskProps(task?.id, "due_date", e.target.value);
                      }}
                    />
                    <Select
                      label="Status"
                      // value={
                      //   <div
                      //     className={`${
                      //       task.status == "Pending"
                      //         ? "text-yellow-600"
                      //         : task.status == "In Progress"
                      //         ? "text-orange-600"
                      //         : task.status == "Completed"
                      //         ? "text-green-600"
                      //         : task.status == "In Progress"
                      //         ? "text-orange-600"
                      //         : "text-red-400"
                      //     }`}
                      //   >
                      //     {task?.status}
                      //   </div>
                      // }
                      value={task?.status}
                      menuProps={{ className: "bg-red-50" }}
                      onChange={(e) => setTaskProps(task?.id, "status", e)}
                    >
                      <Option value="Pending" className="text-yellow-600">
                        Pending
                      </Option>
                      <Option value="In Progress" className="text-orange-600">
                        In Progress
                      </Option>
                      <Option value="Completed" className="text-green-600">
                        Completed
                      </Option>
                      <Option value="Blocked" className="text-red-400">
                        Blocked
                      </Option>
                    </Select>
                  </td>

                  <td className="p-3">
                    <div className="w-full flex  flex-wrap items-center justify-end gap-2">
                      <Select
                        label="Assign To"
                        value={task?.assigned_to}
                        onChange={(e) => {
                          setTaskProps(task?.id, "assigned_to", e);
                        }}
                      >
                        {users?.data?.map((user) => {
                          return (
                            <Option key={user.id} value={user.id}>
                              {user.firstname + " " + user.lastname}
                            </Option>
                          );
                        })}
                        {/* <Option>Lawrence Neil</Option>
                        <Option>Kevin Aquino</Option>
                        <Option>Julius Abucejo</Option>
                        <Option>Patrick Bongalos</Option> */}
                      </Select>
                    </div>
                  </td>
                  <td className="p-3">
                    <Textarea
                      label="Notes"
                      className="min-w-[50px]"
                      defaultValue={task?.notes}
                      onChange={(e) =>
                        setTaskProps(task.id, "notes", e.target.value)
                      }
                    />
                    <Button
                      size="sm"
                      className="flex items-center justify-center"
                      onClick={() => handleSaveTask(task.id)}
                    >
                      Save
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* add task */}

      {isModalOpen && (
        <div className="w-full h-full  flex items-center justify-center absolute top-0 bg-black/80 left-0 z-50">
          <div className="w-[80%] md:w-[40%] lg:w-[50%] xl:w-[25%] max-w-[300px] ">
            <Card className=" p-4 gap-4">
              <div className="text-center text-xl font-semi-bold">Add Task</div>

              <div className="">
                <Input
                  label="Task Description"
                  name="desc"
                  onChange={(e) => handleChange(e, setTask)}
                />
              </div>
              <div>
                <Input
                  type="date"
                  label="Due Date"
                  name="due_date"
                  onChange={(e) => handleChange(e, setTask)}
                />
              </div>
              <div>
                <Select
                  label="Select Status"
                  name="status"
                  onChange={(e) => handleChange(e, setTask, "status")}
                >
                  <Option value={"Pending"}>Pending</Option>
                  <Option value={"In Progres"}>In Progress</Option>
                  <Option value={"Completed"}>Completed</Option>
                  <Option value={"Blocked"}>Blocked</Option>
                </Select>
              </div>
              <div>
                <Select
                  label="Assign to"
                  name="assigned_to"
                  // onChange={(e) => handleChange(e, setTask, "assigned_to")}
                >
                  <UserOptions />
                </Select>
              </div>
              <div>
                <Textarea
                  label=" Notes"
                  name="notes"
                  onChange={(e) => handleChange(e, setTask)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="outlined"
                >
                  Exit
                </Button>
                <Button onClick={() => saveTask()}>Submit</Button>
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
                <Button
                  onClick={() => setIsTaskModalOpen(false)}
                  variant="outlined"
                >
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
      {/* <div className="xl:hidden lg:block overflow-y-scroll  w-full h-[80vh] mt-3 p-1">
        <div className="  grid  md:grid-cols-2 gap-2  grid-cols-1   ">
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
        </div>
      </div> */}
    </div>
  );
}

export default Tasks;
