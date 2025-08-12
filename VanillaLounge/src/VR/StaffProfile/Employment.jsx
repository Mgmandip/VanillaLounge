import { HiDocument, HiPencil } from "react-icons/hi2";
import Sidebar from "./ProfileSidebar";

const Employment = () => {
  const employment = {
    employmentbasis: "Archie Rai",
    Department: "Kitchen",
    role: "Waiter",
    startdate: "05/28/2003",
    visaexpiry: "05/28/2003",
    rsa: "No",
  };

  return (
    <div className="flex pt-7 pl-7 gap-6 text-[#063C4A]">
      {/* Profile Sidebar */}
      <Sidebar />

      {/* Profile Details */}
      <div className="flex-1 pr-7">
        {/* Top Tabs */}
        <div className="flex gap-4 pb-5 text-sm font-medium justify-between">
          <a href="/profile" className="text-[#063C4A] border-b-2 font-bold">
            System Details
          </a>
          <a href="/personaldetails" className="text-[#878787]">
            Personal Details
          </a>
          <a href="/employment" className="text-[#878787]">
            Employment
          </a>
          <a href="/bank" className="text-[#878787]">
            Bank, TNF & Super
          </a>
          <a href="/documents" className="text-[#878787]">
            Documents
          </a>
        </div>

        {/* Personal Details Card */}
        <div className="pt-3 border rounded-md border-gray-300 bg-white">
          <div className="pb-4">
            <h1 className="text-lg px-5 pb-3 font-semibold text-[#72AF32]">
              Employment
            </h1>
            <hr className="border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-15  px-5 space-y-3">
            <div className="w-full space-y-5 ">
              <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                <h1 className="text-sm">Employemnt Basis</h1>
                <h1 className="text-[#878787] text-sm">
                  {employment.employmentbasis}
                </h1>
              </div>
              <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                <h1 className="text-sm">Department</h1>
                <h1 className="text-[#878787] text-sm">
                  {employment.Department}
                </h1>
              </div>
              <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                <h1 className="text-sm">Role</h1>
                <h1 className="text-[#878787] text-sm">{employment.role}</h1>
              </div>
              <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                <h1 className="text-sm">Start Date</h1>
                <h1 className="text-[#878787] text-sm">
                  {employment.startdate}
                </h1>
              </div>
              <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                <h1 className="text-sm">Visa Expiry</h1>
                <h1 className="text-[#878787] text-sm">
                  {employment.visaexpiry}
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-sm">
                  Responsible Service of Alcohol (RSA) expiry:
                </h1>
                <h1 className="text-[#878787] text-sm">{employment.rsa}</h1>
              </div>
            </div>
            <button className="flex text-sm py-2 px-6 rounded-lg items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md gap-x-2">
              <HiPencil />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
