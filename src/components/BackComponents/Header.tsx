import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { PiList, PiUserDuotone } from 'react-icons/pi';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const route = usePathname()
  return (
    <div className='w-full h-14 z-50 bg-section flex flex-row justify-between items-center px-5 shadow-sm'>
      <div className='cursor-pointer hover:text-accent'>
        <PiList size={30} onClick={toggleSidebar} />
      </div>
      <Link href={'/dashboard/account'} className={`cursor-pointer hover:text-accent ${route === '/dashboard/account' ? 'text-accent' : 'text-white'}`}>
        <PiUserDuotone size={26} />
      </Link>
    </div>
  );
}
