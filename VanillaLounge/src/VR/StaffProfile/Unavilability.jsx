import Sidebar from "./ProfileSidebar";
import {
  HiOutlineSearch,
  HiOutlineFilter,
} from "react-icons/hi";

import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Unavilability = () => {
  const documents = [
    {
      date: "2025/04/09",
      day: "Sunday",
      unavilabilitytype: "Single Day",
      unavilable: "All Day",
      repeat: "Yes",
      unavilabilitynote:
        "College practical session scheduled during shift hours.",
    },
    {
      date: "2025/04/09",
      day: "Sunday",
      unavilabilitytype: "Single Day",
      unavilable: "All Day",
      repeat: "Yes",
      unavilabilitynote:
        "College practical session scheduled during shift hours.",
    },
    {
      date: "2025/04/09",
      day: "Sunday",
      unavilabilitytype: "Single Day",
      unavilable: "All Day",
      repeat: "Yes",
      unavilabilitynote:
        "College practical session scheduled during shift hours.",
    },
    {
      date: "2025/04/09",
      day: "Sunday",
      unavilabilitytype: "Single Day",
      unavilable: "All Day",
      repeat: "Yes",
      unavilabilitynote:
        "College practical session scheduled during shift hours.",
    },
  ];

  return (
    <div className="flex pt-7 pl-7 gap-6 text-[#063C4A]">
      {/* Profile Sidebar */}
      <Sidebar />

      {/* Shift Details */}
      <div className="flex-1 pr-7">
        <div className="pt-3 border rounded-md border-gray-300 bg-white">
          <div className="pb-4">
            <h1 className="text-lg px-5 font-semibold text-[#063C4A]">
              Unavilability
            </h1>
          </div>

          {/* Searchbar, Filter & Calender */}
          <div className="flex pr-8 justify-between">
            <div className="pl-6 w-full flex gap-2 justify-between">
              <div className="relative">
                <input
                  className="h-10 w-sm border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#063C4A] shadow-md"
                  placeholder="eg. Archie Rai"
                />
                <HiOutlineSearch className="absolute right-2 top-2.5 text-[#063C4A] text-lg" />
              </div>

              <div className="flex gap-2">
                <div className="flex items-center justify-center pl-4 h-10 px-4 border border-[#C2C2C2] rounded-md text-xs text-[#063C4A] shadow-md hover:bg-[#EBF2E4]">
                  <button className="flex gap-2 items-center">
                    <HiOutlineFilter className="text-lg" />
                    <span className="text-sm">Filter</span>
                  </button>
                </div>

                <div className="flex items-center justify-center pl-4 h-10 px-4 border border-[#C2C2C2] rounded-md text-xs text-[#063C4A] shadow-md hover:bg-[#EBF2E4]">
                  <button className="flex gap-2 items-center">
                    <FaRegArrowAltCircleLeft className="text-xl" />
                    <h1 className="text-sm">14 Apr 2025 - 20 Apr 2025</h1>
                    <FaRegArrowAltCircleRight className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shift Table */}
          <div className="px-6 py-5">
            <table className="border-collapse border-2 border-none w-full">
              <thead className="bg-[#FAFAFA]">
                <tr className="text-left text-sm p-3">
                  <th className="p-2">Date</th>
                  <th className="p-2">Day</th>
                  <th className="p-2">Unavilability Type</th>
                  <th className="p-2">Unavilable</th>
                  <th className="p-2">Repeat</th>
                  <th className="p-2">Unavilability Note</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr
                    key={index}
                    className="border-t border-[#E9EAEB] text-[#535862] text-sm"
                  >
                    <td className="pl-2 pt-3 pb-3">{doc.date}</td>
                    <td className="pl-2 pt-3 pb-3">{doc.day}</td>
                    <td className="pl-2 pt-3 pb-3">{doc.unavilabilitytype}</td>
                    <td className="pl-2 pt-3 pb-3">{doc.unavilable}</td>
                    <td className="pl-2 pt-3 pb-3">{doc.repeat}</td>
                    <td className="pl-2 pt-3 pb-3">{doc.unavilabilitynote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unavilability;
