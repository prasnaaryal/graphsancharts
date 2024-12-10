import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { dummyData} from "../components/dummydata"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

const DoughnutGraph = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={dummyData}
      dataKey="Value2"
      nameKey="Category"
      cx="50%"
      cy="50%"
      innerRadius={80}
      outerRadius={150}
      fill="#8884d8"
      label
    >
      {dummyData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default DoughnutGraph;
