import { Card, Typography } from "@material-tailwind/react";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { customfetch } from "../../lib/fetchhandler/requestHandler";

import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";

import { addDays, format, toDate } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function CurrentCase() {
  const navigate = useNavigate();

  let todaycase = [];
  let thisweeekcase = [];
  let nextweekcase = [];
  let upcomingcase = [];
  let pendingcase = [];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["currents"],
    queryFn: async () => {
      const response = await customfetch(
        import.meta.env.VITE_API_URL + "/tasks/currents",
        "GET"
      );

      return response;
    },
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorPage />;
  if (data) {
    const today = new Date();
    const thisweek = addDays(today, 6);
    const nextweek = addDays(thisweek, 6);
    const upcoming = addDays(nextweek, 6);
    const pending = addDays(upcoming, 6);

    for (const task of data.tasks) {
      if (task.due_date.split("T")[0] <= today.toISOString().split("T")[0]) {
        todaycase.push(task);
        continue;
      } else if (
        task.due_date.split("T")[0] <= thisweek.toISOString().split("T")[0]
      ) {
        thisweeekcase.push(task);
        continue;
      } else if (
        task.due_date.split("T")[0] <= nextweek.toISOString().split("T")[0]
      ) {
        nextweekcase.push(task);
        continue;
      } else if (task.due_date <= upcoming.toISOString().split("T")[0]) {
        upcomingcase.push(task);
        continue;
      } else {
        pendingcase.push(task);
        continue;
      }
    }
  }

  const cases = [
    {
      title: "Today",
      data: todaycase,
    },
    {
      title: "This Week",
      data: thisweeekcase,
    },
    {
      title: "Next Week",
      data: nextweekcase,
    },
    {
      title: "Upcoming",
      data: upcomingcase,
    },

    {
      title: "Pending",
      data: pendingcase,
    },
  ];

  console.log(data);

  return (
    <div className="flex flex-col h-full px-3  overflow-y-auto">
      <Typography className="font-bold text-xl">Current Case</Typography>
      <div className="w-full  flex-1 flex flex-col md:flex-row gap-6 md:gap-2 p-4">
        {cases.map((current, index) => {
          return (
            <Card
              key={index}
              className="w-full md:w-[20%] min-h-[300px] md:flex-1 border  gap-2 cursor-pointer hover:shadow-lg"
            >
              <Typography className="w-full text-center font-bold text-white bg-gray-600 rounded-t-md p-2">
                {current.title}
              </Typography>

              <div className="w-full h-full  p-2 overflow-y-auto flex flex-col gap-2">
                {current.data.map((data, index) => {
                  return (
                    <div
                      onClick={() =>
                        navigate(
                          `/client/${data.client_id}/profile/tasks/?id=${data.id}`
                        )
                      }
                      key={index}
                      className="flex flex-col w-full p-2 rounded-md border-2 hover:shadow-lg hover:border-red-400 transition-all "
                    >
                      <div className="flex w-full">
                        <Typography className="font-bold text-xs text-red-800">
                          {format(data.due_date, "MMM dd")}
                        </Typography>
                        <Typography className="text-sm text-ellipsis">
                          {data.client?.decname}
                        </Typography>
                      </div>
                      <Typography className="text-xs">
                        {data.desc?.desc}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
