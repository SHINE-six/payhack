"use client";

import React, { useState, useEffect } from "react";
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

// minute unit of time
const dataa = [
  { time: "01:45", object: 4 },
  { time: "01:46", object: 3 },
  { time: "01:47", object: 2 },
  { time: "01:48", object: 2 },
  { time: "01:49", object: 1 },
  { time: "01:50", object: 2 },
  { time: "01:51", object: 3 },
  { time: "01:52", object: 4 },
  { time: "01:53", object: 3 },
  { time: "01:54", object: 2 },
  { time: "01:55", object: 2 },
  { time: "01:56", object: 1 },
  { time: "01:57", object: 2 },
  { time: "01:58", object: 3 },
  { time: "01:59", object: 4 },
  { time: "02:00", object: 3 },
  { time: "02:01", object: 2 },
  { time: "02:02", object: 2 },
];

const ActiveUsageJson = () => {
  const [data, setData] = useState(dataa);

  // Update data every 1 minute
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.slice(1); // remove the first element
      // random data push to data
      const lastTime = newData[newData.length - 1].time;
      const [hours, minutes] = lastTime.split(":").map(Number);
      const newMinutes = (minutes + 1) % 60;
      const newHours = newMinutes === 0 ? (hours + 1) % 24 : hours;
      const newTime = `${String(newHours).padStart(2, "0")}:${String(
        newMinutes
      ).padStart(2, "0")}`;

      newData.push({
        time: newTime,
        object: Math.round(
          newData[newData.length - 1].object * (Math.random() + 0.5)
        ),
      });
      setData(newData);
    }, 60000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={400}>
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="object"
          stroke="#239BD3"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsageJson;
