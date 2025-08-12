import { HiDocumentDownload, HiDownload } from "react-icons/hi";
import { HiDocument, HiPencil } from "react-icons/hi2";
import Sidebar from "./ProfileSidebar";

const Documents = () => {
  const documents = [
    {
      type: "RSA",
      note: "-",
      issued: "29 May 2021",
      expiry: "29 May 2025",
    },
    {
      type: "Driving Licence",
      note: "Driving Licence of Nepal",
      issued: "29 May 2021",
      expiry: "29 May 2025",
    },
    {
      type: "COVID-19 Vaccination Certificate",
      note: "-",
      issued: "29 May 2021",
      expiry: "29 May 2025",
    },
  ];

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

        {/* Documents Card */}
        <div className="pt-3 border rounded-md border-gray-300 bg-white">
          <div className="pb-4">
            <h1 className="text-lg px-5 pb-3 font-semibold text-[#72AF32]">
              Documents
            </h1>
            <hr className="border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-1 px-5 space-y-3">
            <div className="space-y-5 w-fit space-x-5">
              <div className="w-3xl text-sm">
                <table className="border-collapse border-2 border-[#E9EAEB] w-full">
                  <thead className="bg-[#f1f1f1]">
                    <tr className="text-left ">
                      <th className="pl-5 pt-1 pb-3">Type</th>
                      <th className="pl-5 pt-1 pb-3">Note</th>
                      <th className="pl-5 pt-1 pb-3">Issued Date</th>
                      <th className="pl-5 pt-1 pb-3">Expiry Date</th>
                      <th className="pl-5 pt-1 pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => (
                      <tr key={index} className="border-t border-[#E9EAEB]">
                        <td className="pl-5 pt-3 pb-3">{doc.type}</td>
                        <td className="pl-5 pt-3 pb-3">{doc.note}</td>
                        <td className="pl-5 pt-3 pb-3">{doc.issued}</td>
                        <td className="pl-5 pt-3 pb-3">{doc.expiry}</td>
                        <td className="p-3 px-5 flex gap-x-2 text-[#063C4A] cursor-pointer">
                          <HiPencil />
                          <HiDownload />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button className="flex text-sm py-2 px-5 rounded-lg items-center bg-gradient-to-r from-[#063C4A] to-[#0E8FB0] text-white shadow-md gap-x-2">
              <HiDocument />
              Add Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
