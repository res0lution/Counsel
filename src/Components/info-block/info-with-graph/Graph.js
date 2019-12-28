import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
  {
    name: 'Jan', profit: 10, investment: 10, amt: 2400,
  },
  {
    name: 'Feb', profit: 20, investment: 27, amt: 2210,
  },
  {
    name: 'Mar', profit: 30, investment: 32, amt: 2290,
  },
  {
    name: 'Apr', profit: 34, investment: 36, amt: 2000,
  },
  {
    name: 'May', profit: 44, investment: 37, amt: 2181,
  },
  {
    name: 'Jun', profit: 50, investment: 35, amt: 2181,
  }
];

class Graph extends React.Component {
  render() {
    return <div>
      <LineChart
        width={500}
        height={500}
        data={data}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="profit" stroke="#002e5b" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="investment" stroke="#fde428" />
    </LineChart>
    </div>
  }
}

export default Graph;