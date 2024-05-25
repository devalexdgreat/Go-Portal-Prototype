'use client'
import Image from "next/image";

import { Fragment, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { GoArrowLeft } from "react-icons/go";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectRoom({ hostelOptions, roomOptions, bunkOptions, roomSelected, hostelSelected, bunkSelected, setRoomSelected, setHostelSelected, setBunkSelected, handleNext, handlePrev, resetPage }) {
    return (
        <div className="w-9/12">
            <div className="w-full h-screen justify-center flex items-center relative">
            <div className="w-full absolute top-10">
                <div className="w-11/12 mx-auto flex justify-between">
                    <button onClick={handlePrev} className="flex gap-1 items-center justify-center"><GoArrowLeft /><span>Go Back</span></button>
                    <button onClick={resetPage}>Cancel</button> 
                </div>
            </div>
            <div className="w-6/12 mx-auto bg-blue-200/10 rounded-md border border-gray-300 p-16 flex justify-center flex-col items-center">
                <div>
                <h1 className="font-semibold text-lg mb-3">Choose a Room</h1>
                </div>
                <div className="w-9/12 mx-auto">
                <div className="w-full mb-3">
                    <Listbox value={hostelSelected} onChange={setHostelSelected}>
                    {({ open }) => (
                        <>
                        <div className="relative mt-2">
                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{hostelSelected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {hostelOptions.map((option) => (
                                <ListboxOption
                                    key={option.id}
                                    className={({ focus }) =>
                                    classNames(
                                        focus ? 'bg-indigo-600 text-white' : '',
                                        !focus ? 'text-gray-900' : '',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                    }
                                    value={option.name}
                                >
                                    {({ hostelSelected, focus }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(hostelSelected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {hostelSelected ? (
                                        <span
                                            className={classNames(
                                            focus ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                        >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </ListboxOption>
                                ))}
                                
                            </ListboxOptions>
                            </Transition>
                        </div>
                        </>
                    )}
                    </Listbox>
                </div>
                <div className="w-full mb-3">
                    <Listbox value={roomSelected} onChange={setRoomSelected}>
                    {({ open }) => (
                        <>
                        <div className="relative mt-2">
                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{roomSelected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {roomOptions.map((option) => (
                                <ListboxOption
                                    key={option.id}
                                    className={({ focus }) =>
                                    classNames(
                                        focus ? 'bg-indigo-600 text-white' : '',
                                        !focus ? 'text-gray-900' : '',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                    }
                                    value={option.name}
                                >
                                    {({ roomSelected, focus }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(roomSelected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {roomSelected ? (
                                        <span
                                            className={classNames(
                                            focus ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                        >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </ListboxOption>
                                ))}
                                
                            </ListboxOptions>
                            </Transition>
                        </div>
                        </>
                    )}
                    </Listbox>
                </div>
                <div className="w-full mb-3">
                    <Listbox value={bunkSelected} onChange={setBunkSelected}>
                    {({ open }) => (
                        <>
                        <div className="relative mt-2">
                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{bunkSelected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {bunkOptions.map((option) => (
                                <ListboxOption
                                    key={option.id}
                                    className={({ focus }) =>
                                    classNames(
                                        focus ? 'bg-indigo-600 text-white' : '',
                                        !focus ? 'text-gray-900' : '',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                    }
                                    value={option.name}
                                >
                                    {({ bunkSelected, focus }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(bunkSelected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {bunkSelected ? (
                                        <span
                                            className={classNames(
                                            focus ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                        >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </ListboxOption>
                                ))}
                                
                            </ListboxOptions>
                            </Transition>
                        </div>
                        </>
                    )}
                    </Listbox>
                </div>
                <button disabled={hostelSelected === 'Select Hostel' ? true : roomSelected === "Select Room" ? true : bunkSelected === "Select Bunk" ? true : false} onClick={handleNext} className={`mt-4 bg-[#6A6A6A] text-white py-2 px-6 rounded-md w-full ${hostelSelected === 'Select Hostel' ? "mt-4" : roomSelected === "Select Room" ? "mt-4" : bunkSelected === "Select Bunk" ? "mt-4" :  "bg-blue-900" }`}>{hostelSelected === 'Select Hostel' ? 'Continue' : roomSelected === "Select Room" ? 'Continue' : bunkSelected === "Select Bunk" ? 'Continue' : 'Preview'}</button>
                </div>
            </div>
            </div>
        </div>
    );
}