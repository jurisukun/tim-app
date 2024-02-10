
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


function EmailPopover({title,data}) {
   return <Popover placement="bottom-end">
      <PopoverHandler>
        <div className="mt-2 relative">
        <Button size="sm"
            className="bg-blue-gray-500 text-ellipsis">{title}</Button>
        </div>
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

const funeralArrangement = [
  "Greetings", "Authorization", "Client Page Link Generator", "Funeral Preference", "Pricing", "Booking Disclaimer", "Casket Link", "Urn Flipbook Link", "Outro And Reminder"
]



function emailTemplate() {
  


  return (
    <div className="flex flex-col gap-4 w-full height-e  p-4">
      <div className="text-xl font-medium text-blue-gray-800">
        Email Templates
        <div className="w-full lg:gap-4 gap-1 md:gap-1 ">
          <div className="mt-2 relative lg:flex lg:flex-row w-full gap-2 grid grid-cols-2 grid-rows-3 sm:grid-cols-3">
           <EmailPopover title="Funeral Arrangement" data={funeralArrangement} />
           <EmailPopover title="Pre-arrangement" data={funeralArrangement} />
          
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
      </div>
      <div className="w-full h-[70vh] mt-4 ">
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
          <Button className="bg-red-900 mt-5">Send Email</Button>
        </div>
      </div>
    </div>
  );
}

export default emailTemplate;
