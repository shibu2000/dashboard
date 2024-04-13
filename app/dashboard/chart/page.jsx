"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Tue",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Wed",
    visit: 2000,
    click: 9800,
  },
  {
    name: "Thu",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Fri",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Sat",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sun",
    visit: 3490,
    click: 4300,
  },
];
const Chart = () => {
  return (
    <div className="_bgSoft rounded p-2 h-80">
      <h2 className="_textSoft mb-3">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
