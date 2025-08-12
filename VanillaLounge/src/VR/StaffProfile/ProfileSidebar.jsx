import { HiDocument } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Pup from "../../assets/Pup.png";
import { useState } from "react";
import ArchiveEmployees from "./ArchiveEmployees";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArchiveConfirm = () => {
    console.log("Employee archived!");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-xs h-full max-h-xs border rounded-md border-[#C2C2C2]">
      <div className="pt-4 text-center">
        <img
          src={Pup}
          alt="Profile"
          className="h-16 w-16 rounded-full mx-auto"
        />
        <h1 className="font-semibold text-base pt-4">Archie Rai</h1>
        <h1 className="text-[#878787] text-base">archierai27@gmail.com</h1>
      </div>

      <div className="pt-10 pl-15 pb-5 text-left text-base space-y-6">
        <button onClick={() => navigate("/profile")} className="hover:text-[#72AF32] cursor-pointer block ">Profile</button>
        <button onClick={() => navigate("/Shifts")} className="hover:text-[#72AF32] cursor-pointer block">Shifts</button>
        <button onClick={() => navigate("/Leaves")} className="hover:text-[#72AF32] cursor-pointer block">Leaves</button>
        <button onClick={() => navigate("/Unavilability")} className="hover:text-[#72AF32] cursor-pointer block">Unavailability</button>
      </div>

      <hr className="border-[#C2C2C2] pt-5 pd-5"/>

      <div className="pl-15 text-left text-base space-y-6">
        <button onClick={() => navigate("/HourProfile")} className="hover:text-[#72AF32] cursor-pointer block">Hour Profile</button>
        <button onClick={() => navigate("/ActivityLog")} className="hover:text-[#72AF32] cursor-pointer block">Activity Log</button>
        
        {/* Trigger modal */}
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="hover:text-[#72AF32] cursor-pointer block"
        >
          Archive Employee
        </button>
      </div>

      <div className="pt-8 pl-15 pb-6">
        <button className="flex text-sm px-6 py-2 rounded-lg items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md gap-x-2">
          <HiDocument />
          Request Information
        </button>
      </div>

      {/* Modal Component */}
      <ArchiveEmployees 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleArchiveConfirm}
      />
    </div>
  );
};

export default Sidebar;
