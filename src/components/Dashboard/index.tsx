import { CLASSES, STATISTIC_CARDS } from "@/mocks";
import { Banner } from "./Banner";
import { StatisticsCard } from "./StatisticsCard";
import NewClassesChart from "./NewClassesChart";
import RevenueChart from "./RevenueChart";
import LearnActivityChart from "./LearnActivityChart";
import { ClassStatCard } from "./ClassStatCard";
import { MyCalendar } from "./Calendar";
import { Timetable } from "./Timetable";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <div className="left">
          <Banner />
          <div className="cards">
            {STATISTIC_CARDS.map((item, index: number) => (
              <>
                <StatisticsCard
                  key={index}
                  title={item.title}
                  total={item.total}
                  img={item.img}
                  isMoney={index === 3}
                />
              </>
            ))}
          </div>
          <div className="charts">
            <div className="chart-l">
              <NewClassesChart />
            </div>
            <div className="chart-r">
              <RevenueChart />
            </div>
          </div>
        </div>
        <div className="right w-[320px]">
          <div className="calendar">
            <MyCalendar />
          </div>
          <div className="timetable">
            <Timetable />
          </div>
        </div>
      </div>
      <div className="bottom mt-[24px] flex gap-[24px]">
        <div className="left">
          <LearnActivityChart />
        </div>
        <div className="right flex-1">
          <ClassStatCard
            title="Total Classs"
            num={CLASSES.reduce(
              (total, currentClass) => total + currentClass.num,
              0
            )}
          />
          {CLASSES.map((item, index: number) => (
            <>
              <ClassStatCard key={index} title={item.title} num={item.num} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
