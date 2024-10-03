import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const MyCalendar = () => {
  return (
    <div className="myCalendar">
      <Calendar
        tileContent={({ date, view }) => {
          const today = new Date();
          return view === "month" &&
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear() ? (
            <span style={{ color: "red" }}></span>
          ) : null;
        }}
      />
    </div>
  );
};
