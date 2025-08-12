import Sidebar from "./ProfileSidebar";
import { HiOutlineSearch, HiOutlineFilter, HiPencil } from "react-icons/hi";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { HiClock } from "react-icons/hi2";

const HourProfile = () => {
  const documents = [
    {
      date: "2025/04/09",
      time: "8:15 pm",
      activity: "Viewed Schedule for the week of June 09 - 15  ",
    },
  ];

  return (
    <div className="flex pt-7 pl-7 gap-6 text-[#063C4A]">
      {/* Profile Sidebar */}
      <Sidebar />

      {/* Shift Details */}
      <div className="flex-1 pr-7">
        <div className="pt-3 border rounded-md border-gray-300 bg-white">
          <div className="">
            <h1 className="text-lg px-5 font-semibold text-[#063C4A]">
              Hour Profile
            </h1>
          </div>

          {/* Hour Profile Detail */}
          <div className="space-y-3 pl-7 py-6 ">
            <h1>Preferred number of hours per week</h1>

            <div className="flex text-center items-center gap-5">
              <h1>Min.</h1>
              
              <div className="flex items-center border border-[#C2C2C2] rounded-md">
                <div className="h-10 w-10 pl-2 flex items-center">
                  <HiClock className=" text-[#8A8A8A] pointer-events-none text-2xl"  />
                </div>
                
                <input
                  className="h-10 w-30 pl-4 pr-10 text-sm font-light text-[#063C4A] "
                  placeholder="eg.12 hrs"
                />
              </div>

              <h1 className="text-[#8A8A8A]">per week</h1>
            </div>

            <div className="flex text-center items-center gap-5">
              <h1>Min.</h1>
              
              <div className="flex items-center border border-[#C2C2C2] rounded-md">
                <div className="h-10 w-10 pl-2 flex items-center">
                  <HiClock className=" text-[#8A8A8A] pointer-events-none text-2xl"  />
                </div>
                
                <input
                  className="h-10 w-30 pl-4 pr-10 text-sm font-light text-[#063C4A]"
                  placeholder="eg.24 hrs"
                />
              </div>

              <h1 className="text-[#8A8A8A]">per week</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourProfile;
