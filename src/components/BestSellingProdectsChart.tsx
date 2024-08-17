"use client"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingProdectsChart() {
    const data = {
        labels: [
            'Sweet Corn',
            'Mint',
            'Biby Cattot',
            'Tomato'
        ],
        datasets: [{
            label: 'Sale',
            data: [11, 16, 7, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }]
    };
    return (
        <div className='p-8 bg-slate-700 rounded-md !text-white'>
            <h1 className='text-xl font-bold mb-2'>Best Selling Products</h1>
            <Pie data={data} width={10} />
        </div>
    )
}
