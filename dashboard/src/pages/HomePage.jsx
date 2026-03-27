import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { url } from '../config/KeyConfig';
import toast from 'react-hot-toast'


const HomePage = () => {

    const [graphData, setGraphData] = useState([]);

    const getUserGraph = async () => {
        const res = await axios.get(`${url}/api/admin/user-growth-15days`);
        toast.success("User Growth Fetched")
        setGraphData(res.data);
    }

    useEffect(() => {
        getUserGraph();
    }, [])



    return (
        <div className='flex flex-col items-start '>

            <h1 className='text-xl font-bold'>Users Growth (Last 15 Days)</h1>

            <BarChart
                // xAxis={[{ data: ['group A', 'group B', 'group C', 'group D'], scaleType: 'band', }]}
                // series={[{ data: [4, 3, 10, 7] },]}
                xAxis={[{ data: graphData.map(item => item.date), scaleType: 'band', }]}
                series={[{ data: graphData.map(item => item.totalUsers) },]}
                colors={['#ff9da7']}
                height={300}
                width={1350}
            />

            <PieChart className=''
                series={[
                    {
                        data: [
                            { id: 3, value: 20, label: 'series D' },
                            { id: 4, value: 10, label: 'series E' },
                            { id: 5, value: 5, label: 'series F' },
                        ],
                    },
                ]}
                width={160}
                height={130}
                colors={['gray', 'black', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab',]}
            />


        </div>
    )
}

export default HomePage