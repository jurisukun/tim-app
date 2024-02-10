import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Select,
  Option,
  Checkbox,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import React, { useState } from "react";
function TodoList() {
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false);

  const handleOpenButtonClick = () => {
    setIsAddNotesVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsAddNotesVisible(false);
  };
  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black/70">
      {isAddNotesVisible && (
        <div className="bg-white bb lg:w-[380px] w-[350px] absolute z-10 rounded-md p-6">
          <div className="w-[100%] h-[100%] text-white-100">
            <Textarea
              label="Add Notes"
              className="h-[100%] text-black outline-white"
            />
          </div>
          <Button
            onClick={handleCloseButtonClick}
            className=" float-right mt-3">
            Close
          </Button>
        </div>
      )}
      <Card className="p-6 h-[60vh] w-full md:w-[65%] lg:w-[45%] xl:w-[30%]">
        <div className="text-lg font-medium text-blue-gray-800 text-center m2-6">
          To Do List
        </div>
        <div className="h-[50vh] p-2 overflow-y-scroll">
          <div className="flex items-center gap-4 mt-3">
            <Typography className="text-blue-gray-600">
              Memorial Card Photo and Scripture
            </Typography>
            <Input type="date" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Typography className="text-blue-gray-600">
              Limo Pick Up Address and Drop-off
            </Typography>
            <Input type="date" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Typography className="text-blue-gray-600">
              Program Info (Order of Service and Obituary)
            </Typography>
            <Input type="date" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Typography className="text-blue-gray-600">
              Date of payment and clothing drop-off
            </Typography>
            <Input type="date" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Total" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Printed" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Select label="Preferred Method of Payment">
              <Option>Cash</Option>
              <Option>Bank Certified Check</Option>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-evenly w-full mt-4">
          <Button size="sm">Save</Button>
          <Button size="sm" onClick={handleOpenButtonClick}>
            Add Notes
          </Button>
          <Button size="sm">Exit</Button>
        </div>
      </Card>
    </div>
  );
}
export default TodoList;
