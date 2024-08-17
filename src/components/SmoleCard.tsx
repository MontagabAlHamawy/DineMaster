import React from 'react'

export default function SmoleCard({cardd}:any) {
  return (
    <div  className={`flex flex-row py-5 px-5 justify-start items-center bg-slate-800  rounded-md gap-5`}>
    <div className={`rounded-full p-2 ${cardd.color}`}>{cardd.icone}</div>
    <div className='flex flex-col justify-center items-start gap-1'>
      <p className='font-thin text-sm'>{cardd.text}</p>
      <p>{cardd.price}</p>
    </div>
  </div>
  )
}
