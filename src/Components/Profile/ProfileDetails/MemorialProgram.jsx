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
function MemorialProgram() {
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false);

  const handleOpenButtonClick = () => {
    setIsAddNotesVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsAddNotesVisible(false);
  };
  return (
    <div className="w-full fixed top-0 left-0  z-50 h-screen flex justify-center items-center bg-black/70">
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
            className=" float-right mt-3"
          >
            Close
          </Button>
        </div>
      )}
      <Card className="p-6  max-w-[375px] w-[85%] min-w-[300px] max-h-[95%]">
        <div className="text-lg font-medium text-blue-gray-800 text-center m2-6">
          Memorial Program Info
        </div>
        <div className="flex items-center justify-between mt-4">
          <Typography className="text-blue-gray-600">
            No Memorial Program
          </Typography>
          <Checkbox />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Typography className="text-blue-gray-600">Photo</Typography>
          <Input />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Input label="Order Of Service" />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Input label="Orbituary" />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Select label="Designed">
            <Option>Not Started</Option>
            <Option>In progress</Option>
            <Option>Completed</Option>
          </Select>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Select label="Printed">
            <Option>Not Started</Option>
            <Option>In progress</Option>
            <Option>Completed</Option>
          </Select>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <Input type="number" label="Quantity" />
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

export default MemorialProgram;
