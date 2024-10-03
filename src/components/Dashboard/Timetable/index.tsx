import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import { TimetableContent } from "./TimeTableContent";

interface IDayProps {
  day: string;
  date: string;
}

const DayTab = (props: IDayProps) => {
  const { day, date } = props;
  return (
    <div className="dayTab">
      <p>{date}</p>
      <p>{day}</p>
    </div>
  );
};

export const Timetable = () => {
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const CLASSES = [
    {
      time: "12AM",
      title: "Subject 1",
      id: "1sdsdsdsd",
      studentId: "1qrtrtrtrt",
    },
    {
      time: "12AM",
      title: "Subject 1",
      id: "2sdsdsdsd",
      studentId: "1qrtrtrt",
    },
    {
      time: "12AM",
      title: "Subject 1",
      id: "3sdsdsd",
      studentId: "1qrtrtrtrt",
    },
    {
      time: "12AM",
      title: "Subject 1",
      id: "4sdsdsdsd",
      studentId: "1qrtrtrtrtrt",
    },
  ];
  const CLASSES2 = [
    {
      time: "13AM",
      title: "Subject 2",
      id: "1sdsdsdsd",
      studentId: "1qrtrtrtrt",
    },
  ];

  const CLASSES3 = [
    {
      time: "20AM",
      title: "Subject 3",
      id: "1sdsdsdsd",
      studentId: "1qrtrtrtrt",
    },
    {
      time: "20AM",
      title: "Subject 3",
      id: "2sdsdsdsd",
      studentId: "1qrtrtrt",
    },
    {
      time: "20AM",
      title: "Subject 3",
      id: "3sdsdsd",
      studentId: "1qrtrtrtrt",
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <DayTab day="Mon" date="14" />,
      children: <TimetableContent arr={CLASSES} />,
    },
    {
      key: "2",
      label: <DayTab day="Tue" date="15" />,
      children: <TimetableContent arr={CLASSES3} />,
    },
    {
      key: "3",
      label: <DayTab day="Wed" date="16" />,
      children: <TimetableContent arr={CLASSES2} />,
    },
    {
      key: "4",
      label: <DayTab day="Thu" date="17" />,
      children: <TimetableContent arr={CLASSES2} />,
    },
    {
      key: "5",
      label: <DayTab day="Fri" date="18" />,
      children: <TimetableContent arr={CLASSES} />,
    },
  ];

  const month = months[monthIndex];

  const onChange = (key: string) => {
    // console.log(key);
  };
  return (
    <div className="myTimetable">
      <div className="title">
        <span>Today,</span> {day} {month}
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
