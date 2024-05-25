import { GoArrowLeft } from "react-icons/go";

export default function PreviewCard({ selected, semSelected, roomSelected, hostelSelected, bunkSelected, handleNext, handlePrev, resetPage }) {
    return (
        <div className="w-9/12">
            <div className="w-full h-screen justify-center flex items-center relative">
            <div className="w-full absolute top-10">
                <div className="w-11/12 mx-auto flex justify-between">
                    <button onClick={handlePrev} className="flex gap-1 items-center justify-center"><GoArrowLeft /><span>Go Back</span></button>
                    <button onClick={resetPage}>Cancel</button> 
                </div>
            </div>
            <div className="w-6/12 mx-auto bg-blue-200/10 rounded-md border border-gray-300 p-10 flex justify-center flex-col items-center">
                <div>
                <h1 className="font-semibold text-lg mb-4">Book Hostel Preview</h1>
                </div>
                <div className="w-11/12 mx-auto">
                    <div className="w-full mb-4">
                        <span className="text-gray-400 text-[13px] text-sm">Session</span>
                        <h1 className="font-bold text-sm">{selected}</h1>
                    </div>
                    <div className="w-full mb-4">
                        <span className="text-gray-400 text-[13px] text-sm">Semester</span>
                        <h1 className="font-bold text-sm">{semSelected}</h1>
                    </div>
                    <div className="w-full mb-4">
                        <span className="text-gray-400 text-[13px] text-sm">Hostel</span>
                        <h1 className="font-bold text-sm">{hostelSelected}</h1>
                    </div>
                    <div className="w-full mb-4">
                        <span className="text-gray-400 text-[13px] text-sm">Wing & Room</span>
                        <h1 className="font-bold text-sm">{roomSelected}</h1>
                    </div>
                    <div className="w-full mb-4">
                        <span className="text-gray-400 text-[13px] text-sm">Bunk</span>
                        <h1 className="font-bold text-sm">{bunkSelected}</h1>
                    </div>
                    <div>
                        <button onClick={handleNext} className="w-full bg-blue-900 text-white py-2 rounded-md mt-4">Book Hostel</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}