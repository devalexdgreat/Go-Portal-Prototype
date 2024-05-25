'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessCard({ handleNext, resetPage }) {
    const [closeModal, setCloseModal] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(() => {
            setCloseModal(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, [setCloseModal]);

    return (
        <div className="w-9/12">
            <div className="w-full h-screen justify-center flex items-center">
                {closeModal ? (
                    <div className="w-6/12 mx-auto  p-10 flex justify-center flex-col items-center">
                        <div>
                            <h1 className="font-semibold text-lg mb-6">Preview Hostel Card</h1>
                        </div>
                        <div className="w-9/12 mx-auto">
                            <div className="w-9/12 mx-auto bg-blue-200/10 border flex justify-center items-center pb-52 pt-24 rounded-md">
                                <h1 className="font-bold text-sm">Student Hostel Card</h1>
                            </div>
                            <div className="w-full flex flex-col gap-2 mt-8">
                                <button className="w-full text-white bg-blue-900 rounded-md py-2">Print Hostel Card</button>
                                <button onClick={resetPage} href={'/'} className="w-full border border-blue-900 text-blue-900 py-2 rounded-md">Go back to Dashboard</button>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="w-6/12 mx-auto  p-10 flex justify-center flex-col items-center">
                        <div className="invisible">
                            <h1 className="font-semibold text-lg mb-2">Preview Hostel Card</h1>
                        </div>
                        <div className="w-9/12 mx-auto">
                            <div className="invisible w-9/12 mx-auto bg-blue-200/10 border flex justify-center items-center pb-52 pt-24 rounded-md">
                                <h1 className="font-bold text-sm invisible">Student Hostel Card</h1>
                            </div>
                            <div className="flex w-full justify-center items-center font-semibold">
                                <span className="text-sm text-center">You have successfully booked a hostel</span>
                            </div>
                            <div className="w-full flex flex-col gap-2 mt-8">
                                <button className="w-full text-white bg-blue-900 rounded-md py-2">Print Hostel Card</button>
                                <button onClick={resetPage} className="w-full border border-blue-900 text-blue-900 py-2 rounded-md">Go back to Dashboard</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}