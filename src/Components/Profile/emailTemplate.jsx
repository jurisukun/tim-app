import { useState } from "react";
import {
  Button,
  Textarea,
  Input,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { IoIosCloseCircle } from "react-icons/io";
function emailTemplate() {
  const [isFuneralDivVisible, setFuneralDivVisibility] = useState(false);
  const [isPreArrangementDivVisible, setPreArrangementDivVisibility] =
    useState(false);

  const handleFuneralButtonClick = () => {
    setFuneralDivVisibility(!isFuneralDivVisible);
    setPreArrangementDivVisibility(false);
  };

  const handlePreArrangementButtonClick = () => {
    setPreArrangementDivVisibility(!isPreArrangementDivVisible);
    setFuneralDivVisibility(false);
  };
  return (
    <div className="w-full height-e  p-4">
      <div className="text-xl font-medium text-blue-gray-800">
        Email Templates
        <div className="flex flex-wrap lg:gap-4 gap-1 md:gap-1 ">
          <div className="mt-2 relative">
            <Button
              size="sm"
              onClick={handleFuneralButtonClick}
              className="bg-blue-gray-500"
            >
              Funeral Arrangement
            </Button>

            {isFuneralDivVisible && (
              <div className="absolute w-[300px] bg-white shadoww h-[500px] p-4 rounded-lg z-10">
                <IoIosCloseCircle
                  onClick={handleFuneralButtonClick}
                  className="lg:hidden block float-right text-3xl"
                />
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Greetings</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Authorization Expectations</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Client Page Link Generator</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Funeral Preference</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Pricing</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Booking Disclaimer (if Necessary)</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Casket Link</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Urn Flipbook Link</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Outro And Reminder</Typography>
                </div>
                <Button className="mt-4 bg-black/80">Save</Button>
              </div>
            )}
          </div>
          <div className="mt-2 relative">
            <Button
              size="sm"
              onClick={handlePreArrangementButtonClick}
              className="bg-blue-gray-500"
            >
              Pre-arrangement Arrangement
            </Button>
            {isPreArrangementDivVisible && (
              <div className="absolute w-[300px] bg-white shadoww h-[500px] p-4 rounded-lg z-10">
                <IoIosCloseCircle
                  onClick={handlePreArrangementButtonClick}
                  className="lg:hidden block float-right text-3xl"
                />
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Greetings</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Authorization Expectations</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Client Page Link Generator</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Funeral Preference</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Pricing</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Booking Disclaimer (if Necessary)</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Casket Link</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Urn Flipbook Link</Typography>
                </div>
                <div className="flex items-center">
                  <Checkbox className="" />
                  <Typography>Outro And Reminder</Typography>
                </div>
                <Button className="mt-4 bg-black/80">Save</Button>
              </div>
            )}
          </div>
          <div className="mt-2 relative">
            <Button size="sm" className="bg-blue-gray-500">
              Orbituary And Youtube
            </Button>
          </div>
          <div className="mt-2 relative">
            <Button size="sm" className="bg-blue-gray-500">
              Visa Request
            </Button>
          </div>
          <div className="mt-2 relative">
            <Button size="sm" className="bg-blue-gray-500">
              Family Visa
            </Button>
          </div>
          <div className="mt-2 relative">
            <Button size="sm" className="bg-blue-gray-500">
              Zelle Payment
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[76vh] mt-4 ">
        <div className=" mt-4">
          <Input label="Subject:" />
        </div>
        <div className=" mt-4">
          <Input label="To:" />
        </div>
        <div className=" mt-4">
          <Input label="Cc:" />
        </div>
        <div className="flex w-[100%]  mt-4">
          <Textarea
            className="w-[400px] h-[250px]"
            variant="outlined"
            label="Message"
          />
        </div>
        <div>
          <Button className="bg-red-900">Send Email</Button>
        </div>
      </div>
    </div>
  );
}

export default emailTemplate;
