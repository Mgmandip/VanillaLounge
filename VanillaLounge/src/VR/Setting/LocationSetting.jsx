import { HiMiniChevronRight } from "react-icons/hi2";

const LocationSetting = () => (
  <div className="flex pt-7 pl-7 gap-x-4">
    {/* Sidebar */}
    <div className=" pt-3 ">
      <div className="">
        <h1 className="flex items-center gap-x-20 pb-3 text-[#72AF32]">
          Account Setting <HiMiniChevronRight className="text-xl" />
        </h1>
        <hr className="bg-[#EFF8FF]" />
      </div>
    </div>

    {/* Password Section */}
    <div className=" pt-3 h-3/4 w-5/6 border rounded-md border-[#C2C2C2] text-xs font-medium">
      <div className="">
        <h1 className="text-lg pl-5 pb-3 font-semibold text-[#72AF32]">
          Change Password
        </h1>
        <hr className="" />

        <div className="p-6 text-[#C2C2C2]">
          <div className="border-1 h-105 w-auto rounded-lg">
            <div className="pl-6 pt-4 justify-between">
              <h1 className="text-[#063C4A] text-sm pb-2">Email</h1>
              <input
                className="h-10 w-6xl border border-[#ECECEC] bg-[#ECECEC] rounded-md pl-4 pr-10 text-sm font-light text-[#5F5F5F] "
                placeholder="archierai27@gmail.com"
              />
            </div>

            <div className="pl-6 pt-4 justify-between">
              <h1 className="text-[#063C4A] text-sm pb-2">
                Current Password<span className="text-red-500 pl-1">*</span>
              </h1>
              <input
                className="h-10 w-6xl border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#5F5F5F] "
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>

            <div className="pl-6 pt-4 justify-between">
              <h1 className="text-[#063C4A] text-sm pb-2">
                New Password<span className="text-red-500 pl-1">*</span>
              </h1>
              <input
                className="h-10 w-6xl border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#5F5F5F] "
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>

            <div className="pl-6 pt-4 justify-between">
              <h1 className="text-[#063C4A] text-sm pb-2">
                Confirm Password<span className="text-red-500 pl-1">*</span>
              </h1>
              <input
                className="h-10 w-6xl border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#5F5F5F] "
                placeholder="xxxxxxxxxxxxxxxx"
              />
            </div>

            <div className=" pt-4 pr-5 w-full">
              <button className="flex ml-auto text-sm border-1 h-10 w-45 rounded-lg justify-center items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LocationSetting;