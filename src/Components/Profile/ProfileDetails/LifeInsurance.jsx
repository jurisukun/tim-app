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
        <div className="text-lg font-medium text-blue-gray-800 text-center mb-6">
          Life Insurance
        </div>
        <div className="h-[50vh] p-2 overflow-y-scroll">
          <div className="flex items-center gap-3">
            <Typography className="text-blue-gray-600 text-[15px]">
              Life Insurance Status
            </Typography>
            <div className="w-full">
              <Select label="Select">
                <Option>Yes</Option>
                <Option>No</Option>
              </Select>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Select label="Assignment Select">
              <Option>Assignment Form</Option>
              <Option>Assignment Form Multiple Beneficiaries</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Input label="Insert Link" />
          </div>
          <div className="flex items-center">
            <Typography className="text-blue-gray-600 text-[15px] mt-3">
              Claim Form
            </Typography>
            <Input label="Insert Link and Label" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Decedent/Insured's Name" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Insurance Name" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Telephone" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Police Number" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="SSN" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Claim Number" />
          </div>
          <div className="flex items-center mt-3">
            <Input label="Beneficiaries" />
          </div>
          <div className="w-full mt-3">
            <Select label="Contacted Life Insurance">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="flex items-center mt-3">
            <Typography className="text-blue-gray-600 text-[15px] ">
              Date Of Contact
            </Typography>
            <Input type="date" />
          </div>
          <div className="text-center mt-4">
            <Typography className="text-blue-gray-900 text-[15px] ">
              Document Requested by Life Insurance
            </Typography>
          </div>

          <div className="mt-3">
            <Select label="Assignment Form">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Select label="Claim Form">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Select label=" Death Certificate">
              <Option>Yes</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="mt-3">
            <Select label="Type">
              <Option>Original</Option>
              <Option>Copies</Option>
            </Select>
          </div>

          <div className="flex items-center mt-3">
            <Input label="Email, Fax, and Mailing info" />
          </div>

          <div className="flex items-center mt-3">
            <Typography className="text-blue-gray-600 text-[15px] ">
              Date documents were sent
            </Typography>
            <Input type="date" />
          </div>

          <div className="flex items-center mt-3">
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
