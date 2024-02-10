
import {
  Button,

  Input,
  Typography,
  Checkbox,
  Select,

   Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";



const files=["Bereavement Flight Request Letter","Blank Contract","Clothing Belongings Checklist","Excusal Letter","Flight Itinerary","Funeral Service Arrangement Forms","Medical Contingency Letter","No Pictures at Funeral","Pre-need Casket Agreement and Guarantee","Receipt Template","Statement of Authority","SSA-721","Limo Itinerary"]

const forms=["Assignment Form for Multiple Beneficiaries","Assignment Form"]

const visa=["Canada Visa Request","Visa Request (Chile)","Visa Request (Colombia)","Visa Request (DR)","Visa Request (France)","Visa Request (Guyana)","Visa Request (Haiti)","Visa Request (Jamaica)","Visa Request (London)","Visa Request (Panama)","Visa Request (Paris)","Visa Request (Nicolas Laguerre)"]

const funeralService=["Funeral Service Record Sheet","Authorization for Removal Embalming Preparation","Control of Disposition Form","At Need Written Statement Of Person Having the Right to Control Disposition","Website Agreement"]


function FormPopover({title,data}) {
   return <Popover placement="bottom-end">
      <PopoverHandler>
        <Button size="sm"
            className="bg-blue-gray-500">{title}</Button>
      </PopoverHandler> 
      <PopoverContent className="overflow-y-scroll p-4">
        <div className="  h-[300px] w-[250px]  rounded-lg z-10">
         { data.map((file,key)=>(
<div key={key} className="flex items-center">
                <Checkbox className="" />
                <Typography>{file}</Typography>
              </div>
          ))}
              <Button size="sm" className="my-4 bg-black/80">
                Save
              </Button>
            </div>
      </PopoverContent>
    </Popover>
}


function Forms() {
 
  return (
    <div className="w-full height-e  p-4 ">
      <div className="flex  lg:gap-4 gap-1 sm:justify-between sm:flex-row flex-col md:gap-1 items-center px-6">
      {/* <div className="text-xl font-medium text-blue-gray-800">Forms</div> */}
        <div className="mt-2  flex flex-row  gap-2 relative">
          <FormPopover title="Files" data={files} />
          <FormPopover title="Form" data={forms} />
          <FormPopover title="Funeral Service Arrangement Forms" data={funeralService} />
          <FormPopover title="Visa Form" data={visa} />
          
        </div>
      
      <div className="mt-6 flex gap-5 items-center w-full sm:w-auto">
        {/* <div>
          <Button size="sm" className="bg-gray-900 ">
            Generate
          </Button>
        </div> */}
        <div className="w-full">
          <Select label="Select" className="w-full ">
            <Input label="search" />
            <div className="flex items-center">
              <Checkbox />
              <Typography>Select All</Typography>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <Typography className="text-[12px]">Bereavement Flight Request Letter</Typography>
            </div>
          </Select>
        </div>
      </div>
      </div>
      {/* generate files */}
      <div className=" rounded-lg w-full  mt-2 p-4 h-full">
        <div className="bg-white rounded-md w-full h-full overflow-y-scroll">
          Generated Files Content
        </div>
      </div>
    </div>
  );
}

export default Forms;
