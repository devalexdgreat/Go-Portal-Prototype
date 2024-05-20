import Image from "next/image";
import Link from "next/link"
import { RiDashboardFill } from "react-icons/ri";

export default function Sidebar() {
    return (
        <div className="bg-[#003E77] text-white w-3/12 h-screen">
            <div className="w-10/12 mx-auto mt-12">
                <Link href={'/'} className="w-full flex items-center gap-3">
                    <Image src={'/logo.png'} className="h-14 w-14" width={100} height={100} alt="" />
                    <span className="">GO University</span>
                </Link>
                <div className="w-full mt-10">
                    <Link href={'/dashboard'} className="py-3 flex items-center gap-2" alt=""><RiDashboardFill className="h-5 w-5" /><span>Dashboard</span></Link>
                    <Link href={'/dashboard'} className="py-3 flex items-center gap-2" alt=""><RiDashboardFill className="h-5 w-5" /><span>Dashboard</span></Link>
                    <Link href={'/dashboard'} className="py-3 flex items-center gap-2" alt=""><RiDashboardFill className="h-5 w-5" /><span>Dashboard</span></Link>
                </div>
            </div>
        </div>
    );
}