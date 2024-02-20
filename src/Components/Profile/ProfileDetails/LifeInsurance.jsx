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
function LifeInsurance() {
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false);

  const handleOpenButtonClick = () => {
    setIsAddNotesVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsAddNotesVisible(false);
  };
  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex justify-center items-center bg-black/70">
      {isAddNotesVisible && (
        <div className="bg-white bb lg:w-[380px] w-[350px] absolute z-10 rounded-md p-6">
          <div className="w-[100%] h-[100%] text-white-100">
            <Textarea
              label="Add Notes"
              className="h-[100%] text-black outline-white"
            />
          </div>
          <Button onClick={handleCloseButtonClick} className=" float-right ">
            Close
          </Button>
        </div>
      )}
      <Card className="p-6  max-w-[375px] w-[85%] min-w-[300px] max-h-[90%]">
        <div className="text-lg font-medium text-blue-gray-800 text-center mb-6">
          Life Insurance
        </div>
        <div className=" p-2 overflow-y-scroll flex flex-col gap-3">
          <div className="w-full">
            <Select label="Life Insurance Status">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="flex flex-col items-center gap-2 border p-3 rounded-md border-gray-600">
            <Select label="Select Assignment">
              <Option>Assignment Form</Option>
              <Option>Assignment Form Multiple Beneficiaries</Option>
            </Select>
            <div className="w-full">
              <Input label="Insert Link" />
            </div>
          </div>

          <div className="flex items-center">
            <Input label="Calim Form (insert link and label)" />
          </div>
          <div className="flex items-center ">
            <Input label="Decedent/Insured's Name" />
          </div>
          <div className="flex items-center ">
            <Input label="Insurance Name" />
          </div>
          <div className="flex items-center ">
            <Input label="Telephone" />
          </div>
          <div className="flex items-center ">
            <Input label="Police Number" />
          </div>
          <div className="flex items-center ">
            <Input label="SSN" />
          </div>
          <div className="flex items-center ">
            <Input label="Claim Number" />
          </div>
          <div className="flex items-center ">
            <Input label="Beneficiaries" />
          </div>
          <div className="w-full ">
            <Select label="Contacted Life Insurance">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="flex items-center ">
            <Input type="date" label="Date of Contact" />
          </div>
          <div className="text-center mt-4">
            <Typography className=" text-[13px] font-semibold text-red-800">
              Document Requested by Life Insurance
            </Typography>
          </div>

          <div className="">
            <Select label="Assignment Form">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>
          <div className="">
            <Select label="Claim Form">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>
          <div className="">
            <Select label=" Death Certificate">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>

          <div className="flex items-center ">
            <Input label="Email, Fax, and Mailing info" />
          </div>

          <div className="flex items-center ">
            <Input type="date" label="Date documents were sent" />
          </div>

          <div className="flex items-center ">
            <Select label="How Should be sent">
              <Option>Mail</Option>
              <Option>Fax</Option>
              <Option>Email</Option>
              <Option>Mail and Fax only</Option>
              <Option>Mail, Fax, Email</Option>
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

export default LifeInsurance;
