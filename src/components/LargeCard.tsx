import React from 'react'

export default function LargeCard({ card }: any) {
    return (
        <div className={`flex flex-col gap-2 justify-center items-center rounded-md py-5 ${card.color}`}>
            {card.icone}
            <p className='font-thin'>{card.text}</p>
            <p className='text-lg font-medium'>${card.price}</p>
        </div>
    )
}
