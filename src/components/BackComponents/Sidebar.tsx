import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiTwotoneSetting, AiTwotoneShop } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FaProductHunt } from 'react-icons/fa';
import { PiCaretRight, PiCaretDown, PiCodesandboxLogoDuotone, PiUsersDuotone, PiCompassDuotone, PiUserDuotone, PiFarmDuotone, PiTrashDuotone, PiGearSixDuotone, PiStorefrontDuotone, PiFlagBannerDuotone, PiWalletDuotone } from 'react-icons/pi';
import { RiCoupon2Line } from 'react-icons/ri';
import { TbBuildingCommunity, TbLayoutDashboard } from 'react-icons/tb';
import { MdOutlineEditAttributes } from "react-icons/md";

export default function Sidebar({ isVisible, toggleSidebar }: { isVisible: boolean; toggleSidebar: () => void }) {
  const [list, setList] = useState(false);
  const route = usePathname(); // Get the current route

  function toggleList() {
    setList(!list);
  }

  const links = [
    {
      name: 'Customers',
      icone: <PiUsersDuotone size={23} />,
      link: '/dashboard/customers'
    },
    {
      name: 'Farmers',
      icone: <PiFarmDuotone size={23} />,
      link: '/dashboard/farmers'
    },
    {
      name: 'Markets',
      icone: <PiStorefrontDuotone size={23} />,
      link: '/dashboard/markets'
    },
    {
      name: 'Orders',
      icone: <PiCompassDuotone size={23} />,
      link: '/dashboard/orders'
    },
    {
      name: 'Out Staff',
      icone: <PiUserDuotone size={23} />,
      link: '/dashboard/out-staff'
    },
    {
      name: 'Limit Community',
      icone: <TbBuildingCommunity size={23} />,
      link: '/dashboard/limit-community'
    },
    {
      name: 'Wallet',
      icone: <PiWalletDuotone size={23} />,
      link: '/dashboard/wallet'
    },
    {
      name: 'Settings',
      icone: <PiGearSixDuotone size={23} />,
      link: '/dashboard/settings'
    },
  ];

  return (
    <div className={`${isVisible ? 'flex' : 'hidden'} xl:min-w-60 xl:max-w-60 justify-start items-start flex-col bg-section sticky top-0 left-0 gap-5 min-h-screen p-5 xl:overflow-y-auto max-h-screen`}>
      <Link
        className={`text-2xl font-bold text-accent xl:ml-[-20px] xl:pl-6 xl:fixed xl:bg-section z-30 xl:mt-[-20px] xl:py-5 xl:w-56`}
        href='/'
        onClick={toggleSidebar}
      >
        DineMaster
      </Link>
      <Link
        className={`flex flex-row xl:mt-14 justify-start items-center gap-5 xl:gap-3 hover:pl-5 font-semibold before:z-10 hover:text-white px-2 py-1 rounded-sm min-w-28 hover:before:w-1 hover:before:h-10 hover:before:bg-white hover:before:absolute hover:before:left-0 hover:before:rounded-md ${route === '/dashboard' ? 'pl-7 xl:pl-5  text-accent before:w-1 before:h-10 before:bg-accent before:absolute before:left-0 before:rounded-md' : 'text-slate-500'}`}
        href='/dashboard'
        onClick={toggleSidebar}
      >
        <TbLayoutDashboard size={23} />
        <div className='hover:text-white'>
          Dashboard
        </div>
      </Link>
      <div onClick={toggleList} className='px-2 py-1 rounded-sm min-w-28'>
        <div className={`cursor-pointer flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold before:z-10 hover:pl-5 xl:hover:pl-3 hover:text-white hover:before:w-1 hover:before:h-10 hover:before:bg-white hover:before:absolute hover:before:left-0 hover:before:rounded-md ${route === '/dashboard/attributes' || route === '/dashboard/banners' || route === '/dashboard/categories' || route === '/dashboard/coupons' || route === '/dashboard/products' ? 'text-accent before:w-1  pl-4 xl:pl-3 before:h-10 before:bg-accent before:absolute before:left-0 before:rounded-md' : 'text-text'}`}>
          <PiCodesandboxLogoDuotone size={23} />
          Catalog
          {list ? <PiCaretDown /> : <PiCaretRight />}
        </div>
      </div>
      <div className={`${list ? 'flex' : 'hidden'} items-start justify-start flex-col w-full gap-1 mt-[-20px] bg-body rounded-md py-2 mr-[-50px]`}>
        <Link
          className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/attributes' ? 'text-accent' : 'text-text'}`}
          href='/dashboard/attributes'
          onClick={toggleSidebar}>
          <MdOutlineEditAttributes size={20} />
          Attributes
        </Link>
        <Link
          className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/banners' ? 'text-accent' : 'text-text'}`}
          href='/dashboard/banners'
          onClick={toggleSidebar}
        >
          <PiFlagBannerDuotone size={20} />
          Banners
        </Link>
        <Link
          className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/categories' ? 'text-accent' : 'text-text'}`}
          href='/dashboard/categories'
          onClick={toggleSidebar}
        >
          <BiCategory size={20} />
          Categories
        </Link>
        <Link
          className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/coupons' ? 'text-accent' : 'text-text'}`}
          href='/dashboard/coupons'
          onClick={toggleSidebar}
        >
          <RiCoupon2Line size={20} />
          Coupons
        </Link>
        <Link
          className={`flex flex-row justify-start items-center gap-5 xl:gap-3 font-semibold hover:text-white px-2 py-1 rounded-sm min-w-28 ${route === '/dashboard/products' ? 'text-accent' : 'text-text'}`}
          href='/dashboard/products'
          onClick={toggleSidebar}
        >
          <FaProductHunt size={20} />
          Products
        </Link>
      </div>
      {links.map((link, index) => {
        return (
          <Link key={index}
            className={`flex flex-row justify-start items-center gap-5 xl:gap-3 hover:pl-5  font-semibold before:z-10 hover:text-white px-2 py-1 rounded-sm min-w-28 hover:before:w-1 hover:before:h-10 hover:before:bg-white hover:before:absolute hover:before:left-0 hover:before:rounded-md ${route === link.link ? 'pl-6 xl:pl-5 text-accent before:w-1 before:h-10 before:bg-accent before:absolute before:left-0 before:rounded-md' : 'text-slate-500'} `}
            href={link.link}
            onClick={toggleSidebar}
          >
            {link.icone}
            {link.name}
          </Link>
        )
      })}
    </div>
  );
}
