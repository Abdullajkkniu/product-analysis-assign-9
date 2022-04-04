import React from 'react';
import MyLineChart from '../../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-4xl mb-20 mt-10 text-blue-600 font-bold text-center'>Company's Profitability</h2>
            <MyLineChart></MyLineChart>
        </div>
    );
};

export default Dashboard;