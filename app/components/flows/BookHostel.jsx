'use client'
import Image from "next/image";

import { Fragment, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BookHostel({ options, semOptions, setSelected, selected, semSelected, setSemSelected, handleNext }) {
    return (
        <div className="w-9/12">
            <div className="w-full h-screen justify-center flex items-center">
            <div className="w-6/12 mx-auto bg-[#E2E2E2] rounded-md border border-gray-300 p-16 flex justify-center flex-col items-center">
                <div>
                <h1 className="font-semibold text-lg mb-3">Book a hostel</h1>
                </div>
                <div className="w-9/12 mx-auto">
                <div className="w-full mb-3">
                    <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                        <div className="relative mt-2">
                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((option) => (
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
                                    {({ selected, focus }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {selected ? (
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
                    <Listbox value={semSelected} onChange={setSemSelected}>
                    {({ open }) => (
                        <>
                        <div className="relative mt-2">
                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{semSelected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {semOptions.map((option) => (
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
                                    {({ semSelected, focus }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(semSelected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {semSelected ? (
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
                <button disabled={selected === 'Select Session' ? true : semSelected === "Select Semester" ? true : false} onClick={handleNext} className={`mt-4 bg-[#6A6A6A] text-white py-2 px-6 rounded-md w-full ${selected === 'Select Session' ? "mt-4" : semSelected === "Select Semester" ? "mt-4" : "bg-blue-900" }`}>Continue</button>
                </div>
            </div>
            </div>
        </div>
    );
}