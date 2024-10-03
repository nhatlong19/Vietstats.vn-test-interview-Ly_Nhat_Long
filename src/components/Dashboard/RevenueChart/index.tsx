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

const data = [
  { name: "Yesterday", revenue: 28 },
  { name: "Today", revenue: 47 },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: any;
  payload?: any;
}) => {
  if (active && payload && payload.length > 0) {
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
          <span className="text-[12px]">Revenue:</span> ${revenueData}
        </p>
      </div>
    );
  }

  return null;
};

const RevenueChart = () => (
  <div className="RevenueChart">
    <div className="top">
      <div className="title">Revenue</div>
    </div>
    <div className="flex items-center gap-[15px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} fontSize={10} color="#949CA9" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="revenue" fill="#377DFF" barSize={40} />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="statistical flex flex-col items-center justify-end gap-[4px]">
        <div className="today">Today</div>
        <div className="revenue">
          <span>$</span>47
        </div>
        <div className="tag">+25%</div>
        <div className="yesterday">vs yesterday</div>
      </div>
    </div>
  </div>
);

export default RevenueChart;
