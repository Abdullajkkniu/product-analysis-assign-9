import React from 'react';
import { Area, AreaChart, Bar, Brush, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='grid grid-cols-2 gap-4 container mx-auto px-4 justify-between'>
            <div>
            <h2 className='text-center font-bold text-green-600'>MONTH WISE SELL</h2>
            
            <LineChart width={500} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0,}}>
              <Line dataKey={'sell'} stroke="#82ca9d" fill="#82ca9d" />
              
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
            </div>


            <div>
            <h1 className='text-center font-bold text-green-600'>INVESTMENT VS REVENUE</h1>
            <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={300}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
            </div>


            <div>
            <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" barSize={20} fill="red" />
          <Line dataKey="revenue" stroke="blue" />
        </ComposedChart>
      </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MyLineChart;