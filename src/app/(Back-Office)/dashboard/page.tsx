import LargeCard from '@/components/LargeCard'
import SmoleCard from '@/components/SmoleCard';
import React from 'react'
import { PiCardsThreeDuotone, PiCheckLight, PiCreditCardDuotone, PiLadderDuotone, PiShoppingCartSimpleDuotone, PiTruckDuotone } from 'react-icons/pi'
import { SlRefresh } from 'react-icons/sl'

export default function Dashboard() {
  const card1 = [
    {
      icone: <PiCardsThreeDuotone size={25} />,
      text: 'Today Orders',
      price: '548',
      color: 'bg-blue-800'
    },
    {
      icone: <PiCardsThreeDuotone size={25} />,
      text: 'Yesterday Orders',
      price: '125',
      color: 'bg-red-500'
    },
    {
      icone: <PiShoppingCartSimpleDuotone size={25} />,
      text: 'This Month',
      price: '870',
      color: 'bg-green-500'
    },
    {
      icone: <PiCreditCardDuotone size={25} />,
      text: 'Last Month',
      price: '124',
      color: 'bg-yellow-600'
    },
    {
      icone: <PiCreditCardDuotone size={25} />,
      text: 'All-Time Sales',
      price: '1243',
      color: 'bg-blue-500'
    }
  ];
  const card2 = [
    {
      icone: <PiShoppingCartSimpleDuotone size={24} />,
      text: 'Today Orders',
      price: '2344',
      color: 'bg-blue-500'
    },
    {
      icone: <SlRefresh size={24} />,
      text: 'Orders Pending',
      price: '425',
      color: 'bg-orange-500'
    },
    {
      icone: <PiTruckDuotone size={24} />,
      text: 'Orders Processing',
      price: '970',
      color: 'bg-green-500'
    },
    {
      icone: <PiCheckLight size={24} />,
      text: 'Orders Delivered',
      price: '136',
      color: 'bg-blue-800'
    },
  ]
  return (
    <div>
      <h1 className='text-xl font-semibold'>Dashboard Overview</h1>
      <div className='grid grid-cols-2 xl:grid-cols-5 gap-2 mt-5'>
        {card1.map((card: any, index: any) => {
          return (
            <LargeCard card={card} key={index} />
          )
        })}
      </div>
      <div className='grid grid-cols-2 xl:grid-cols-4 gap-2 my-5'>
        {card2.map((cardd: any, index: any) => {
          return (
            <SmoleCard key={index} cardd={cardd} />
          )
        })}
      </div>
    </div>
  )
}
