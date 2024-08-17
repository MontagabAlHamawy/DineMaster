"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSidebarVisible2, setIsSidebarVisible2] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible2(!isSidebarVisible2);
  };

  return (
    <div className="xl:flex xl:justify-start xl:items-start xl:flex-row">
      <div className="hidden xl:block">
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full">
        <div className="sticky top-0 left-0">
          <Header toggleSidebar={() => { setIsSidebarVisible2(!isSidebarVisible2); setIsSidebarVisible(!isSidebarVisible) }} />
          <div className="xl:hidden">
            <Sidebar isVisible={isSidebarVisible2} toggleSidebar={toggleSidebar} />
          </div>
        </div>
        <div className={`${!isSidebarVisible2 ? 'block' : 'hidden xl:block'} mx-5 mt-5`}>
          {children}
        </div>
      </div>
    </div>
  );
}
