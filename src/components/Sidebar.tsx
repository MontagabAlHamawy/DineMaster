import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiTwotoneSetting, AiTwotoneShop } from 'react-icons/ai';
import { PiCaretRight, PiCaretDown, PiCodesandboxLogoDuotone, PiUsersDuotone, PiCompassDuotone, PiUserDuotone, PiFarmDuotone, PiTrashDuotone, PiGearSixDuotone, PiStorefrontDuotone } from 'react-icons/pi';
import { TbLayoutDashboard } from 'react-icons/tb';

export default function Sidebar({ isVisible, toggleSidebar }: { isVisible: boolean; toggleSidebar: () => void }) {
  const [list, setList] = useState(false);
  const route = usePathname(); // Get the current route

  function toggleList() {
    setList(!list);
  }

  return (
    <div className={`${isVisible ? 'flex' : 'hidden'} justify-start items-start flex-col bg-[#1f2937] static gap-5 min-h-screen p-5`}>
      <Link
        className={`text-2xl font-bold ${route === '/' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/'
        onClick={toggleSidebar}
      >
        DineMaster
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard'
        onClick={toggleSidebar}
      >
        <TbLayoutDashboard size={23} />
        <div className='hover:text-white'>
          Dashboard
        </div>
      </Link>
      <div onClick={toggleList} className='px-2 py-1 rounded-sm min-w-28'>
        <div className={`cursor-pointer flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold text-slate-500 hover:text-white 
          ${route === '/dashboard/attributes' || route === '/dashboard/banners' || route === '/dashboard/categories' || route === '/dashboard/coupons' || route === '/dashboard/products' ? 'text-blue-700' : 'text-[#6b7280]'}`}>
          <PiCodesandboxLogoDuotone size={23} />
          <div className='hover:text-white'>
            Catalog
          </div>
          {list ? <PiCaretDown /> : <PiCaretRight />}
        </div>
      </div>
      <div className={`${list ? 'flex' : 'hidden'} items-start justify-start flex-col w-full gap-1 mt-[-20px] bg-[#111827] rounded-md py-2 mr-[-50px]`}>
        <Link
          className={`font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/attributes' ? 'text-blue-700' : 'text-[#6b7280]'}`}
          href='/dashboard/attributes'
          onClick={toggleSidebar}
        >
          - Attributes
        </Link>
        <Link
          className={`font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/banners' ? 'text-blue-700' : 'text-[#6b7280]'}`}
          href='/dashboard/banners'
          onClick={toggleSidebar}
        >
          - Banners
        </Link>
        <Link
          className={`font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/categories' ? 'text-blue-700' : 'text-[#6b7280]'}`}
          href='/dashboard/categories'
          onClick={toggleSidebar}
        >
          - Categories
        </Link>
        <Link
          className={`font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/coupons' ? 'text-blue-700' : 'text-[#6b7280]'}`}
          href='/dashboard/coupons'
          onClick={toggleSidebar}
        >
          - Coupons
        </Link>
        <Link
          className={`font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/products' ? 'text-blue-700' : 'text-[#6b7280]'}`}
          href='/dashboard/products'
          onClick={toggleSidebar}
        >
          - Products
        </Link>
      </div>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/customers' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/customers'
        onClick={toggleSidebar}
      >
        <PiUsersDuotone size={23} />
        Customers
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/farmers' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/farmers'
        onClick={toggleSidebar}
      >
        <PiFarmDuotone size={23}/>
        Farmers
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/markets' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/markets'
        onClick={toggleSidebar}
      >
        <PiStorefrontDuotone size={23}/>
        Markets
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/orders' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/orders'
        onClick={toggleSidebar}
      >
        <PiCompassDuotone size={23} />
        Orders
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/out-staff' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/out-staff'
        onClick={toggleSidebar}
      >
        <PiUserDuotone size={23} />
        Out Staff
      </Link>
      <Link
        className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/settings' ? 'text-blue-700' : 'text-slate-500'}`}
        href='/dashboard/settings'
        onClick={toggleSidebar}
      >
        <PiGearSixDuotone size={23} />
        Settings
      </Link>
    </div>
  );
}
