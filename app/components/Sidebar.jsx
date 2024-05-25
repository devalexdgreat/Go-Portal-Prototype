import Image from "next/image";
import Link from "next/link"
import { RiDashboardFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { PiNotepadFill, PiReceiptFill } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

export default function Sidebar() {

    const [open, setOpen] = useState(false);

    const toggleHostel = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <div className="bg-[#003E77] text-white w-3/12 h-screen">
            <div className="w-full mt-12">
                <div className="w-10/12 mx-auto">
                    <Link href={'/'} className="w-full flex items-center gap-3">
                        <Image src={'/logo.png'} className="h-14 w-14" width={100} height={100} alt="" />
                        <span className="">GO University</span>
                    </Link>
                </div>
                <div className="w-full mt-10 text-[#DADADA]">
                    <div className="">
                        <Link href={'/'} className="w-10/12 mx-auto py-3 flex items-center gap-2" alt=""><RiDashboardFill className="h-5 w-5" /><span>Dashboard</span></Link>
                        <button onClick={toggleHostel} className={`${!open ? "py-3" :  "border-s-4 bg-gradient-to-r from-green-400/10 to-transparent border-green-400 " } py-3 w-full`} alt="">
                            <div className="w-10/12 mx-auto flex items-center justify-between">
                                <span className="flex gap-2 items-center">
                                    <HiOfficeBuilding className="h-5 w-5" /><span>Hostel</span>
                                </span>
                                <IoChevronDown />
                            </div>
                            
                        </button>
                        {open ? ( 
                            <div className="ps-9">
                                <Link href={'#'} className="py-3 flex items-center gap-2" alt=""><BsDot className="text-green-500 h-6 w-6" /><span>Choose Hostel</span></Link>
                                <Link href={'#'} className="py-3 flex items-center gap-2" alt=""><BsDot className="text-red-500 h-6 w-6" /><span>Hostel History</span></Link>
                            </div>
                        ):(
                            <div></div>
                        )}
                    </div>
                    <hr className="h-0.5 my-3" />
                    <div className="w-10/12 mx-auto">
                        <Link href={'#'} className="py-3 flex items-center gap-2" alt="">
                        <GiWallet className="h-5 w-5" /><span>Payment</span></Link>
                        <Link href={'#'} className="py-3 flex items-center gap-2" alt=""><PiNotepadFill className="h-5 w-5" /><span>Course Registration</span></Link>
                        <Link href={'#'} className="py-3 flex items-center gap-2" alt=""><PiReceiptFill className="h-5 w-5" /><span>Result</span></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}