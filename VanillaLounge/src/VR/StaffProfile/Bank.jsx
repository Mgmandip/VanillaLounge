import { HiDocument, HiPencil } from "react-icons/hi2";
import Sidebar from "./ProfileSidebar";

const Bank = () => {
  const bank = {
    accountname: "Archie Rai",
    bsb: "062-987",
    accountnumber: 123456789,
    resident: "Australian Resident",
    threshold: "Yes",
    fundname: "Australian Retirement Trust",
    fundusi: "ART123456USI",
    fundnumber: "87654321ART",
    help: "Yes",
    vsl: "No",
    fs: "No",
    loan: "Yes",
  };

  return (
    <div className="flex pt-7 pl-7 gap-6 text-[#063C4A]">
      {/* Profile Sidebar */}
      <Sidebar />

      {/* Profile Details */}
      <div className="flex-1 pr-7">
        {/* Top Tabs */}
        <div className="flex gap-4 pb-5 text-sm font-medium justify-between">
          <a
            href="/profile"
            className="text-[#063C4A] border-b-2 font-bold"
          >
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

        {/* Bank Details Card */}
        <div className="pt-3 border rounded-md border-gray-300 bg-white">
          <div className="pb-4">
            <h1 className="text-lg px-5 pb-3 font-semibold text-[#72AF32]">
              Bank, TNF & Super
            </h1>
            <hr className="border-gray-300"/>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-15  px-5 space-y-3">
            <div className="w-full space-y-5 ">
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Account Name</h1>
                  <h1 className="text-[#878787] text-sm">{bank.accountname}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">BSB</h1>
                  <h1 className="text-[#878787] text-sm">{bank.bsb}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Account Number</h1>
                  <h1 className="text-[#878787] text-sm">{bank.accountnumber}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">
                    Australian Resident or Foreign Resident
                  </h1>
                  <h1 className="text-[#878787] text-sm">{bank.resident}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Claim Tax-free threshold</h1>
                  <h1 className="text-[#878787] text-sm">{bank.threshold}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Superannuation Fund Name</h1>
                  <h1 className="text-[#878787] text-sm">{bank.fundname}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Superannuation Fund USI</h1>
                  <h1 className="text-[#878787] text-sm">{bank.fundusi}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">
                    Superannuation Fund Member (Account) Number
                  </h1>
                  <h1 className="text-[#878787] text-sm">{bank.fundnumber}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Higher Education Loan Program (HELP)</h1>
                  <h1 className="text-[#878787] text-sm">{bank.help}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">VET Student Loan (VSL)</h1>
                  <h1 className="text-[#878787] text-sm">{bank.vsl}</h1>
                </div>
                <div className="flex justify-between border-b-1 border-[#E7E7E7]">
                  <h1 className="text-sm">Financial Supplement (FS)</h1>
                  <h1 className="text-[#878787] text-sm">{bank.fs}</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-sm">
                    Student Start-up Loan (SSL) or Trade Support Loan (TSL) debt
                  </h1>
                  <h1 className="text-[#878787] text-sm">{bank.loan}</h1>
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

export default Bank;
