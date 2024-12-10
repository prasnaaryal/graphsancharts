import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { dummyData} from "../components/dummydata"

const BarGraph = () => (
  <BarChart width={600} height={300} data={dummyData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Value1" fill="#82ca9d" />
  </BarChart>
);

export default BarGraph;
