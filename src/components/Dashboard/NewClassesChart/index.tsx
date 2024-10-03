import useFetchClasses from "@/hooks/useFetchClasses";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: any;
  payload?: any;
}) => {
  if (active && payload && payload.length > 0) {
    const classesData = payload[0]?.payload?.classes
      ? payload[0]?.payload?.classes
      : "N/A";
    const revenueData = payload[0]?.payload?.revenue
      ? payload[0]?.payload?.revenue
      : "N/A";

    return (
      <div
        className="custom-tooltip"
        style={{
          background: "#5F5F5F",
          padding: "6px 10px",
          color: "#ffff",
          borderRadius: "8px",
        }}
      >
        <p className="text-[16px]">
          <span className="text-[12px]">Classes:</span> {classesData}
        </p>
        <p className="text-[16px]">
          <span className="text-[12px]">Revenue:</span> ${revenueData}
        </p>
      </div>
    );
  }

  return null;
};

const CustomBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[10, 10, 10, 10]}
    />
  );
};

const NewClassesChart = () => {
  const { data } = useSelector((state: RootState) => state.classes);
  useFetchClasses();
  return (
    <div className="newClassesChart">
      <div className="top">
        <div className="title">New classes</div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            bottom: 25,
            left: 10,
            right: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            fontSize={10}
            color="#949CA9"
            dx={-10}
            dy={10}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar
            dataKey="classes"
            fill="#43C378"
            barSize={17}
            shape={<CustomBar />}
          />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewClassesChart;
