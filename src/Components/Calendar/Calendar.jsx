import FullCalendar from "@fullcalendar/react";
import { Calendar as FCalendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";

import { useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import { EventSchema } from "../../utils/zod/validation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { format, subDays } from "date-fns";

import { toast } from "react-toastify";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";
import { useUser } from "../../utils/context/useUser";

import { IoMdTrash } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

// function getTodoList(date) {
//   const day = date.getDate();

//   switch (day) {
//     case 10:
//       return [
//         { time: "10:30 am", title: "Meeting" },
//         { time: "12:00 pm", title: "Lunch" },
//       ];
//     case 15:
//       return [
//         { time: "09:30 pm", title: "Products Introduction Meeting" },
//         { time: "12:30 pm", title: "Client entertaining" },
//         { time: "02:00 pm", title: "Product design discussion" },
//         { time: "05:00 pm", title: "Product test and acceptance" },
//         { time: "06:30 pm", title: "Reporting" },
//         { time: "10:00 pm", title: "Going home to walk the dog" },
//       ];
//     default:
//       return [];
//   }
// }

function AddEventPopup({ popupDate, setPopUpDate, setShowPopup, defpop }) {
  const { id } = popupDate;

  const queryClient = useQueryClient();

  const handleEvent = async (process) => {
    const newevent = EventSchema.safeParse(popupDate);

    if (!newevent.success) {
      toast.error("Please fill in all fields");
    } else {
      const response = await customfetch(
        import.meta.env.VITE_API_URL + "/events" + (id ? `/${id}` : ""),
        process ? "DELETE" : id ? "PUT" : "POST",
        newevent.data
      );
      if (response.error) {
        toast.error(response.message);
        return { error: true, message: response.message };
      }
      toast.success(response.message);
      setShowPopup(false);
      setPopUpDate(defpop);

      return response?.event;
    }
  };

  const mutation = useMutation({
    mutationKey: id ? ["editevntmutation", id] : ["addeventmutation"],
    mutationFn: handleEvent,
    onSuccess: (data, todelete) => {
      if (data?.error) {
        return;
      }
      queryClient.setQueryData(["events"], (olddata) => {
        return todelete
          ? olddata?.filter((old) => {
              if (old?.id != todelete?.id) {
                return old;
              }
            })
          : id
          ? olddata?.map((old) => {
              if (old?.id == id) {
                return data;
              } else return old;
            })
          : [...olddata, data];
      });
    },
  });

  return (
    <div className="fixed h-full w-full z-50 top-0 left-0 flex items-center justify-center bg-black/70">
      <Card className={`shadow-lg  flex w-[300px] p-3`} id="popup">
        <div
          className="h-auto p-3 flex flex-col gap-3 items-center justify-center "
          id="popup"
        >
          <div className="w-[90%] flex items-center text-center">
            <Typography className="text-red-800 font-semibold  text-center w-full">
              {popupDate?.id ? "Edit" : "Add Event"}
            </Typography>
            {popupDate?.id && (
              <IoMdTrash
                onClick={() => mutation.mutate({ id: popupDate?.id })}
                size={30}
                className="w-[35px] rounded-full hover:bg-gray-100 p-1 text-gray-900 hover:text-red-800 hover:border-2 hover:border-black transition-all cursor-pointer hover:shadow-lg"
              />
            )}
          </div>

          <div className="flex flex-col gap-3  overflow-y-scroll p-3">
            <Input
              type="text"
              placeholder="Event Name"
              label="Event Title"
              defaultValue={popupDate?.title}
              onChange={(e) =>
                setPopUpDate({ ...popupDate, title: e.target.value })
              }
            />
            <Select
              value={popupDate?.type}
              label="Type"
              onChange={(e) => setPopUpDate({ ...popupDate, type: e })}
            >
              <Option value="event">Event</Option>
              <Option value="task">Task</Option>
            </Select>
            <Input
              type="date"
              placeholder="Start Date"
              label="Start Date"
              defaultValue={popupDate?.start}
              onChange={(e) =>
                setPopUpDate({ ...popupDate, start: e.target.value })
              }
            />
            <Input
              type="time"
              placeholder="Start Time"
              label="Start Time"
              defaultValue={popupDate?.start_time}
              onChange={(e) =>
                setPopUpDate({ ...popupDate, start_time: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="End Date"
              label="End Date"
              defaultValue={popupDate?.end}
              onChange={(e) =>
                setPopUpDate({ ...popupDate, end: e.target.value })
              }
            />
            <Input
              type="time"
              placeholder="End Time"
              label="End Time"
              defaultValue={popupDate?.end_time}
              onChange={(e) =>
                setPopUpDate({ ...popupDate, end_time: e.target.value })
              }
            />
          </div>
          <div className=" w-[90%] flex justify-between mt-2">
            <Button
              variant="outlined"
              onClick={() => {
                setShowPopup(false);
                setPopUpDate(defpop);
              }}
              size="sm"
            >
              Close
            </Button>
            <Button size="sm" onClick={() => mutation.mutate()}>
              {id ? "Edit" : "Save"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Calendar() {
  const { user } = useUser();
  const [params, setParams] = useSearchParams();
  const [filtered, setFiltered] = useState([]);

  const [initialDate, setInitialDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  const defpop = {
    createdBy: user?.userId,
    type: "event",
    start_time: "00:00",
    end_time: "23:59",
  };
  const [popupDate, setPopUpDate] = useState(defpop);
  const calendarRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await customfetch(
        import.meta.env.VITE_API_URL + "/events",
        "GET"
      );

      return response.events;
    },
  });

  useEffect(() => {
    if (params?.size > 0) {
      const type = params.get("type");
      if (type && data) {
        setFiltered(
          data?.filter((item) => {
            return item?.type == type;
          })
        );
      }
      if (!type || type == "all") {
        setFiltered(data);
      }
    }
  }, [params.get("type"), data]);

  useEffect(() => {
    let calendarEl = document.getElementById("calendar");
    if (calendarEl) {
      let calendar = new FCalendar(calendarEl, {
        plugins: [listPlugin, timeGridPlugin],
        initialView: "listMonth",

        height: "100%",

        views: {
          listDay: { buttonText: "day" },
          listWeek: { buttonText: "week" },
          listMonth: { buttonText: "month" },
        },
        initialDate: initialDate,
        // headerToolbar: false,
        headerToolbar: {
          left: "prev,next",

          right: "listMonth,listWeek,listDay",
        },
        events: filtered,
        eventDidMount: function (info) {
          if (info.event.extendedProps.status === "done") {
            // Change background color of row
            info.el.style.backgroundColor = "red";

            // Change color of dot marker
            var dotEl = info.el.getElementsByClassName("fc-event-dot")[0];
            if (dotEl) {
              dotEl.style.backgroundColor = "white";
            }
          }
        },
      });
      calendar.render();
    }
  }, [filtered, initialDate]);

  function renderEventContent(eventInfo) {
    const isEvent = eventInfo?.event.extendedProps?.type == "event";

    return (
      <div
        className={`flex gap-2 text-xs  text-white w-full px-1 ${
          isEvent ? "bg-red-800" : "bg-orange-700"
        }`}
      >
        <b>{eventInfo.timeText}</b>
        <i className="text-ellipsis">{eventInfo.event.title}</i>
      </div>
    );
  }

  const popUp = (e) => {
    setShowPopup(true);
    setPopUpDate({
      ...popupDate,
      start: e?.dateStr ?? e.startStr,
      end: e?.dateStr ?? format(subDays(new Date(e.endStr), 1), "yyyy-MM-dd"),
    });
  };

  const handleEventClick = (e) => {
    setShowPopup(true);
    setPopUpDate({
      ...popupDate,
      start: e.event.startStr.split("T")[0],
      end: e.event.endStr.split("T")[0],
      ...e.event.extendedProps,
      title: e.event.title,
      id: e.event.id,
    });
  };

  if (isLoading) return <LoadingScreen />;

  if (isError) return <ErrorPage />;

  return (
    <div className="w-full h-full overflow-y-scroll ">
      <div className="w-full h-[200%] md:h-[100%]  flex flex-col md:flex-row gap-2 items-start px-3">
        {showPopup && (
          <AddEventPopup
            setShowPopup={setShowPopup}
            popupDate={popupDate}
            setPopUpDate={setPopUpDate}
            defpop={defpop}
          />
        )}
        <div className="w-full self-end flex items-center gap-2 md:hidden">
          <p>Filter</p>
          <Select
            className="scale-90"
            labelProps={{
              className: "scale-90",
            }}
            onChange={(e) => setParams({ type: e })}
            value={params?.get("type") ?? "all"}
          >
            <Option value="all">All</Option>
            <Option value="event">Event</Option>
            <Option value="task">Task</Option>
          </Select>
        </div>

        <div className="h-full  w-full md:w-[60%] relative">
          <FullCalendar
            ref={calendarRef}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay", // user can switch between the two
            }}
            height={"100%"}
            datesSet={(e) =>
              setInitialDate(
                calendarRef.current?.getApi().view.getCurrentData().currentDate
              )
            }
            // contentHeight={1000}
            themeSystem="bootstrap4"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={filtered}
            initialDate={initialDate}
            dayMaxEventRows={3}
            selectable={true}
            select={(e) => popUp(e)}
            eventClick={(e) => handleEventClick(e)}
            eventContent={renderEventContent}
            lazyFetching={true}

            // editable={true}
          />
        </div>
        <div className=" h-full w-full md:w-[40%]">
          <div className="w-full h-full flex flex-col justify-end px-2  ">
            <div className="max-w-[250px] self-end md:flex items-center gap-2 hidden">
              <p>Filter</p>
              <Select
                onChange={(e) => setParams({ type: e })}
                value={params?.get("type") ?? "all"}
              >
                <Option value="all">All</Option>
                <Option value="event">Event</Option>
                <Option value="task">Task</Option>
              </Select>
            </div>
            <div
              className=" h-full flex  w-full  scale-90 align-top p-0 m-0 "
              id="calendar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
