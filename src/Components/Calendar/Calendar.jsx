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

import { format, set, subDays } from "date-fns";

import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toast } from "react-toastify";
import { customfetch } from "../../lib/fetchhandler/requestHandler";
import { LoadingScreen } from "../../CheckAuth/CheckAuth";
import ErrorPage from "../ErrorPage";
import { useUser } from "../../utils/context/useUser";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(BigCalendar);

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

function AddEventPopup({ popupDate, setPopUpDate, setShowPopup }) {
  const { id } = popupDate;
  console.log(id);
  const queryClient = useQueryClient();

  const handleEvent = async () => {
    const newevent = EventSchema.safeParse(popupDate);
    if (!newevent.success) {
      toast.error("Please fill in all fields");
    } else {
      const response = await customfetch(
        import.meta.env.VITE_API_URL + "/events" + (id ? `/${id}` : ""),
        id ? "PUT" : "POST",
        newevent.data
      );
      if (response.error) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
      setShowPopup(false);

      return response?.event;
    }
  };

  const mutation = useMutation({
    mutationKey: id ? ["editevntmutation", id] : ["addeventmutation"],
    mutationFn: handleEvent,
    onSuccess: (data) => {
      queryClient.setQueryData(["events"], (olddata) => {
        return id
          ? olddata.map((old) => {
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
          <Typography className="text-red-800 font-semibold mt-2">
            Add Event
          </Typography>

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
              onClick={() => setShowPopup(false)}
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
  const [initialDate, setInitialDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [popupDate, setPopUpDate] = useState({
    createdBy: user?.userId,
    type: "event",
  });
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
    let calendarEl = document.getElementById("calendar");
    if (calendarEl) {
      let calendar = new FCalendar(calendarEl, {
        plugins: [listPlugin, timeGridPlugin],
        initialView: "listWeek",

        height: "90%",
        views: {
          listDay: { buttonText: "day" },
          listWeek: { buttonText: "week" },
          listMonth: { buttonText: "month" },
          timeGridWeek: { buttonText: "time/week" },
        },

        headerToolbar: {
          left: " prev,next",
          center: "",
          right: "listDay,listWeek,listMonth,timeGridWeek",
        },
        events: data,
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
  }, [data]);

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
    <div className="w-full h-[200%] flex flex-col items-center justify-center  overflow-y-scroll p-2">
      {showPopup && (
        <AddEventPopup
          setShowPopup={setShowPopup}
          popupDate={popupDate}
          setPopUpDate={setPopUpDate}
        />
      )}

      <div className="h-[70%]  w-[80%]">
        <FullCalendar
          ref={calendarRef}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay", // user can switch between the two
          }}
          height={"100%"}
          expandRows={true}
          // contentHeight={1000}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={data}
          initialDate={initialDate}
          dayMaxEventRows={3}
          selectable={true}
          select={(e) => popUp(e)}
          eventClick={(e) => handleEventClick(e)}
          eventContent={renderEventContent}
          // editable={true}
        />
      </div>

      <div className="h-full p-8  w-full scale-90 " id="calendar"></div>
    </div>
  );

  // return (
  //   <div className="App p-3">
  //     <DnDCalendar
  //       selectable={true}
  //       startAccessor={"start"}
  //       endAccessor={"end"}
  //       onSelecting={(range) => console.log(range)}
  //       onEventResize={(e) => console.log(e)}
  //       onEventDrop={(e) => console.log(e)}
  //       defaultDate={new Date()}
  //       defaultView="month"
  //       localizer={localizer}
  //       resizable
  //       style={{ height: "80vh" }}
  //     />
  //   </div>
  // );
}

export default Calendar;
