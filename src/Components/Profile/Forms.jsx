import { useState } from "react";
import {
  Button,
  Textarea,
  Input,
  Typography,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { IoIosCloseCircle } from "react-icons/io";
function Forms() {
  const [isFuneralDivVisible, setFuneralDivVisibility] = useState(false);
  const [isPreArrangementDivVisible, setPreArrangementDivVisibility] =
    useState(false);

  const [isFuneralServVisible, setFuneralServVisible] = useState(false);
  const handleFuneralServButtonClick = () => {
    setFuneralServVisible(!isFuneralServVisible);
    setPreArrangementDivVisibility(false);
    setFuneralDivVisibility(false);
    setVisaVisible(false);
  };
  const [isVisaVisible, setVisaVisible] = useState(false);
  const handleVisaButtonClick = () => {
    setVisaVisible(!isVisaVisible);
    setFuneralServVisible(false);
    setPreArrangementDivVisibility(false);
    setFuneralDivVisibility(false);
  };

  const handleFuneralButtonClick = () => {
    setFuneralDivVisibility(!isFuneralDivVisible);
    setPreArrangementDivVisibility(false);
    setFuneralServVisible(false);
    setVisaVisible(false);
  };

  const handlePreArrangementButtonClick = () => {
    setPreArrangementDivVisibility(!isPreArrangementDivVisible);
    setFuneralDivVisibility(false);
    setFuneralServVisible(false);
    setVisaVisible(false);
  };
  return (
    <div className="w-full height-e  p-4 ">
      <div className="text-xl font-medium text-blue-gray-800">Forms</div>
      <div className="flex flex-wrap lg:gap-4 gap-1 md:gap-1 ">
        <div className="mt-2 relative">
          <Button
            size="sm"
            onClick={handleFuneralButtonClick}
            className="bg-blue-gray-500">
            Files
          </Button>

          {isFuneralDivVisible && (
            <div className="absolute w-[350px] mt-2 bg-white shadoww overflow-y-scroll h-[500px] p-4 rounded-lg z-10">
              <IoIosCloseCircle
                onClick={handleFuneralButtonClick}
                className="lg:hidden block float-right text-3xl"
              />
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Bereavement Flight Request Letter</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Blank Contract</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Clothing Belongings Checklist</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Excusal Letter</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Flight Itinerary</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Funeral Service Arrangement Forms</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Medical Contingency Letter</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>No Pictures at Funeral</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Pre-need Casket Agreement and Guarantee</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Receipt Template</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Statement of Authority</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>SSA-721</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Limo Itinerary</Typography>
              </div>
              <Button size="sm" className="mt-4 bg-black/80">
                Save
              </Button>
            </div>
          )}
        </div>
        <div className="mt-2 relative">
          <Button
            size="sm"
            onClick={handlePreArrangementButtonClick}
            className="bg-blue-gray-500">
            Form
          </Button>
          {isPreArrangementDivVisible && (
            <div className="absolute w-[300px] bg-white shadoww mt-2  p-4 rounded-lg z-10">
              <IoIosCloseCircle
                onClick={handlePreArrangementButtonClick}
                className="lg:hidden block float-right text-3xl"
              />
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>
                  Assignment Form for Multiple Beneficiaries
                </Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Assignment Form</Typography>
              </div>

              <Button size="sm" className="mt-4 bg-black/80">
                Save
              </Button>
            </div>
          )}
        </div>

        <div className="mt-2 relative">
          <Button
            size="sm"
            onClick={handleFuneralServButtonClick}
            className="bg-blue-gray-500">
            Funeral Service Arrangement Forms
          </Button>
          {isFuneralServVisible && (
            <div className="absolute w-[300px] mt-2 bg-white shadoww  p-4 rounded-lg z-10">
              <IoIosCloseCircle
                onClick={handleFuneralServButtonClick}
                className="lg:hidden block float-right text-3xl"
              />
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Funeral Service Record Sheet</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>
                  Authorization for Removal Embalming Preparation
                </Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Control of Disposition Form</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>
                  At Need Written Statement Of Person Having the Right to
                  Control Disposition
                </Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Website Agreement</Typography>
              </div>

              <Button size="sm" className="mt-4 bg-black/80">
                Save
              </Button>
            </div>
          )}
        </div>

        <div className="mt-2 relative">
          <Button
            size="sm"
            onClick={handleVisaButtonClick}
            className="bg-blue-gray-500">
            Visa Forms
          </Button>
          {isVisaVisible && (
            <div className="absolute w-[320px] mt-2 bg-white shadoww overflow-y-scroll h-[500px] p-4 rounded-lg z-10">
              <IoIosCloseCircle
                onClick={handleVisaButtonClick}
                className="lg:hidden block float-right text-3xl"
              />
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Canada Visa Request</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Chile)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Colombia)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (DR)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (France)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Guyana)</Typography>
              </div>

              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Haiti)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Jamaica)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (London)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Panama)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Paris)</Typography>
              </div>
              <div className="flex items-center">
                <Checkbox className="" />
                <Typography>Visa Request (Nicolas Laguerre)</Typography>
              </div>

              <Button size="sm" className="mt-4 bg-black/80">
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex gap-5 items-center">
        <div>
          <Button size="sm" className="bg-gray-900 ">
            Generate
          </Button>
        </div>
        <div className="w-80">
          <Select label="Select">
            <Input label="search" />
            <div className="flex items-center">
              <Checkbox />
              <Typography>Select All</Typography>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Typography>Bereavement Flight Request Letter</Typography>
            </div>
          </Select>
        </div>
      </div>
      {/* generate files */}
      <div className="shadoww rounded-lg w-full h-[70vh] mt-2 p-4">
        <div className="bg-white rounded-md w-full h-full overflow-y-scroll">
          Generated Files Content
        </div>
      </div>
    </div>
  );
}

export default Forms;
