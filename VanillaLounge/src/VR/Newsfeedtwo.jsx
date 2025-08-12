import {
  HiDocument,
  HiDocumentAdd,
  HiFolderAdd,
  HiOutlineFilter,
  HiOutlineSearch,
} from "react-icons/hi";

const Newsfeedtwo = () => (
  <div>
    {/* Search bar */}
    <div className="flex pt-6 pr-8 justify-between">
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
    </div>

    {/* Files section */}
    <div className="flex pl-6 pt-6 gap-x-5">
      <div className="pt-3 pl-6 h-dvh  border rounded-md border-[#C2C2C2] text-[6px] font-medium">
        <div className="pl-1 pb-4">
          <h1 className="text-[20px] font-bold text-[#063C4A]">
            📰 Shift Restructuring for Weekend{" "}
          </h1>

          <h1 className="text-sm pt-3 text-[#063C4A]">
            Admin, Vanilla Lounge |{" "}
            <span className="text-[#72AF32]">29 Apr 2025</span>
          </h1>
          <p className="text-[14px] text-[#535363] pt-3">
            We are thrilled to announce some exciting changes to Vanilla Lounge,
            aimed at enhancing the way you export timesheets and integrate
            Earnings Rates. We're also introducing Awards Interpretation.
            <br />
            <br />
            These updates will go live in August and will include the following:
            <br />
            <br />
            From mid August - Awards Available:
            <br />
            Hospitality Industry General Award (HIGA)
            <br />
            General Retail Industry Award (GRIA)
            <br />
            <br />
            As we continue to grow, we plan to introduce more awards, which can
            also be added upon request.
            <br />
            Pay by Area:
            <br />
            You will soon be able to adjust pay rates based on a shift or by
            area.
            <br />
            Xero Earnings Rates Enhancements:
            <br />
            <br />
            <li>
              The hourly rate set in Urhere will now automatically sync to Xero
              for Hourly Rates, Awards, and Pay Templates.
            </li>
            <li>No need to pre-match to existing Xero Earnings Rates</li>
            <li>Improved handling of existing and removed timesheets.</li>
            <li>Option to pre-set rate changes for future dates.</li>
            <li>Ability to set rates from a past date.</li>
            <li>Faster exporting to Xero.</li>
            <li>
              We are committed to continually improving Urhere. Stay tuned for
              these updates and more!
            </li>
          </p>
        </div>
      </div>

      {/* More News */}

      <div className="pt-3 mr-6 h-dvh w-dvh border rounded-md border-[#C2C2C2] text-[6px] font-medium">
        <div>
          <h1 className="text-[20px] pl-5 pb-3 font-bold text-[#063C4A]">More News</h1>
          <hr className="border-[#C2C2C2]" />

          {[...Array(4)].map((_, i) => (
            <div className="hover:bg-[#EBF2E4]">
              <div className="text-[15px] pl-5 pt-3 pb-3">
                <h1 className="font-bold pb-2 text-[#063C4A]">
                  📰 Shift Restructuring for Weekend
                </h1>
                <p className="text-[13px] text-[#535363]">
                  We are thrilled to announce some exciting changes to Vanilla
                  Lounge, aimed at enhancing the way you export timesheets and
                  integrate Earnings Rates.
                </p>
                <h1 className="text-[13px] pt-2 ">
                  Admin, Vanilla Lounge |{" "}
                  <span className="text-[#72AF32]">29 Apr 2025</span>
                </h1>
              </div>
              <hr className="border-[#C2C2C2]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Newsfeedtwo;
