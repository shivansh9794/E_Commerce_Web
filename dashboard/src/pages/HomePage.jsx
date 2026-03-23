import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';


const HomePage = () => {
    return (
        <div className='flex flex-col items-start '>

            <h1>hello</h1>

            <BarChart
                xAxis={[{ data: ['group A', 'group B', 'group C', 'group D'] , scaleType: 'band', }]}
                series={[{ data: [4, 3, 10,7] },]}
                colors={['#ff9da7']}
                height={300}
            />

            <PieChart className=''
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 200, label: 'series C' },
                            { id: 3, value: 20, label: 'series D' },
                            { id: 4, value: 20, label: 'series E' },
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