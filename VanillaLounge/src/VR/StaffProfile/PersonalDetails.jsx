import { HiPencil } from "react-icons/hi2";
import Sidebar from "./ProfileSidebar";

const PersonalDetails = () => {
  const personal = {
    firstName: "Archie",
    lastName: "Rai",
    gender: "Female",
    dob: "05/28/2003",
    email: "archierai28@gmail.com",
    contactNo: "+1 123 456 789",
    currentAddress: "New South Wales 2165",
    emergencyName: "Riya Rai",
    emergencyRelationship: "Sister",
    emergencyPhone: "+1 123 456 789",
    emergencyEmail: "riyarai67@gmail.com",
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
              Personal Details
            </h1>
            <hr className="border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-15  px-5 space-y-3">
            <div className="w-full space-y-5 ">
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">First Name</h1>
                <h1 className="text-[#878787] text-sm">{personal.firstName}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Last Name</h1>
                <h1 className="text-[#878787] text-sm">{personal.lastName}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Gender</h1>
                <h1 className="text-[#878787] text-sm">{personal.gender}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Date of Birth</h1>
                <h1 className="text-[#878787] text-sm">{personal.dob}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Email</h1>
                <h1 className="text-[#878787] text-sm">{personal.email}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Contact No</h1>
                <h1 className="text-[#878787] text-sm">{personal.contactNo}</h1>
              </div>
              <div className="flex justify-between border-b border-[#E7E7E7]">
                <h1 className="text-sm">Current Address</h1>
                <h1 className="text-[#878787] text-sm">
                  {personal.currentAddress}
                </h1>
              </div>

              {/* Emergency Contact */}
              <h1 className="text-sm font-semibold border-b border-[#E7E7E7]">
                Emergency Contact
              </h1>
              <div className="pl-15 space-y-4">
                <div className="flex justify-between border-b border-[#E7E7E7]">
                  <h1 className="text-sm">Name</h1>
                  <h1 className="text-[#878787] text-sm">
                    {personal.emergencyName}
                  </h1>
                </div>
                <div className="flex justify-between border-b border-[#E7E7E7]">
                  <h1 className="text-sm">Relationship</h1>
                  <h1 className="text-[#878787] text-sm">
                    {personal.emergencyRelationship}
                  </h1>
                </div>
                <div className="flex justify-between border-b border-[#E7E7E7]">
                  <h1 className="text-sm">Phone Number</h1>
                  <h1 className="text-[#878787] text-sm">
                    {personal.emergencyPhone}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-sm">Email</h1>
                  <h1 className="text-[#878787] text-sm">
                    {personal.emergencyEmail}
                  </h1>
                </div>
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

export default PersonalDetails;
