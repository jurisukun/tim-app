import {
  Card,
  Button,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";

export default function MainContainer() {
  const [dummydata, setDummydata] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDummydata(data);
      });
  }, []);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <div className="p-4  w-full height-c ">
        <div className="hidden md:block">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-4">
              <p className=" font-bold text-2xl">Client</p>
              <Button
                className="p-3 bg-blue-gray-600"
                onClick={handleFilterClick}
              >
                Filter
              </Button>
              {isFilterVisible && (
                <div className="bg-white lg:w-[900px] md:w-[600px] lg:h-[300px] md:h-[400px] absolute lg:bottom-[-300px] md:bottom-[-400px] left-[60px] rounded-md p-2 shadoww z-10 gap-2 flex">
                  <div className=" ">
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
                  {/* break */}
                  <div className="">
                    <p className="text-left text-blue-gray-900 text-[15px]">
                      Month
                    </p>
                    <div className="w-[100%] flex flex-wrap  ">
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          January
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          February
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">March</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">April</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">May</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox d />
                        <p className="text-blue-gray-600 text-[15px]">Jun</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">July</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">August</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          September
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          October
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          November
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          December
                        </p>
                      </div>
                    </div>

                    {/* break */}
                    <p className="text-left text-blue-gray-900 text-[15px] mt-4">
                      Inquiry Status
                    </p>
                    <div className="w-[100%] flex flex-wrap  ">
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pre-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Merchandise
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Miscellaneous
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pending At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pending Pre-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pre-need to At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pricing for At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[15px]">
                          Pricing for Pre-need
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-72 md:mx-[50px]">
              <Input label="Search" />
            </div>
          </div>
        </div>
        {/* mobile-view */}
        <div className="block md:hidden">
          <div className="relative">
            <div className="w-72 mb-3">
              <Input label="Search" />
            </div>
            <div className="flex items-center gap-4">
              <p className=" font-bold text-2xl">Client</p>
              <Button
                className="p-3 bg-blue-gray-600"
                onClick={handleFilterClick}
              >
                Filter
              </Button>
              {isFilterVisible && (
                <div className="bg-white w-[100%] h-[450px] absolute bottom-[-450px] left-0 rounded-md p-2 shadoww z-10 overflow-y-scroll">
                  <div className=" flex p-2 justify-evenly">
                    <div>
                      <p className="text-left text-blue-gray-600 text-[10px]">
                        Year
                      </p>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">2024</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">2023</p>
                      </div>
                    </div>
                    {/* break */}
                    <div className=" ">
                      <p className="text-left text-blue-gray-600 text-[10px]">
                        Month
                      </p>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          January
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          February
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">March</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">April</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">May</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox d />
                        <p className="text-blue-gray-600 text-[10px]">Jun</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">July</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">August</p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          September
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          October
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          November
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          December
                        </p>
                      </div>
                    </div>
                    {/* break */}
                    <div className="  ">
                      <p className="text-left text-blue-gray-600 text-[10px]">
                        Inquiry Status
                      </p>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pre-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Merchandise
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Miscellaneous
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pending At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pending Pre-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pre-need to At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pricing for At-need
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <p className="text-blue-gray-600 text-[10px]">
                          Pricing for Pre-need
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* line break */}
        <div className=" p-2 w-full mt-3 overflow-y-scroll lg:h-[94%] h-[100%]">
          {dummydata && (
            <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-8">
              {dummydata.map((user, key) => {
                return (
                  <Card
                    key={key}
                    className="flex flex-col p-4 card cursor-pointer"
                  >
                    <div className="" key={user.id}>
                      <div className="flex items-center justify-left mb-3">
                        <Avatar
                          src="https://docs.material-tailwind.com/img/face-2.jpg"
                          alt="avatar"
                          className="w-[50px] h-[50px]"
                        />
                      </div>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.name}
                      </Typography>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.email}
                      </Typography>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.username}
                      </Typography>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
