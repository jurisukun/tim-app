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

function AddClient() {
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false);

  const handleOpenButtonClick = () => {
    setIsAddNotesVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsAddNotesVisible(false);
  };

  // add client
  const [isAddClientVisible, setIsAddClientVisible] = useState(true);

  const handleOpenButtonClickClient = () => {
    setIsAddClientVisible(true);
    setPrimaryVisible(false);
    setServiceVisible(false);
  };

  // primary intake
  const [isPrimaryVisible, setPrimaryVisible] = useState(false);

  const handleOpenPrimary = () => {
    setPrimaryVisible(true);
    setIsAddClientVisible(false);
    setServiceVisible(false);
  };

  // Service Details
  const [isServiceVisible, setServiceVisible] = useState(false);

  const handleOpenService = () => {
    setServiceVisible(true);
    setIsAddClientVisible(false);
    setPrimaryVisible(false);
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
      <Card className="mt-6 p-4">
        <div className="flex items-center justify-evenly gap-[10px]">
          <Button
            onClick={handleOpenButtonClickClient}
            size="sm"
            className="text-[10px] bg-red-800">
            Add Client
          </Button>
          <Button
            onClick={handleOpenPrimary}
            size="sm"
            className="text-[10px]  bg-red-800">
            Primary Intake
          </Button>
          <Button
            onClick={handleOpenService}
            size="sm"
            className="text-[10px]  bg-red-800">
            Service Details
          </Button>
        </div>
        <div className=" ">
          <div className="w-full overflow-y-auto  ">
            {isAddClientVisible && (
              <div>
                <div>
                  <CardBody className="p-2">
                    <div className="text-[15px] text-black mx-2 font-semibold">
                      Add Client
                    </div>
                    <div className="w-full mt-3">
                      <Input label="Contact Name" />
                    </div>
                    <div className="w-full mt-3">
                      <Select label="Relationship">
                        <Option>Admin</Option>
                        <Option>Executive</Option>
                        <Option>Operations</Option>
                      </Select>
                    </div>
                    <div className="w-full mt-3">
                      <Input label="Telephone" />
                    </div>
                    <div className="w-full mt-3">
                      <Input label="Email" />
                    </div>
                    <div className="w-full mt-3">
                      <Input label="Decedent Name" />
                    </div>
                    <div className="w-full mt-3">
                      <Select label="Inquiry Status">
                        <Option>At-need</Option>
                        <Option>Pre-need</Option>
                        <Option>Merchandise</Option>
                        <Option>Miscellaneous</Option>
                        <Option>Pre-need to At-need</Option>
                        <Option>Pending Pre-need</Option>
                        <Option>Pricing for At-need</Option>
                        <Option>Pricing for Pre-need</Option>
                      </Select>
                    </div>
                    <div className=" w-full mt-4">
                      <Select label="Service Type">
                        <div className="flex items-center gap-3 my-2">
                          <div className="flex items-center justify-center">
                            <Checkbox />
                            <Typography className="text-sm">
                              1 Day Cremation and memorial service
                            </Typography>
                          </div>
                          <Button size="sm" className=" bg-gray-800">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center justify-center">
                            <Checkbox />
                            <Typography className="text-sm">
                              1 Day Cremation and memorial service
                            </Typography>
                          </div>
                          <Button size="sm" className=" bg-gray-800">
                            View
                          </Button>
                        </div>
                      </Select>
                    </div>
                  </CardBody>
                </div>

                <div className="flex items-center justify-evenly w-full mt-4">
                  <Button size="sm">Add Client</Button>
                  <Button size="sm" onClick={handleOpenButtonClick}>
                    Add Notes
                  </Button>
                  <Button size="sm">Exit</Button>
                </div>
              </div>
            )}
          </div>
          {isPrimaryVisible && (
            <div className=" lg:h-[60vh] md:h-[50vh] h-[70vh] w-full overflow-y-auto ">
              <div>
                <div>
                  <CardBody className="w-full p-0 mt-4">
                    <div className="text-[15px] text-black mx-2 font-semibold">
                      Primary Intake
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Case Number" />
                    </div>
                    <div className="w-80 mt-3 flex items-center justify-evenly">
                      <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                        Date Of Death
                      </Typography>
                      <Input className="" type="date" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Died At" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Floor/Apartment Number" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="City" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Statue" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Zip" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Country" />
                    </div>
                    <div className="w-80 mt-3">
                      <Select label="Marital Status">
                        <Option>Single (Never Maried)</Option>
                        <Option>Married</Option>
                        <Option>Married but seperated</Option>
                        <Option>Divorced</Option>
                        <Option>Widowed</Option>
                        <Option>Pending Pre-need</Option>
                        <Option>Pricing for At-need</Option>
                        <Option>Pricing for Pre-need</Option>
                      </Select>
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Next Of Kin / Authorizer" />
                    </div>
                    <div className=" w-80 mt-4">
                      <Select label="Relationship">
                        <Option>Self</Option>
                        <Option>Auhorized Guardian</Option>
                        <Option>Husband</Option>
                        <Option>Wife</Option>
                        <Option>Son</Option>
                        <Option> Daughter</Option>
                        <Option>Brother</Option>
                        <Option>Sister</Option>
                        <Option>Father</Option>
                        <Option> Mother</Option>
                        <Option>Niece</Option>
                        <Option>Nephew</Option>
                        <Option> Cousin</Option>
                        <Option>Friend</Option>
                        <Option>Other</Option>
                      </Select>
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Next Of Kin / Authorizer Address" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Email" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Telephone" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Additional Contact (Names of Children etc.)" />
                    </div>
                    <div className="w-80 mt-3 flex items-center">
                      <Checkbox />
                      <Input label="Facial Hair/ Hair Instructions" />
                    </div>
                  </CardBody>
                </div>
                <div className="mt-4 flex items-center justify-evenly">
                  <Button size="sm">Add Client</Button>
                  <Button size="sm" onClick={handleOpenButtonClick}>
                    Add Notes
                  </Button>
                  <Button size="sm">Exit</Button>
                </div>
              </div>
            </div>
          )}
          {isServiceVisible && (
            <div>
              <div className=" lg:h-[60vh] md:h-[50vh] w-full h-[60vh] overflow-y-auto  ">
                <CardBody className="p-0 w-full mt-4">
                  <div className="text-[15px] text-black font-semibold">
                    Service Details
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Checkbox />
                    <Select label="Religion">
                      <Option>Christian</Option>
                      <Option>Catholic</Option>
                      <Option> Seventh Day Adventist</Option>
                      <Option>Jehovah Witness</Option>
                      <Option>Muslim</Option>
                      <Option>Other</Option>
                      <Option> Unknown</Option>
                    </Select>
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Checkbox />
                    <Input label="Church Affliation (if Any)" />
                  </div>
                  <div className="w-80 mt-3">
                    <Input label="Viewing Location" />
                  </div>
                  <div className="w-80 mt-3">
                    <Input label="Viewing Address" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Viewing Date
                    </Typography>
                    <Input className="" type="date" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Viewing Time
                    </Typography>
                    <Input className="" type="time" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Viewing End Time
                    </Typography>
                    <Input className="" type="time" />
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Checkbox />
                    <Input label="Service Location" />
                  </div>
                  <div className="w-80 mt-3">
                    <Input label="Service Address" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Service Date
                    </Typography>
                    <Input className="" type="date" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Service Time
                    </Typography>
                    <Input className="" type="time" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Service End Time
                    </Typography>
                    <Input className="" type="time" />
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Checkbox />
                    <Select label="Cemetery Status">
                      <Option>Family to Choose</Option>
                      <Option>Family to Select</Option>
                      <Option> Family Owns </Option>
                      <Option>Cemetery Selected</Option>
                    </Select>
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Checkbox />
                    <Input label="Cemetery Name" />
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Input label="Cemetery Address" />
                  </div>
                  <div className="w-80 mt-3 flex items-center">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Cemetery Booking
                    </Typography>
                    <Select label="Select">
                      <Option>Yes</Option>
                      <Option>No</Option>
                      <Option> Pending </Option>
                    </Select>
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Cemetery Arrival Date
                    </Typography>
                    <Input className="" type="date" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Cemetery Arrival Time
                    </Typography>
                    <Input className="" type="time" />
                  </div>
                  <div className="w-80 mt-3 flex items-center justify-evenly">
                    <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                      Type Of Disposition
                    </Typography>
                    <Select label="Select">
                      <Option>Burial</Option>
                      <Option>Cremation</Option>
                      <Option> Entombment </Option>
                    </Select>
                  </div>
                </CardBody>
                <div className="mt-4 flex items-center justify-evenly">
                  <Button size="sm">Add Client</Button>
                  <Button size="sm" onClick={handleOpenButtonClick}>
                    Add Notes
                  </Button>
                  <Button size="sm"> Exit</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default AddClient;
