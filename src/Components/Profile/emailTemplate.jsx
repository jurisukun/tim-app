import {
  Button,
  Textarea,
  Input,
  Typography,
  Checkbox,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function EmailPopover({ title, data }) {
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <div className="mt-2 relative">
          <Button
            size="sm"
            className="bg-blue-gray-500 text-ellipsis w-full h-full"
          >
            {title}
          </Button>
        </div>
      </PopoverHandler>
      <PopoverContent className="overflow-y-scroll p-4 scale-90">
        <div className="  h-[300px] w-[250px]  rounded-lg z-10 ">
          {data.map((file, key) => (
            <div key={key} className="flex items-center">
              <Checkbox className="" label={file} />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const funeralArrangement = [
  "Greetings",
  "Authorization",
  "Client Page Link Generator",
  "Funeral Preference",
  "Pricing",
  "Booking Disclaimer",
  "Casket Link",
  "Urn Flipbook Link",
  "Outro And Reminder",
];

function emailTemplate() {
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const defaultdata = queryClient.getQueryData(["clientprofile", clientId]);

  return (
    <div className="flex flex-col gap-4 w-full height-e  p-4">
      <div className="text-xl font-medium text-blue-gray-800 py-4">
        Email Templates
        <div className="w-full lg:gap-4 gap-2  md:gap-1 ">
          <div className="mt-2 relative lg:flex lg:flex-row w-full gap-2 grid grid-cols-2 grid-rows-3 sm:grid-cols-3 ">
            <EmailPopover
              title="Funeral Arrangement"
              data={funeralArrangement}
            />
            <EmailPopover title="Pre-arrangement" data={funeralArrangement} />

            <div className="mt-2 relative ">
              <Button size="sm" className="bg-blue-gray-500 w-full  h-full">
                Orbituary And Youtube
              </Button>
            </div>
            <div className="mt-2 relative ">
              <Button size="sm" className="bg-blue-gray-500 w-full h-full ">
                Visa Request
              </Button>
            </div>
            <div className="mt-2 relative ">
              <Button size="sm" className="bg-blue-gray-500 w-full h-full">
                Family Visa
              </Button>
            </div>
            <div className="mt-2 relative">
              <Button size="sm" className="bg-blue-gray-500 w-full h-full">
                Zelle Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] mt-4 overflow-y-scroll">
        <div className=" mt-4">
          <Input label="Subject:" />
        </div>
        <div className=" mt-4">
          <Input label="To:" defaultValue={defaultdata?.client?.email} />
        </div>
        <div className=" mt-4">
          <Input label="Cc:" />
        </div>
        <div className="flex w-[100%]  mt-4">
          <Textarea
            className="w-[400px] h-[250px]"
            variant="outlined"
            label="Message"
            defaultValue={`Dear ${
              (defaultdata?.client?.firstname, defaultdata?.client?.decname)
            },`}
          />
        </div>
        <div>
          <Button className="bg-red-900 mt-5">Send Email</Button>
        </div>
      </div>
    </div>
  );
}

export default emailTemplate;
