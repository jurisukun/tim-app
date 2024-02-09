import { Button, Card, Select, Option, Input } from "@material-tailwind/react";
function Tasks() {
  return (
    <div className="w-full height-e relative p-4 ">
      <div className="text-xl font-medium text-blue-gray-800 flex items-center gap-3 ">
        <div className="gap-4 flex items-center">
          Task Lists
          <Button size="sm" className="bg-blue-gray-800">
            Add task
          </Button>
        </div>
        <div>
          <Button size="sm" className="bg-blue-gray-800">
            Assign Task
          </Button>
        </div>
      </div>

      {/* add task */}
      <div className="w-full h-full flex items-center justify-center absolute top-0 bg-black/80 left-0 z-5">
        <Card className=" p-4 gap-4">
          <div className="text-center text-xl font-semi-bold">Add Task</div>

          <div>
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
            <Button>Exit</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Tasks;
