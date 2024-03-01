import FullCalendar from "@fullcalendar/react";
import { Calendar as FCalendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { useEffect, useState, useRef } from "react";

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

function Calendar() {
  const [initialDate, setInitialDate] = useState(new Date());
  const calendarRef = useRef(null);

  useEffect(() => {
    let calendar = new FCalendar(document.getElementById("calendar"), {
      plugins: [listPlugin],
      initialView: "listWeek",
      initialDate: initialDate,
      height: "90%",
      views: {
        listDay: { buttonText: "list day" },
        listWeek: { buttonText: "list week" },
        listMonth: { buttonText: "list month" },
      },

      headerToolbar: {
        left: " prev,next",
        center: "",
        right: "listDay,listWeek,listMonth",
      },
      events: [
        {
          title: "Meeting",
          start: "2024-02-12T14:30:00",
        },
        {
          title: "Birthday Party",
          start: "2024-02-13T07:00:00",
          backgroundColor: "green",
          borderColor: "green",
        },
      ],
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
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-y-scroll items-center justify-center">
      <div className="h-full  p-8 md:w-[50%] w-full">
        <FullCalendar
          ref={calendarRef}
          headerToolbar={{
            left: "prev,next",

            center: "title",

            right: "dayGridMonth,dayGridWeek,dayGridDay", // user can switch between the two
          }}
          height={"90%"}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },
            { title: "event 1", date: "2024-04-01" },

            { title: "event 1", start: "2024-04-01", end: "2024-04-02" },
          ]}
          initialDate={initialDate}
          dayMaxEventRows={true}
          dateClick={(e) => console.log(e)}
          selectable={true}
          select={(e) => console.log(e)}
          eventClick={(e) => console.log(e)}
          eventContent={renderEventContent}
          editable={true}
        />
      </div>

      <div
        className="h-full p-8 md:w-[50%] w-full scale-90 "
        id="calendar"
      ></div>
    </div>
  );
}

export default Calendar;
