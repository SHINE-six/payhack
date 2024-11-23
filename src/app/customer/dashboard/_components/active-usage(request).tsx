'use client';

import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Second unit of time
const dataa = [
    { name: '01:45:03', uv: 4000, pv: 2400, amt: 2400 },
    { name: '01:45:04', uv: 3000, pv: 1398, amt: 2210 },
    { name: '01:45:05', uv: 2000, pv: 9800, amt: 2290 },
    { name: '01:45:06', uv: 2780, pv: 3908, amt: 2000 },
    { name: '01:45:07', uv: 1890, pv: 4800, amt: 2181 },
    { name: '01:45:08', uv: 2390, pv: 3800, amt: 2500 },
    { name: '01:45:09', uv: 3490, pv: 4300, amt: 2100 },
    { name: '01:45:10', uv: 4000, pv: 2400, amt: 2400 },
    { name: '01:45:11', uv: 3000, pv: 1398, amt: 2210 },
    { name: '01:45:12', uv: 2000, pv: 9800, amt: 2290 },
    { name: '01:45:13', uv: 2780, pv: 3908, amt: 2000 },
    { name: '01:45:14', uv: 1890, pv: 4800, amt: 2181 },
    { name: '01:45:15', uv: 2390, pv: 3800, amt: 2500 },
    { name: '01:45:16', uv: 3490, pv: 4300, amt: 2100 },
    { name: '01:45:17', uv: 4000, pv: 2400, amt: 2400 },
    { name: '01:45:18', uv: 3000, pv: 1398, amt: 2210 },
    { name: '01:45:19', uv: 2000, pv: 9800, amt: 2290 },
    { name: '01:45:20', uv: 2780, pv: 3908, amt: 2000 }
  ];
  
  const ActiveUsageRequest = () => {
    const [data, setData] = useState(dataa);

    // Update data every 1 second
    useEffect(() => {
      const interval = setInterval(() => {
        const newData = data.slice(1);  // remove the first element
        // random data push to data
        newData.push({
          name: `01:45:${new Date().getSeconds()}`,
          uv: Math.round(newData[newData.length - 1].uv * (Math.random() + 0.5)),
          pv: Math.round(newData[newData.length - 1].pv * (Math.random() + 0.5)),
          amt: 2400,
        });
        setData(newData);
      }, 1000);
      return () => clearInterval(interval);
    }, [data]);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  export default ActiveUsageRequest;