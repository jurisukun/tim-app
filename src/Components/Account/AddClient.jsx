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
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useState } from "react";

export function AddClientTab() {
  return (
    <div>
      <Card className="mt-6 p-4">
        <CardBody className="p-2">
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
      </Card>
    </div>
  );
}
export function PrimaryIntakeTab() {
  return (
    <div className=" lg:h-[60vh] md:h-[50vh] h-[80vh] w-full overflow-y-auto ">
      <div>
        <Card className="mt-6 p-4">
          <CardBody className="w-full p-0 mt-4">
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
        </Card>
      </div>
    </div>
  );
}
export function ServiceDetailsTab() {
  return (
    <div className=" lg:h-[60vh] md:h-[50vh] h-[70vh] w-full overflow-y-auto flex justify-center py-2">
      <div className="flex flex-col items-center ">
        <CardBody className="p-0 w-full mt-4 ">
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
      </div>
    </div>
  );
}

function AddClient({ setOpenClient }) {
  const data = [
    {
      label: "Add Client",
      value: "ADD CLIENT",
      desc: <AddClientTab />,
    },
    {
      label: "Primary Intake",
      value: "PRIMARY INTAKE",
      desc: <PrimaryIntakeTab />,
    },
    {
      label: "Service Details",
      value: "SERVICE DETAILS",
      desc: <ServiceDetailsTab />,
    },
  ];

  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black/70">
      <Tabs value="ADD CLIENT">
        <TabsHeader className="flex gap-2">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="p-2">
              <Typography className="font-medium text-nowrap px-2">
                {label}
              </Typography>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="bg-white rounded-md mt-2"
            >
              {
                <>
                  {desc}
                  <div className="mt-4 flex items-center justify-between px-2">
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => setOpenClient(false)}
                    >
                      Exit
                    </Button>
                    <Button size="sm">Add Client</Button>
                  </div>
                </>
              }
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default AddClient;
