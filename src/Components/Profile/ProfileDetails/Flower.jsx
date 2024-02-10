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
function Flower() {
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
          Flower Instructions
        </div>
        <div className="h-[50vh] p-2 overflow-y-scroll">
          <div className="flex items-center gap-4 mt-3">
            <Select label="Type">
              <Option>Casket Spray</Option>
              <Option>Standing Spray</Option>
              <Option>Completed</Option>
            </Select>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Ribbon" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Color" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Textarea label="Special Instructions" />
          </div>
          <div className="text-lg font-medium text-blue-gray-800 text-center m2-6">
            Additional Flower Order
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Select label="Type">
              <Option>Casket Spray</Option>
              <Option>Standing Spray</Option>
              <Option>Completed</Option>
            </Select>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Ribbon" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Color" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Florist" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Input label="Order Number" />
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

export default Flower;
