import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function loginPage() {
  return (
    <div className=" w-full h-screen bg-white flex justify-center items-center ">
      <Card color="transparent" shadow={false} className="shadoww p-4 lg:p-6">
        <Typography
          variant="h4"
          color="blue-gray"
          className=" text-3xl mb-3 protest-riot-regular text-center"
        >
          Funeral System
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Log in to continue your account
        </Typography>
        <form className="mt-[30px] mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-red-900" fullWidth>
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default loginPage;
