import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { PiList, PiUserDuotone } from 'react-icons/pi';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const route = usePathname()
  return (
    <div className='w-full h-14 bg-[#1f2937] flex flex-row justify-between items-center px-5 shadow-sm'>
      <div className='cursor-pointer hover:text-blue-700'>
        <PiList size={30} onClick={toggleSidebar} />
      </div>
      <Link href={'/dashboard/account'} className={`cursor-pointer hover:text-blue-700 ${route === '/dashboard/account' ? 'text-blue-700' : 'text-white'}`}>
        <PiUserDuotone size={26} />
      </Link>
    </div>
  );
}
