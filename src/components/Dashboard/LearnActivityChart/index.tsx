import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dữ liệu
const data = [
  { name: "Basic English", previousMonth: 30, thisMonth: 20 },
  { name: "Children English", previousMonth: 20, thisMonth: 10 },
  { name: "Math", previousMonth: 12, thisMonth: 20 },
  { name: "Tutor", previousMonth: 21, thisMonth: 50 },
  { name: "1:1 Online", previousMonth: 23, thisMonth: 14 },
  { name: "Literature", previousMonth: 13, thisMonth: 23 },
  { name: "Exam Math", previousMonth: 20, thisMonth: 40 },
  { name: "Exam English", previousMonth: 30, thisMonth: 40 },
];

const LearnActivityChart = () => {
  return (
    <div className="learnAcChart">
      <div className="title">Revenue</div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="previousMonth" stroke="#9804DE" />
          <Line type="monotone" dataKey="thisMonth" stroke="#FF8831" />
        </LineChart>
      </ResponsiveContainer>
      <div className="legend">
        <div className="this">
          <div></div> <p>This month</p>
        </div>
        <div className="pre">
          <div></div> <p>Previous Month</p>
        </div>
      </div>
    </div>
  );
};

export default LearnActivityChart;
