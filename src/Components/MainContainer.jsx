import {
  Card,
  Button,
  Checkbox,
  Input,
  Typography,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";

import { format } from "date-fns";

export default function MainContainer() {
  const [dummydata, setDummydata] = useState();
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDummydata(data);
    //   });
    fetch(`${import.meta.env.VITE_API_URL}/client`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDummydata(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const gotoProfile = (clientId) => {
    window.location.href = `/client/profile/${clientId}`;
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inquiryStatus = [
    "At-need",
    "Pre-need",
    "Merchandise",
    "Miscellaneous",
    "Pending At-need",
    "Pending Pre-need",
    "Pre-need to At-need",
    "Pricing for At-need",
    "Pricing for Pre-need",
  ];

  return (
    <>
      <div className="p-4  w-full h-[100dvh] pb-40">
        <div className="p-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <p className=" font-bold text-md">Client</p>
              <Button
                size="sm"
                className=" bg-blue-gray-600"
                onClick={handleFilterClick}
              >
                Filter
              </Button>
              <Dialog open={isFilterVisible} handler={handleFilterClick}>
                <DialogBody className="flex  flex-col items-center justify-center max-h-[420px]">
                  <Typography className="text-lg font-bold text-start w-full px-6">
                    Filter
                  </Typography>
                  <div className="bg-white scale-90 z-15 rounded-md p-2 shadoww z-10 md:w-[600px]  shadoww  h-[400px] overflow-y-scroll sm:overflow-hidden gap-2 flex">
                    <div className="flex sm:flex-row  flex-col">
                      <div className="border  p-2 rounded-md">
                        <p className="text-left text-blue-gray-900 text-[15px]">
                          Year
                        </p>
                        <div className="flex items-center">
                          <Checkbox />
                          <p className="text-blue-gray-600 text-[15px]">2024</p>
                        </div>
                        <div className="flex items-center">
                          <Checkbox />
                          <p className="text-blue-gray-600 text-[15px]">2023</p>
                        </div>
                      </div>

                      <div className="flex  md:flex-col gap-2  justify-center flex-col p-2 sm:h-full">
                        <div className=" border p-2 rounded-md  sm:overflow-y-scroll">
                          <p className="text-left text-blue-gray-900 text-[15px]">
                            Month
                          </p>
                          <div className="w-[100%] grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 md:w-fullgap-0 p-0 m-0">
                            {months.map((month, key) => {
                              return (
                                <div key={key} className="flex items-center">
                                  <Checkbox />
                                  <p className="text-blue-gray-600 text-[15px]">
                                    {month}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className=" border p-2 rounded-md sm:overflow-y-scroll">
                          <p className="text-left text-blue-gray-900 text-[15px]">
                            Inquiry Status
                          </p>
                          <div className="grid  grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 ">
                            {inquiryStatus.map((status, key) => {
                              return (
                                <div key={key} className="flex items-center">
                                  <Checkbox />
                                  <p className="text-blue-gray-600 text-[15px]">
                                    {status}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogBody>
              </Dialog>
            </div>
            <div className="w-72 md:mx-[50px]">
              <Input label="Search" />
            </div>
          </div>
        </div>

        <div className=" p-2 w-full mt-3 overflow-y-scroll lg:h-[94%] h-[100%] grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-8">
          {dummydata &&
            dummydata.map((user, key) => {
              return (
                <Card
                  key={key}
                  className="flex flex-col p-4 card cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out  bg-white rounded-md shadoww "
                  onClick={() => gotoProfile(user.id)}
                >
                  <div className="flex flex-col gap-2" key={user.id}>
                    <Typography className="text-ellipsis text-center overflow-hidden text-xs">
                      {user?.inquirystatus}
                    </Typography>
                    <div className="flex items-center justify-left mb-3  gap-4">
                      <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        className="w-[50px] h-[50px] justify-self-start place-self-start"
                      />
                      <div>
                        <Typography className="text-ellipsis overflow-hidden font-semibold text-sm line-clamp-2">
                          {user.decname}
                        </Typography>
                      </div>
                    </div>

                    <Typography className="text-ellipsis overflow-hidden text-xs">
                      {user.email}
                    </Typography>
                    <Typography className="text-ellipsis overflow-hidden text-xs">
                      {format(
                        user?.dateupdated ?? user?.datecreated,
                        "MMM dd, yyyy"
                      )}
                    </Typography>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}
