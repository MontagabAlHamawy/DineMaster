"use client"
import { faker } from '@faker-js/faker'
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import Link from 'next/link'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'


export default function WeekleSalesChart() {
  const [label, setLabel] = useState(3);
  ChartJS.register(CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip)
  const options = {
    responsive: true,
    plugin: {
      lagend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'ChartJs Line Chart',
      },
    },
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const data1 = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
      }
    ]
  }
  const data2 = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53,162,235)',
        backgroundColor: 'rgba(53,162,235,0.5)',
      }
    ]
  }
  const data3 = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
      },
      {
        label: 'Orders',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53,162,235)',
        backgroundColor: 'rgba(53,162,235,0.5)',
      }
    ]
  }
  return (
    <div className='p-8 bg-section rounded-md min-h-28'>
      <h1 className='text-xl font-bold'>Weekly Sales</h1>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <button onClick={() => setLabel(3)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg active 
               ${label === 3 ? 'text-accent  border-accent rounded-t-lg  dark:text-accent dark:border-accent' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} `}>
              All
            </button>
          </li>
          <li className="me-2">
            <button onClick={() => setLabel(1)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg active 
               ${label === 1 ? 'text-accent  border-accent rounded-t-lg  dark:text-accent dark:border-accent' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} `}>
              Sales
            </button>
          </li>
          <li className="me-2">
            <button onClick={() => setLabel(2)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg active 
               ${label === 2 ? 'text-accent  border-accent rounded-t-lg  dark:text-accent dark:border-accent' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} `}>
              Orders
            </button>
          </li>
        </ul>
      </div>
      <Line options={options} data={label === 1 ? data1 : (label === 2 ? data2 : data3)} />
    </div>
  )
}
