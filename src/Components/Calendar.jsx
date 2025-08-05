import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef, useState } from "react";
import CalendarForm from "./CalendarForm";
import "../Styles/Calendar.css";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [showWidget, setShowWidget] = useState(false);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const calendarRef = useRef(null);

  const handleAddEvent = (data) => {
    const startDate = data.startDate.format('YYYY-MM-DDTHH:mm:ss')
    const endDate = data.endDate.format('YYYY-MM-DDTHH:mm:ss')
    const newEvent = {
      title: data.title,
      start: startDate,
      end: endDate,
      description: data.desc,
    };
    setEvents((prev) => [...prev, newEvent]);
    alert("Event added");
  };

  const toggleWidgetOn = () => {
    setShowWidget(true);
  };

  return (
    <div className="full-calendar card">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          nowIndicator={true}
          customButtons={{
            myCustomButton: {
              text: "Add Event",
              click: toggleWidgetOn,
            },
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
            list: "List",
          }}
          headerToolbar={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          eventAdd={true}
          aspectRatio={1.8}
          dayMaxEvents={2}
          moreLinkClick={"popover"}
          events={events}
          // eventTimeFormat={}
          eventDisplay="list-item"
          eventContent={renderEventContent}
        />
      {/* <div className="calendar">
      </div> */}
      <dialog className="calendar-widget">
        <CalendarForm handleAddEvent={handleAddEvent} showWidget={showWidget} setShowWidget={setShowWidget}/>
      </dialog>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <span>{eventInfo.timeText}</span>
      <b> {eventInfo.event.title}</b>
    </>
  );
}

export default Calendar;
