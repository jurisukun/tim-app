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
} from "@material-tailwind/react";

function AddClient() {
  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black/70">
      <Card className="mt-6 p-4 h-[55%] overflow-hidden">
        <div className="flex items-center justify-evenly gap-[10px]">
          <Button className="text-[10px] bg-red-800">Add Client</Button>
          <Button className="text-[10px]  bg-red-800">Primary Intake</Button>
          <Button className="text-[10px]  bg-red-800">Service Details</Button>
        </div>
        <div className="flex  justify-center ">
          <div className="overflow-hidden">
            <CardBody>
              {" "}
              <div className="w-80 mt-3">
                <Input label="Contact Name" />
              </div>
              <div className="w-80 mt-3">
                <Select label="Relationship">
                  <Option>Admin</Option>
                  <Option>Executive</Option>
                  <Option>Operations</Option>
                </Select>
              </div>
              <div className="w-80 mt-3">
                <Input label="Telephone" />
              </div>
              <div className="w-80 mt-3">
                <Input label="Email" />
              </div>
              <div className="w-80 mt-3">
                <Input label="Decedent Name" />
              </div>
              <div className="w-80 mt-3">
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
              <div className=" w-80 mt-4">
                <Select label="Select Level">
                  <Option>Admin</Option>
                  <Option>Executive</Option>
                  <Option>Operations</Option>
                </Select>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex items-center justify-between">
              <Button>Add Client</Button>
              <Button>Exit</Button>
            </CardFooter>
          </div>

          <div className=" h-[50vh] overflow-y-auto">
            <CardBody>
              {" "}
              <div className="w-80 mt-3 flex items-center">
                <Checkbox />
                <Input label="Case Number" />
              </div>
              <div className="w-80 mt-3 flex items-center justify-evenly">
                <Typography className=" text-center font-medium text-[13px] text-blue-gray-500">
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
            <CardFooter className="pt-0 flex items-center justify-between">
              <Button>Add Client</Button>
              <Button>Exit</Button>
            </CardFooter>
          </div>
          <div className="">
            <CardBody>
              {" "}
              <div className="w-80 mt-3">
                <Input label="Contact Name" />
              </div>
              <div className="w-80 mt-3">
                <Select label="Relationship">
                  <Option>Admin</Option>
                  <Option>Executive</Option>
                  <Option>Operations</Option>
                </Select>
              </div>
              <div className="w-80 mt-3">
                <Input label="Telephone" />
              </div>
              <div className="w-80 mt-3">
                <Input label="Email" />
              </div>
              <div className="w-80 mt-3">
                <Input label="Decedent Name" />
              </div>
              <div className="w-80 mt-3">
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
              <div className=" w-80 mt-4">
                <Select label="Select Level">
                  <Option>Admin</Option>
                  <Option>Executive</Option>
                  <Option>Operations</Option>
                </Select>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex items-center justify-between">
              <Button>Add Client</Button>
              <Button>Exit</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AddClient;
