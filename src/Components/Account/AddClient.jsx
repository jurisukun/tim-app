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
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

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

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { format, toDate } from "date-fns";

export const handleChange = (e, setter, name) => {
  if (name)
    setter((prev) => ({
      ...prev,
      [name]: e,
    }));
  else
    setter((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
};

const relationship = [
  { label: "Self" },
  { label: "Auhorized Guardian" },
  { label: "Husband" },
  { label: "Wife" },
  { label: "Son" },
  { label: "Daughter" },
  { label: "Brother" },
  { label: "Sister" },
  { label: "Father" },
  { label: "Mother" },
  { label: "Niece" },
  { label: "Nephew" },
  { label: "Cousin" },
  { label: "Friend" },
  { label: "Other" },
];

const inquirystatus = [
  { label: "At-need" },
  { label: "Pre-need" },
  { label: "Merchandise" },
  { label: "Miscellaneous" },
  { label: "Pre-need to At-need" },
  { label: "Pending Pre-need" },
  { label: "Pricing for At-need" },
  { label: "Pricing for Pre-need" },
];

const maritalstatus = [
  { label: "Single (Never Maried)" },
  { label: "Married" },
  { label: "Married but seperated" },
  { label: "Divorced" },
  { label: "Widowed" },
];

const religion = [
  { label: "Christian" },
  { label: "Catholic" },
  { label: "Seventh Day Adventist" },
  { label: "Jehovah's Witness" },
  { label: "Muslim" },
  { label: "Other" },
  { label: "Unknown" },
];

export function AddClientTab({ defaultdata }) {
  const setClient = useSetAtom(newClient);
  const [selectedservice, setselectedservice] = useState([]);

  const selectedtexts = selectedservice.map((item) => item.label).join(", ");

  useEffect(() => {
    if (defaultdata) {
      setClient((prev) => ({ ...prev, ...defaultdata }));
    }
  }, [defaultdata]);

  return (
    <div>
      <Card className=" p-4 ">
        <CardBody className="p-2">
          <div className="w-full mt-3">
            <Input
              defaultValue={defaultdata?.firstname ?? ""}
              label="Contact Name"
              name="firstname"
              onChange={(e) => handleChange(e, setClient)}
            />
          </div>
          <div className="w-full mt-3">
            <Select
              value={defaultdata?.relationship ?? ""}
              label="Relationship"
              name="relationship"
              menuProps={{ className: "max-h-[200px]" }}
              onChange={(e) => handleChange(e, setClient, "relationship")}
            >
              {relationship.map((item, index) => (
                <Option name="relationship" key={index} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full mt-3">
            <Input
              name="telephone"
              onChange={(e) => handleChange(e, setClient)}
              label="Telephone"
              defaultValue={defaultdata?.telephone ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Email"
              name="email"
              onChange={(e) => handleChange(e, setClient)}
              defaultValue={defaultdata?.email ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Decedent Name"
              name="decname"
              onChange={(e) => handleChange(e, setClient)}
              defaultValue={defaultdata?.decname ?? ""}
            />
          </div>
          <div className="w-full mt-3">
            <Select
              label="Inquiry Status"
              name="inquirystatus"
              onChange={(e) => handleChange(e, setClient, "inquirystatus")}
              value={defaultdata?.inquirystatus ?? ""}
            >
              {inquirystatus.map((item, index) => (
                <Option key={index} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className=" w-full mt-4">
            <Select
              className="relative"
              label={`Service Type - (${selectedservice.length}) selected`}
              value={
                <Typography className="relative overflow-hidden max-h-[30px] text-[12px] text-nowrap max-w-[200px] sm:max-w-[280px] line-clamp-1 text-ellipsis">
                  {selectedtexts}
                </Typography>
              }
            >
              <div className="flex items-center justify-center">
                <Checkbox
                  name="1 Day Cremation and memorial service"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setselectedservice((prev) => [
                        ...prev,
                        { label: e.target.name },
                      ]);
                      console.log(e.target.name);
                    } else {
                      setselectedservice((prev) =>
                        prev.filter((item) => item.label !== e.target.name)
                      );
                    }
                  }}
                />
                <Typography className="text-sm px-3 text-left">
                  1 Day Cremation and memorial service
                </Typography>

                <Button
                  size="sm"
                  className="bg-gray-800 text-xs text-center itmes-center flex justify-center"
                >
                  View
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <Checkbox
                  name="2 Day Cremation and memorial service"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setselectedservice((prev) => [
                        ...prev,
                        { label: e.target.name },
                      ]);
                      console.log(e.target.name);
                    } else {
                      setselectedservice((prev) =>
                        prev.filter((item) => item.label !== e.target.name)
                      );
                    }
                  }}
                />
                <Typography className="text-sm px-3 text-left">
                  2 Day Cremation and memorial service
                </Typography>

                <Button
                  size="sm"
                  className="bg-gray-800 text-xs text-center itmes-center flex justify-center"
                >
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
export function PrimaryIntakeTab({ defaultdata }) {
  const setPrimaryIntake = useSetAtom(newPrimaryIntake);
  useEffect(() => {
    if (defaultdata) {
      setPrimaryIntake((prev) => ({ ...prev, ...defaultdata }));
    }
  }, [defaultdata]);

  return (
    <div className="max-h-[400px] overflow-y-scroll">
      <Card className="p-4 h-full">
        <CardBody className="w-full p-0 mt-4">
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              defaultValue={defaultdata?.casenumber ?? ""}
              label="Case Number"
              name="casenumber"
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-end justify-end">
            <Input
              defaultValue={
                defaultdata?.date_of_death
                  ? format(defaultdata?.date_of_death, "yyyy-MM-dd")
                  : ""
              }
              type="date"
              label="Date of Death"
              name="date_of_death"
              onChange={(e) => {
                handleChange(
                  format(
                    toDate(e.target.value),
                    "yyyy-MM-dd'T'00:00:00.000'Z'"
                  ),
                  setPrimaryIntake,
                  "date_of_death"
                );
              }}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              defaultValue={defaultdata?.died_at ?? ""}
              label="Died At"
              name="died_at"
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              defaultValue={defaultdata?.apartment_number ?? ""}
              label="Floor/Apartment Number"
              name="apartment_number"
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              defaultValue={defaultdata?.death_city ?? ""}
              label="City"
              name="death_city"
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="State"
              name="death_state"
              defaultValue={defaultdata?.death_state ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Zip"
              name="death_zip"
              defaultValue={defaultdata?.death_zip ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Country"
              name="death_country"
              defaultValue={defaultdata?.death_country ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3">
            <Select
              label="Marital Status"
              value={defaultdata?.death_marital ?? ""}
              name="death_marital"
              onChange={(e) =>
                handleChange(e, setPrimaryIntake, "death_marital")
              }
              containerProps={{ className: "max-h-200px" }}
            >
              {maritalstatus.map((item, index) => (
                <Option key={index} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Next Of Kin/Authorizer"
              name="nok"
              defaultValue={defaultdata?.nok ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className=" w-full mt-4">
            <Select
              label="Relationship"
              value={defaultdata?.intake_relationship ?? ""}
              name="intake_relationship"
              onChange={(e) =>
                handleChange(e, setPrimaryIntake, "intake_relationship")
              }
              menuProps={{ className: "max-h-[200px]" }}
            >
              {relationship.map((item, index) => (
                <Option key={index} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="NOK/Authorizer Address"
              name="nok_address"
              defaultValue={defaultdata?.nok_address ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Email"
              name="intake_email"
              defaultValue={defaultdata?.intake_email ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Telephone"
              name="intake_telephone"
              defaultValue={defaultdata?.intake_telephone ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Additional Contact "
              name="additional_contact"
              defaultValue={defaultdata?.additional_contact ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Facial Hair/ Hair Instructions"
              name="facial_hair"
              defaultValue={defaultdata?.facial_hair ?? ""}
              onChange={(e) => handleChange(e, setPrimaryIntake)}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export function ServiceDetailsTab({ defaultdata }) {
  console.log(defaultdata);
  const setPrimaryDetails = useSetAtom(newServiceDetails);
  useEffect(() => {
    if (defaultdata) {
      setPrimaryDetails((prev) => ({ ...prev, ...defaultdata }));
    }
  }, [defaultdata]);
  return (
    <div className="max-h-[400px] overflow-y-scroll">
      <Card className="p-4 h-full">
        <CardBody className="p-0 w-full mt-4 ">
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Select
              value={defaultdata?.religion ?? ""}
              menuProps={{ className: "max-h-[200px]" }}
              label="Religion"
              onChange={(e) => handleChange(e, setPrimaryDetails, "religion")}
            >
              {religion.map((item, index) => (
                <Option key={index} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              defaultValue={defaultdata?.church_affil ?? ""}
              label="Church Affliation (if Any)"
              name="church_affil"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Viewing Location"
              defaultValue={defaultdata?.viewing_location ?? ""}
              name="viewing_location"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Viewing Address"
              defaultValue={defaultdata?.viewing_info ?? ""}
              name="viewing_info"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing Date
            </Typography> */}
            <Input
              className=""
              type="date"
              label="  Viewing Date"
              defaultValue={
                defaultdata?.viewing_date
                  ? format(defaultdata?.viewing_date, "yyyy-MM-dd")
                  : ""
              }
              name="viewing_date"
              onChange={(e) =>
                handleChange(
                  format(
                    toDate(e.target.value),
                    "yyyy-MM-dd'T'00:00:00.000'Z'"
                  ),
                  setPrimaryDetails,
                  "viewing_date"
                )
              }
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing Time
            </Typography> */}
            <Input
              className=""
              type="time"
              label="  Viewing Time"
              defaultValue={defaultdata?.viewing_time ?? ""}
              name="viewing_time"
              onChange={(e) => {
                console.log(typeof e.target.value);
                handleChange(e, setPrimaryDetails);
              }}
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Viewing End Time
            </Typography> */}
            <Input
              className=""
              type="time"
              label="  Viewing End Time"
              defaultValue={defaultdata?.viewing_endtime ?? ""}
              name="viewing_endtime"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Service Location"
              defaultValue={defaultdata?.service_location ?? ""}
              name="service_location"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3">
            <Input
              label="Service Address"
              defaultValue={defaultdata?.service_info ?? ""}
              name="service_info"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service Date
            </Typography> */}
            <Input
              className=""
              type="date"
              label="  Service Date"
              defaultValue={
                defaultdata?.service_date
                  ? format(defaultdata.service_date, "yyyy-MM-dd")
                  : ""
              }
              name="service_date"
              onChange={(e) =>
                handleChange(
                  format(
                    toDate(e.target.value),
                    "yyyy-MM-dd'T'00:00:00.000'Z'"
                  ),
                  setPrimaryDetails,
                  "service_date"
                )
              }
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service Time
            </Typography> */}
            <Input
              className=""
              type="time"
              label="   Service Time"
              defaultValue={defaultdata?.service_time ?? ""}
              name="service_time"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Service End Time
            </Typography> */}
            <Input
              className=""
              type="time"
              label="Service End Time"
              defaultValue={defaultdata?.service_endtime ?? ""}
              name="service_endtime"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Select
              label="Cemetery Status"
              value={defaultdata?.cemetery_status ?? ""}
              name="cemetery_status"
              onChange={(e) =>
                handleChange(e, setPrimaryDetails, "cemetery_status")
              }
            >
              <Option value="Family to Choose">Family to Choose</Option>
              <Option value="Family to Select">Family to Select</Option>
              <Option value="Family Owns"> Family Owns </Option>
              <Option value="Cemetery Selected">Cemetery Selected</Option>
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center">
            <Checkbox />
            <Input
              label="Cemetery Name"
              defaultValue={defaultdata?.cemetery_name ?? ""}
              name="cemetery_name"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Input
              label="Cemetery Address"
              defaultValue={defaultdata?.cemetery_info ?? ""}
              name="cemetery_info"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
            />
          </div>
          <div className="w-full mt-3 flex items-center">
            <Select
              label="Cemetery Booking"
              value={defaultdata?.cemetery_booking ?? ""}
              name="cemetery_booking"
              onChange={(e) =>
                handleChange(e, setPrimaryDetails, "cemetery_booking")
              }
            >
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
              <Option value="Pending"> Pending </Option>
            </Select>
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Cemetery Arrival Date
            </Typography> */}
            <Input
              type="date"
              label="Cemetery Arrival Date"
              defaultValue={
                defaultdata?.arrival_date
                  ? format(defaultdata?.arrival_date, "yyyy-MM-dd")
                  : ""
              }
              name="arrival_date"
              onChange={(e) =>
                handleChange(
                  format(
                    toDate(e.target.value),
                    "yyyy-MM-dd'T'00:00:00.000'Z'"
                  ),
                  setPrimaryDetails,
                  "arrival_date"
                )
              }
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            {/* <Typography className=" text-left font-medium text-[13px] text-blue-gray-500">
              Cemetery Arrival Time
            </Typography> */}
            <Input
              defaultValue={defaultdata?.arrival_time ?? ""}
              name="arrival_time"
              onChange={(e) => handleChange(e, setPrimaryDetails)}
              className=""
              type="time"
              label="
              Cemetery
              Arrival
              Time"
            />
          </div>
          <div className="w-full mt-3 flex items-center justify-evenly">
            <Select
              label="Type of Disposition"
              value={defaultdata?.type_of_disposition ?? ""}
              name="type_of_disposition"
              onChange={(e) =>
                handleChange(e, setPrimaryDetails, "type_of_disposition")
              }
            >
              <Option value="Burial">Burial</Option>
              <Option value="Cremation">Cremation</Option>
              <Option value="Entombment"> Entombment </Option>
            </Select>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function AddClient() {
  const setopenclient = useSetAtom(openClient);
  const [newclient, setclient] = useAtom(newClient);
  const [newprimaryintake, setprimaryintake] = useAtom(newPrimaryIntake);
  const [newservicedetails, setservicedetails] = useAtom(newServiceDetails);

  //resetter
  const resetclient = useSetAtom(newClient);
  const resetprimaryintake = useSetAtom(newPrimaryIntake);
  const resetservicedetails = useSetAtom(newServiceDetails);

  const { clientId } = useParams();

  const queryClient = useQueryClient();
  const defaultclientdata = queryClient.getQueryData([
    "clientprofile",
    clientId,
  ]);

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
      desc: <AddClientTab defaultdata={defaultclientdata?.client} />,
    },
    {
      label: "Primary Intake",
      value: "PRIMARY INTAKE",
      desc: <PrimaryIntakeTab defaultdata={defaultclientdata?.primaryintake} />,
    },
    {
      label: "Service Details",
      value: "SERVICE DETAILS",
      desc: (
        <ServiceDetailsTab defaultdata={defaultclientdata?.servicedetails} />
      ),
    },
  ];

  // useEffect(() => {
  //   if (defaultclientdata) {
  //     setclient((prev) => ({ ...prev, ...defaultclientdata?.client }));
  //     setprimaryintake((prev) => ({
  //       ...prev,
  //       ...defaultclientdata?.primaryintake,
  //     }));
  //     setservicedetails((prev) => ({
  //       ...prev,
  //       ...defaultclientdata?.servicedetails,
  //     }));
  //   }
  // }, [defaultclientdata]);

  const handleAddClient = async () => {
    try {
      const client = ClientSchema.parse(newclient);
      const primaryintake = PrimaryIntakeSchema.parse(newprimaryintake);
      const servicedetails = ServiceDetailsSchema.parse(newservicedetails);

      let execute;
      if (defaultclientdata) {
        execute = customfetch(
          `http://localhost:3000/clients/${clientId}`,
          "PUT",
          {
            client,
            primaryintake,
            servicedetails,
          }
        );
      } else {
        execute = customfetch(`http://localhost:3000/clients`, "POST", {
          client,
          primaryintake,
          servicedetails,
        });
      }

      const data = await execute
        .then((res) => {
          if (res?.error) {
            toast.error(res?.message);
            return;
          }
          toast.success(res?.message);
          reset();
          return res.data;
        })
        .catch((err) => {
          toast.error(err?.message);
        });

      return data;
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const mutation = useMutation({
    mutationFn: handleAddClient,
    mutationKey: defaultclientdata
      ? ["mutateclientprofile", clientId]
      : ["mutateclientlist"],
    onSuccess: defaultclientdata
      ? (data) => {
          queryClient.setQueryData(["clientprofile", clientId], data);
        }
      : (data) => {
          queryClient.setQueryData(["clientlist"], (old) => {
            return [data, ...old];
          });
        },
  });

  // useEffect(() => {
  //   if (defaultclientdata) {
  //     setclient(defaultclientdata?.client);
  //     setprimaryintake(defaultclientdata?.primaryintake);
  //     setservicedetails(defaultclientdata?.servicedetails);
  //   }
  // }, [defaultclientdata]);

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
                    <Button size="sm" onClick={() => mutation.mutate()}>
                      {defaultclientdata ? "Edit" : "Add Client"}
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
