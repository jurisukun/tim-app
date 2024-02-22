import {
  Button,
  Textarea,
  Input,
  Checkbox,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import templates from "../../lib/emailtemplates";
import { useEffect, useState } from "react";
import { set } from "date-fns";

function EmailPopover({ title, id, setter, settemplate, selected }) {
  const data = [
    { label: "Greetings", value: "greeting" },
    { label: "Authorization", value: "authorization" },
    { label: "Client Page Link Generator", value: "clientpage" },
    { label: "Funeral Preference", value: "funeralpreference" },
    { label: "Pricing", value: "pricing" },
    { label: "Booking Disclaimer", value: "bookingdisclaimer" },
    { label: "Casket Link", value: "casketlink" },
    { label: "Urn Flipbook Link", value: "urnflipbook" },
    { label: "Outro And Reminder", value: "outro" },
  ];
  const handleChange = (e) => {
    if (e.target.checked) {
      setter((prev) => [...prev, e.target.value]);
    } else {
      setter((prev) => prev.filter((item) => item !== e.target.value));
    }
  };
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <div>
          <Button
            id={id}
            size="sm"
            className="bg-blue-gray-500 text-ellipsis w-full h-full  "
            onClick={(e) => settemplate(e.target.id)}
          >
            {title}
          </Button>
        </div>
      </PopoverHandler>
      <PopoverContent className="overflow-y-scroll p-4 scale-90">
        <div className="  h-[300px] w-[250px]  rounded-lg z-10 ">
          {data.map((file, key) => (
            <div key={key} className="flex items-center">
              <Checkbox
                checked={selected.includes(file.value)}
                className=""
                label={file.label}
                value={file.value}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Email() {
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const defaultdata = queryClient.getQueryData(["clientprofile", clientId]);

  const [selectedTemplate, setSelectedTemplate] = useState();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [emailBody, setEmailBody] = useState("");

  useEffect(() => {
    setSelectedCheckboxes([]);
    if (selectedTemplate) {
      setEmailBody(templates[selectedTemplate].body);
    } else {
      setEmailBody("");
    }
  }, [selectedTemplate]);

  useEffect(() => {
    if (selectedTemplate) {
      let keys = Object.keys(templates[selectedTemplate]);
      setEmailBody(templates[selectedTemplate].body);
      keys.forEach((key) => {
        if (selectedCheckboxes.includes(key)) {
          setEmailBody((prev) => prev + templates[selectedTemplate][key]);
        }
      });
    }
  }, [selectedCheckboxes]);

  const popoverbuttons = [
    {
      id: "funeralarrangement",
      title: "Funeral Arrangement",
    },
    {
      id: "prearrangement",
      title: "Pre-Arrangement",
    },
    {
      id: "obituaryandyoutube",
      title: "Obituary And Youtube",
    },
    {
      id: "visarequest",
      title: "Visa Request",
    },
    {
      id: "familyvisa",
      title: "Family Visa",
    },
    {
      id: "zellepayment",
      title: "Zelle Payment",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full height-e  p-4">
      <div className="flex items-center text-xl font-medium text-blue-gray-800">
        <div className=" lg:flex lg:flex-row w-full items-center justify-center gap-2 grid grid-cols-2  sm:grid-cols-3 p-2">
          {popoverbuttons.map((button, key) => {
            if (key < 2)
              return (
                <EmailPopover
                  key={key}
                  id={button.id}
                  title={button.title}
                  setter={setSelectedCheckboxes}
                  settemplate={setSelectedTemplate}
                  selected={selectedCheckboxes}
                />
              );
            else
              return (
                <div>
                  <Button
                    key={key}
                    id={button.id}
                    onClick={() => setSelectedTemplate(button.id)}
                    size="sm"
                    className="bg-blue-gray-500 w-full h-full"
                  >
                    {button.title}
                  </Button>
                </div>
              );
          })}
        </div>
      </div>
      <div className="w-full h-[70vh] overflow-y-scroll p-3">
        <div>
          <Input
            label="Subject:"
            defaultValue={
              selectedTemplate ? templates[selectedTemplate].subject : ""
            }
          />
        </div>
        <div className=" mt-4">
          <Input label="To:" defaultValue={defaultdata?.client?.email} />
        </div>
        <div className=" mt-4">
          <Input label="Cc:" />
        </div>
        <div
          className="flex flex-col w-[100%]  mt-4 border  min-h-[200px] max-h-[200px] overflow-y-scroll border-gray-400 text-blue-gray-700 rounded-md p-3"
          dangerouslySetInnerHTML={{
            __html: emailBody ?? "",
          }}
        >
          {/* <Textarea
            className="w-[400px] h-[250px]"
            variant="outlined"
            label="Message"
            defaultValue={`Dear ${
              (defaultdata?.client?.firstname, defaultdata?.client?.decname)
            },\n ${
              selectedTemplate ? templates[selectedTemplate]?.body : ""
            } \n`}
          /> */}
        </div>
        <div>
          <Button className="bg-red-900 mt-5">Send Email</Button>
        </div>
      </div>
    </div>
  );
}

export default Email;
