import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  Option,
  Checkbox,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";

import { useSetAtom, useAtomValue, useAtom } from "jotai";
import { RESET } from "jotai/utils";
import {
  openClient,
  newClient,
  newPrimaryIntake,
  newServiceDetails,
  sideBarProfileData,
} from "../../utils/jotai/atoms";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { toast } from "react-toastify";

import {
  ClientSchema,
  PrimaryIntakeSchema,
  ServiceDetailsSchema,
} from "../../utils/zod/validation";

export function AddClientTab() {
  const setClient = useSetAtom(newClient);
  const sidebarprofiledata = useAtomValue(sideBarProfileData);

  return (
    <div>
      <Card className=" p-4 ">
        <CardBody className="p-2">
          <div className="w-full mt-3">
            <Input
              defaultValue={sidebarprofiledata?.firstname ?? ""}
              label="Contact Name"
              onChange={(e) =>
                setClient((prev) => ({ ...prev, firstname: e.target.value }))
              }
            />
          </div>
          <div className="w-full mt-3">
            <Select label="Relationship">
              <Option>Admin</Option>
              <Option>Executive</Option>
              <Option>Operations</Option>
            </Select>
          </div>
          <div className="w-full mt-3">
            <Input
              label="Telephone"
              defaultValue={sidebarprofiledata?.telephone ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Email"
              defaultValue={sidebarprofiledata?.email ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Decedent Name"
              defaultValue={sidebarprofiledata?.decname ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Select
              label="Inquiry Status"
              defaultValue={sidebarprofiledata?.inquirystatus ?? ""}
            >
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
            <Select
              label="Service Type"
              defaultValue={sidebarprofiledata?.servicetype ?? ""}
            >
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
    <div className="max-h-[400px] overflow-y-scroll">
      <Card className="p-4 h-full">
        <CardBody className="w-full p-0 mt-4">
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Case Number" />
          </div>
          <div className="w-full mt-3 flex items-end justify-end">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
                Date Of Death
              </Typography> */}

            <Input className="" type="date" label="Date of Death" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Died At" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Floor/Apartment Number" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="City" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Statue" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Zip" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Country" />
          </div>
          <div className="w-full mt-3">
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
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Next Of Kin/Authorizer" />
          </div>
          <div className=" w-full mt-4">
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
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="NOK/Authorizer Address" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Email" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Telephone" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Additional Contact " />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Facial Hair/ Hair Instructions" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export function ServiceDetailsTab() {
  return (
    <div className="max-h-[400px] overflow-y-scroll">
      <Card className="p-4 h-full">
        <CardBody className="p-0 w-full mt-4 ">
          <div className="w-full mt-3 flex items-center">
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
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Church Affliation (if Any)" />
          </div>
          <div className="w-full mt-3">
            <Input label="Viewing Location" />
          </div>
          <div className="w-full mt-3">
            <Input label="Viewing Address" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing Date
            </Typography> */}
            <Input className="" type="date" label="  Viewing Date" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing Time
            </Typography> */}
            <Input className="" type="time" label="  Viewing Time" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing End Time
            </Typography> */}
            <Input className="" type="time" label="  Viewing End Time" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Service Location" />
          </div>
          <div className="w-full mt-3">
            <Input label="Service Address" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service Date
            </Typography> */}
            <Input className="" type="date" label="  Service Date" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service Time
            </Typography> */}
            <Input className="" type="time" label="   Service Time" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service End Time
            </Typography> */}
            <Input className="" type="time" label="Service End Time" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Select label="Cemetery Status">
              <Option>Family to Choose</Option>
              <Option>Family to Select</Option>
              <Option> Family Owns </Option>
              <Option>Cemetery Selected</Option>
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input label="Cemetery Name" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Input label="Cemetery Address" />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Select label="Cemetery Booking">
              <Option>Yes</Option>
              <Option>No</Option>
              <Option> Pending </Option>
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Cemetery Arrival Date
            </Typography> */}
            <Input className="" type="date" label="Cemetery Arrival Date" />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Cemetery Arrival Time
            </Typography> */}
            <Input
              className=""
              type="time"
              label="
              Cemetery
              Arrival
              Time"
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            <Select label="Type of Disposition">
              <Option>Burial</Option>
              <Option>Cremation</Option>
              <Option> Entombment </Option>
            </Select>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function AddClient() {
  const setopenclient = useSetAtom(openClient);
  const [newclient] = useAtom(newClient);
  const [newprimaryintake] = useAtom(newPrimaryIntake);
  const [newservicedetails] = useAtom(newServiceDetails);

  //resetter
  const resetclient = useSetAtom(newClient);
  const resetprimaryintake = useSetAtom(newPrimaryIntake);
  const resetservicedetails = useSetAtom(newServiceDetails);

  const defaultclientdata = useAtomValue(sideBarProfileData);

  const reset = () => {
    resetclient(RESET);
    resetprimaryintake(RESET);
    resetservicedetails(RESET);
    setopenclient(false);
  };

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
  console.log(newclient);

  const handleAddClient = async () => {
    try {
      const client = ClientSchema.safeParse(newclient);
      const primaryintake = PrimaryIntakeSchema.safeParse(newprimaryintake);
      const servicedetails = ServiceDetailsSchema.safeParse(newservicedetails);

      console.log(client);

      let execute;
      if (defaultclientdata) {
        execute = customfetch(
          `http://localhost:3000/clients/${defaultclientdata?.id}`,
          "PUT",
          {
            client: client.data,
            primaryintake: primaryintake.data,
            servicedetails: servicedetails.data,
          }
        );
      } else {
        execute = customfetch(`http://localhost:3000/clients`, "POST", {
          client: client.data,
          primaryintake: primaryintake.data,
          servicedetails: servicedetails.data,
        });
      }
      console.log(execute);

      execute
        .then((res) => {
          console.log(res);
          if (res?.error) {
            toast.error(res?.message);
            return;
          }
          toast.success(res?.message);
          reset();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message);
        });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black/70 z-50">
      <Tabs value="ADD CLIENT" className="max-w-[400px] w-[85%] max-h-[95%]">
        <TabsHeader className="flex gap-2 items-center justify-center">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="p-2 w-[30%] h-full"
              activeClassName="text-red-800 h-full"
            >
              <Typography className="w -full text-center  text-wrap px-2 text-[min(5vw,12px)] font-semibold ">
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
              className="bg-white rounded-md mt-2 "
            >
              {
                <div className="relative ">
                  {desc}
                  <div className="mt-4 flex items-center justify-between px-2 bottom-0 w-full bg">
                    <Button
                      size="sm"
                      variant="outlined"
                      onClick={() => {
                        setopenclient(false);
                        reset();
                      }}
                    >
                      Exit
                    </Button>
                    <Button size="sm" onClick={() => handleAddClient()}>
                      Add Client
                    </Button>
                  </div>
                </div>
              }
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default AddClient;
