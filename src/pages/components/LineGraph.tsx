import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { dummyData} from "../components/dummydata"

const LineGraph = () => (
  <LineChart width={600} height={300} data={dummyData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Value1" stroke="#8884d8" />
  </LineChart>
);

export default LineGraph;
