/*

import {
  HiDocumentAdd,
  HiOutlineFilter,
  HiOutlineSearch,
} from "react-icons/hi";

const Filehub = () => (
  <div>

    <div className="flex pt-6 pr-8 justify-between ">
      <div className="pl-6 flex gap-2">
        <div className="relative">
          <input
            className="h-10 w-60 border border-[#063C4A] rounded-md pl-4 pr-10 text-[15px] font-light text-[#063C4A] shadow-md"
            placeholder="eg. Archie Rai"
          />
          <HiOutlineSearch className="absolute right-2 top-2.5 text-[#063C4A] text-lg" />
        </div>

        <div className="flex items-center justify-center pl-4 h-10 px-4 border border-[#063C4A] rounded-md text-[12px] text-[#063C4A] shadow-md hover:bg-[#EBF2E4]">
          <button className="flex gap-2 items-center">
            <HiOutlineFilter className="text-lg" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>
      <div className="flex">
        <button className="flex text-[15px] border-1 h-10 w-35 rounded-lg justify-center items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md">
          <span className="pt-1 flex gap-x-3">
            <HiDocumentAdd className="text-lg" />
            Upload
          </span>
        </button>
      </div>
    </div>


    <div className="flex pl-6 pt-6 gap-x-5 text-[#063C4A]">
      <div className="pt-3 pl-6 h-3/4 w-[850px] border rounded-md border-[#C2C2C2] text-[6px] font-medium">
        <div className="pl-1 pb-7">
          <h1 className="text-[20px] font-bold">Available File</h1>

          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-20 w-[800px] border rounded-md border-[#C2C2C2] text-[5px] font-medium shadow-md mt-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <h1 className="pt-3 pl-3 text-[16px]">
                      📰 2025 Staff handbook.pdf
                    </h1>
                    <div className="pt-3 pl-5">
                      <div className="w-24 h-6 rounded-4xl bg-[#EFF8FF] border border-[#B2DDFF]">
                        <h1 className="text-[#063C4A] text-center text-[14px]">
                          Policies
                        </h1>
                      </div>
                    </div>
                  </div>
                  <h1 className="pl-4 pt-2 text-[#737380] text-[14px]">
                    Uploaded by HR Department · 28 Apr 2025
                  </h1>
                </div>

                <div className="pt-3 mr-5">
                  <button className="flex text-[15px] border-1 h-8 w-28 rounded-lg  justify-center items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md ">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="pt-3 h-3/4 w-[600px] border rounded-md border-[#C2C2C2] text-[6px] font-medium">
        <div className="pl-0 pb-4">
          <h1 className="text-[20px] pl-5 pb-3 font-bold">Quick Access</h1>
          <hr className="pt-2" />
          <div>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">📰 Shift Restructuring for Weekend</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">🔔 New Leave Policy Implemented</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">☕ Barista Training Session Announced</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">🍰 Café Menu Template</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">📄 Xero Pay Rates Guide</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">📅 Training Schedule May</a>
            </h1>
            <h1 className="text-[15px] pl-5 pt-3">
              <a href="#">📒 Staff Handbook</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Filehub;
*/


import {
  HiDocumentAdd,
  HiOutlineFilter,
  HiOutlineSearch,
} from "react-icons/hi";

const Filehub = () => (
  <div>
    {/* Search bar */}
    <div className="flex pt-6 pr-8 justify-between">
      <div className="pl-6 flex gap-2">
        <div className="relative">
          <input
            className="h-10 w-sm border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#063C4A] shadow-md placeholder:text-[#063C4A]/60"
            placeholder="eg. Archie Rai"
          />
          <HiOutlineSearch className="absolute right-2 top-2.5 text-[#063C4A] text-lg" />
        </div>

        <div className="flex items-center justify-center pl-4 h-10 px-4 border border-[#C2C2C2] rounded-md text-xs text-[#063C4A] shadow-md hover:bg-[#EBF2E4] transition-colors cursor-pointer">
          <button className="flex gap-2 items-center">
            <HiOutlineFilter className="text-lg" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      <div className="flex">
        <button className="flex text-sm h-10 w-32 rounded-lg justify-center items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md hover:shadow-lg transition-shadow">
          <span className="flex gap-3 items-center">
            <HiDocumentAdd className="text-lg" />
            Upload
          </span>
        </button>
      </div>
    </div>

    {/* Files section */}
    <div className="flex px-6 py-4 gap-5 text-[#063C4A]">
      {/* Available Files */}
      <div className="pt-3 w-6xl border rounded-md border-gray-300 bg-white">
        <div className="px-6 pb-7">
          <h1 className="text-xl font-bold mb-4">Available Files</h1>

          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-20 border rounded-md border-gray-300 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex justify-between items-center h-full px-4">
                  <div className="">
                    <div className="flex items-center gap-5">
                      <h2 className="text-base font-medium text-[#063C4A]">
                        📰 2025 Staff handbook.pdf
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#EFF8FF] border border-[#B2DDFF] text-[#063C4A]">
                        Policies
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Uploaded by HR Department · 28 Apr 2025
                    </p>
                  </div>

                  <button className="h-8 w-28 rounded-lg bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="pt-3 w-xl border rounded-md border-gray-300 bg-white mr-40">
        <div className="pb-4">
          <h1 className="text-xl font-bold px-5 pb-3">Quick Access</h1>
          <hr className="border-gray-200" />

          <nav className="mt-4">
            <ul className="space-y-3">
              {[
                { icon: "📰", text: "Shift Restructuring for Weekend" },
                { icon: "🔔", text: "New Leave Policy Implemented" },
                { icon: "☕", text: "Barista Training Session Announced" },
                { icon: "🍰", text: "Café Menu Template" },
                { icon: "📄", text: "Xero Pay Rates Guide" },
                { icon: "📅", text: "Training Schedule May" },
                { icon: "📒", text: "Staff Handbook" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-5 text-sm text-[#063C4A] hover:text-[#72AF32] hover:bg-gray-50 py-1 rounded transition-colors"
                  >
                    {item.icon} {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Filehub;