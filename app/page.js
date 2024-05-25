'use client'
import Image from "next/image";
import Sidebar from "./components/Sidebar";

import { Fragment, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import BookHostel from "./components/flows/BookHostel";
import SelectRoom from "./components/flows/SelectRoom";

const options = [
  {
    id: 1,
    name: 'Select Session',
  },
  {
    id: 2,
    name: '2022/2023',
  },
  {
    id: 3,
    name: '2023/2024',
  },
]
const semOptions = [
  {
    id: 1,
    name: 'Select Semester',
  },
  {
    id: 2,
    name: 'First Semester',
  },
  {
    id: 3,
    name: 'Second Semmester',
  },
]
const hostelOptions = [
  {
    id: 1,
    name: 'Select Hostel',
  },
  {
    id: 2,
    name: 'Hostel 1234',
  },
  {
    id: 3,
    name: 'Hostel 5678',
  },
]
const roomOptions = [
  {
    id: 1,
    name: 'Select Room',
  },
  {
    id: 2,
    name: 'Wing A, Room 100',
  },
  {
    id: 3,
    name: 'Wing B, Room 100',
  },
]
const bunkOptions = [
  {
    id: 1,
    name: 'Select Bunk',
  },
  {
    id: 2,
    name: 'Upper Bunk',
  },
  {
    id: 3,
    name: 'Middle Bunk',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  const [selected, setSelected] = useState(options[0].name);
  const [semSelected, setSemSelected] = useState(semOptions[0].name);
  const [roomSelected, setRoomSelected] = useState(roomOptions[0].name);
  const [hostelSelected, setHostelSelected] = useState(hostelOptions[0].name);
  const [bunkSelected, setBunkSelected] = useState(bunkOptions[0].name);
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if(page === 0) {
        return <BookHostel options={options} semOptions={semOptions} setSelected={setSelected} selected={selected} semSelected={semSelected} setSemSelected={setSemSelected} handleNext={handleNext} />
    } else if(page === 1) {
        return <SelectRoom hostelOptions={hostelOptions} roomOptions={roomOptions} bunkOptions={bunkOptions} roomSelected={roomSelected} hostelSelected={hostelSelected} bunkSelected={bunkSelected} setRoomSelected={setRoomSelected} setHostelSelected={setHostelSelected} setBunkSelected={setBunkSelected} />
    }
    // } else if(page === 2) {
    //     return <PreferInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} pdata={pdata} setPdata={setPdata} />
    // } else if(page === 3) {
    //     return <GoalInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} pdata={pdata} setPdata={setPdata} />
    // } else if(page === 4) {
    //     return <TcInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
    // } else if(page === 5) {
    //     return <CfmPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
    // } else if(page === 6) {
    //     return <OkPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
    // } else {
    //     return <OkPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
    // }
    
}

  const handleNext = () => {
    setPage((currPage) => currPage + 1);
  }

  return (
    <main className="w-full flex">
      <Sidebar />
      {PageDisplay()}
    </main>
  );
}
