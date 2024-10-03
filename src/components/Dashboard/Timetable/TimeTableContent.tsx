import Image from "next/image";

interface IProps {
  time: string;
  title: string;
  id: string;
  studentId: string;
}
interface IContentProps {
  arr: IProps[];
}
const TimetableCard = (props: IProps) => {
  const { time, title, id, studentId } = props;
  return (
    <div className="timeTableCard">
      <div className="time">{time}</div>
      <div className="classes">
        <Image src="/icons/class.png" alt="classes" width={100} height={100} />
        <div className="subject">
          <div className="subjectTitle">{title}</div>
          <div className="id">{id}</div>
          <div className="studentId">{studentId}</div>
        </div>
      </div>
    </div>
  );
};

export const TimetableContent = (props: IContentProps) => {
  const { arr } = props;
  return (
    <div className="timeTableContent">
      {arr.map((item) => (
        <TimetableCard
          key={item.id}
          time={item.time}
          id={item.id}
          title={item.title}
          studentId={item.studentId}
        />
      ))}
    </div>
  );
};
