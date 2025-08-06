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
  const [colors, setColors] = useState([]);

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
      backgroundColor: data.backgroundColor
    };
    setEvents((prev) => [...prev, newEvent]);
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
        //   dateClick={handleDateClick}
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
          eventDisplay="block"
          eventContent={renderEventContent}
        />
      {/* <div className="calendar">
      </div> */}
      <dialog className="calendar-widget">
        <CalendarForm handleAddEvent={handleAddEvent} showWidget={showWidget} setShowWidget={setShowWidget} colors={colors} setColors={setColors}/>
      </dialog>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <span className="event">
      <span>{eventInfo.timeText}</span>
      <b> {eventInfo.event.title}</b>
      <span>{eventInfo.event.description && eventInfo.event.description}</span>
    </span>
  );
}

export default Calendar;
