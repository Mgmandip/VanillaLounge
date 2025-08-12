import React from "react";
import { HiX } from "react-icons/hi";

const ArchiveEmployees = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 bg-blend-overlay ">
      <div className="bg-white rounded-lg p-5 w-full max-w-xl shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold mb-4 text-[#72AF32]">Archive - Archie Rai</h1>
          <HiX className="text-3xl text-[#A4A4A4] cursor-pointer" onClick={onClose}/>
        </div>
        
        <div className="text-center bg-[#EFF8FF] border border-[#B2DDFF] items-center p-3 rounded-lg">
          <p className="c:\Users\ACER\AppData\Local\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\Recordings\20250811-1008-59.6889344.mp4 text-gray-600">
          Archiving these people will revoke their access to this organisation and will no longer be able to login to any device but historical records will be retained.
          </p>
        </div>
        

        <div className="flex justify-end pt-5">
          
          <button
            className="px-4 py-2 rounded-lg text-base text-[#FF0000] border border-[#FF0000] hover:bg-red-50 cursor-pointer"
            onClick={onConfirm}
          >
            Archive Team Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchiveEmployees;
