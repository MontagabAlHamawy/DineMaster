import Link from "next/link";
import { TbLayoutDashboard } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-3">
      <h1 className="text-2xl">Wilcome in DineMaster</h1>
      <Link className="text-left bg-blue-900 rounded-md px-2 py-1 flex justify-center items-center gap-2" href={'/dashboard'}><TbLayoutDashboard size={23} /> Dashboard</Link>
    </div>
  );
}
