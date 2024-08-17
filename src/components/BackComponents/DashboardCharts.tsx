import React from 'react'
import BestSellingProdectsChart from './BestSellingProdectsChart'
import WeekleSalesChart from './WeekleSalesChart'

export default function DashboardCharts() {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4'>
            <WeekleSalesChart />
            <BestSellingProdectsChart />
        </div>
    )
}
