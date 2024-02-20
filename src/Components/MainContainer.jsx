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

import { format, set } from "date-fns";

import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "../CheckAuth/CheckAuth";
import { customfetch } from "../lib/fetchhandler/requestHandler";

export default function MainContainer() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [search, setSearch] = useState("");
  const [monthfilter, setMonthFilter] = useState([]);
  const [yearfilter, setYearFilter] = useState([]);
  const [statusfilter, setStatusFilter] = useState([]);

  useEffect(() => {
    const filters = [monthfilter, yearfilter, statusfilter];

    filters.forEach((filter, index) => {
      if (filter.length > 0) {
        if (index === 0) {
          filter.forEach((month) => {
            const filtered = filteredData.filter((user) => {
              return (
                format(user?.createdAt, "MMM") === month ||
                format(user?.updatedAt, "MMM") === month
              );
            });
          });
        }
        if (index === 1) {
          filter.forEach((year) => {
            const filtered = filteredData.filter((user) => {
              return (
                format(user?.createdAt, "yyyy") === year ||
                format(user?.updatedAt, "yyyy") === year
              );
            });
          });
        }
        const filtered = data.filter((user) => {
          const date = new Date(user.createdAt);
          const month = date.getMonth();
          return filter.includes(month);
        });
        setFilteredData(filtered);
      }
    });
    if (monthfilter.length > 0) {
      const filtered = data.filter((user) => {
        const date = new Date(user.createdAt);
        const month = date.getMonth();
        return monthfilter.includes(month);
      });
      setFilteredData(filtered);
    }
  }, [monthfilter, yearfilter, statusfilter]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["clientlist"],
    queryFn: async () => {
      const response = await customfetch(
        `http://localhost:3000/clients`,
        "GET"
      );
      setFilteredData(response?.data.clients);
      return response?.data.clients;
    },
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    console.log(isError);
    return <div>Error: {isError}</div>;
  }

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSetFilters = (e, setfilter, value) => {
    if (e.target.checked) {
      setfilter((prev) => [...prev, value]);
    } else {
      setfilter((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSearch = (value) => {
    if (value === "") {
      setFilteredData(data);
    } else {
      const filtered = filteredData.filter((user) => {
        const keys = [
          "firstname",
          "middlename",
          "lastname",
          "relationship",
          "telephone",
          "email",
          "decname",
          "servicetype",
          "inquirystatus",
          "notes",
        ];

        keys.forEach((key) => {
          console.log(user[key]);
          if (
            typeof user[key] === "string" &&
            user[key].toLowerCase().includes(value.toLowerCase())
          ) {
            return user;
          }
        });
      });
      setFilteredData(filtered);
    }
  };

  const gotoProfile = (clientId) => {
    window.location.href = `/client/${clientId}/profile`;
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
    <div className="w-full height-e  py-4 flex flex-col justify-center overflow-hidden">
      <div className="p-2 h-[80px]">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-4 w-full">
            <p className=" font-bold text-md">Client</p>
            <Button
              size="sm"
              className=" bg-blue-gray-600"
              onClick={handleFilterClick}
            >
              Filter
            </Button>
            <Dialog open={isFilterVisible} handler={handleFilterClick}>
              <DialogBody className="flex  flex-col items-center justify-center max-h-[500px] ">
                <Typography className="text-lg font-bold text-start w-full px-6">
                  Filter
                </Typography>

                <div className="w-full flex flex-col overflow-y-scroll h-full gap-3 p-3 scale-90">
                  <div className="flex flex-col md:flex-row md:h-[50%] gap-4 w-full">
                    <div className="border  w-full md:w-[25%]  h-full  p-2 rounded-md justify-center items-center">
                      <div>
                        <p className="text-left text-red-900 font-semibold   text-[15px]">
                          Year
                        </p>
                      </div>
                      <div className="w-full h-full ">
                        <div className="flex items-center ">
                          <Checkbox />
                          <p className="text-blue-gray-600 text-[15px]">2024</p>
                        </div>
                        <div className="flex items-center">
                          <Checkbox />
                          <p className="text-blue-gray-600 text-[15px]">2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full border p-2 rounded-md  sm:overflow-y-scroll">
                      <p className="text-left text-red-900 font-semibold  text-[15px]">
                        Month
                      </p>
                      <div className="w-[100%] grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 md:w-fullgap-0 p-4 m-0">
                        {months.map((month, key) => {
                          return (
                            <div key={key} className="flex items-center">
                              <Checkbox
                                onChange={(e) =>
                                  handleSetFilters(e, setMonthFilter, month)
                                }
                              />
                              <p className="text-blue-gray-600 text-[15px]">
                                {month}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className=" border p-2 rounded-md sm:overflow-y-scroll">
                    <div>
                      <p className="text-left text-red-900 font-semibold text-[15px]">
                        Inquiry Status
                      </p>
                    </div>

                    <div className="grid  grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 p-4 ">
                      {inquiryStatus.map((status, key) => {
                        return (
                          <div key={key} className="flex items-center">
                            <Checkbox
                              onChange={(e) =>
                                handleSetFilters(e, setStatusFilter, status)
                              }
                            />
                            <p className="text-blue-gray-600 text-[15px]">
                              {status}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DialogBody>
            </Dialog>
          </div>
          <div className=" w-[50%]">
            <Input
              label="Search"
              className="w-[90%] sm:w-full"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll overflow-x-hidden p-4 w-full justify-center   grid-rows-none mt-3   h-full grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
        {data &&
          data.map((client, key) => {
            return (
              <Card
                key={client.id}
                className="flex flex-col p-4 min-w-[100px] h-[200px] max-h-[200px] cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out  bg-white rounded-md shadoww "
                onClick={() => gotoProfile(client.id)}
              >
                <div className="flex flex-col gap-2" key={client.id}>
                  <Typography className="text-ellipsis text-center overflow-hidden text-xs">
                    Status: {client?.inquirystatus ?? "N/A"}
                  </Typography>
                  <div className="flex items-center justify-left mb-3  gap-4">
                    <Avatar
                      loading="lazy"
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                      className="w-[50px] h-[50px] justify-self-start place-self-start"
                    />
                    <div className="w-full">
                      <Typography className="text-ellipsis overflow-hidden font-semibold text-sm line-clamp-2 max-w-[60%]">
                        Name: {client.decname ?? "N/A"}
                      </Typography>
                    </div>
                  </div>

                  <Typography className="text-ellipsis overflow-hidden text-xs">
                    Email:{client.email ?? "N/A"}
                  </Typography>
                  <Typography className="text-ellipsis overflow-hidden text-xs">
                    {client?.updatedAt
                      ? format(
                          client?.updatedAt ?? client?.createdAt,
                          "MMM dd, yyyy"
                        )
                      : "N/A"}
                  </Typography>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
