import {
  HiDocument,
  HiDocumentAdd,
  HiFolderAdd,
  HiOutlineFilter,
  HiOutlineSearch,
} from "react-icons/hi";

const Newsfeed = () => (
  <div>
    {/* Search bar */}
    <div className="flex pt-6 pr-8 justify-between">
      <div className="pl-6 flex gap-2">
        <div className="relative">
          <input
            className="h-10 w-sm border border-[#C2C2C2] rounded-md pl-4 pr-10 text-sm font-light text-[#063C4A] shadow-md"
            placeholder="eg. Archie Rai"
          />
          <HiOutlineSearch className="absolute right-2 top-2.5 text-[#063C4A] text-lg" />
        </div>

        <div className="flex items-center justify-center pl-4 h-10 px-4 border border-[#C2C2C2] rounded-md text-xs text-[#063C4A] shadow-md hover:bg-[#EBF2E4]">
          <button className="flex gap-2 items-center">
            <HiOutlineFilter className="text-lg" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>
    </div>

    {/* Files section */}
    <div className="min-h-screen px-6 py-4">
      {/* Main Container with padding on all sides */}
      <div className="">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* News Detail Box */}
          <div className="md:col-span-1 col-span-2 bg-white border-1 border-[#C2C2C2] p-4 rounded-md">
            <h2 className="text-left text-gray-700 font-semibold text-xl ">
              📰 Shift Restructuring for Weekend
            </h2>
            <h1 className="text-sm pt-3 text-[#063C4A]">
              Admin, Vanilla Lounge |{" "}
              <span className="text-[#72AF32]">29 Apr 2025</span>
            </h1>
            <p className="text-sm text-[#535363] pt-3">
              We are thrilled to announce some exciting changes to Vanilla
              Lounge, aimed at enhancing the way you export timesheets and
              integrate Earnings Rates. We're also introducing Awards
              Interpretation.
              <br />
              <br />
              These updates will go live in August and will include the
              following:
              <br />
              <br />
              From mid August - Awards Available:
              <br />
              Hospitality Industry General Award (HIGA)
              <br />
              General Retail Industry Award (GRIA)
              <br />
              <br />
              As we continue to grow, we plan to introduce more awards, which
              can also be added upon request.
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
                The hourly rate set in Urhere will now automatically sync to
                Xero for Hourly Rates, Awards, and Pay Templates.
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

          {/* More News List Box */}

          <div className="pt-3 border rounded-md border-gray-300 bg-white">
            <div className="">
              <h1 className="text-lg px-5 pb-3 text-left text-gray-700 font-semibold">
                More News List
              </h1>
              <hr className="border-gray-300" />
            </div>

   
              <div className="p-5 hover:bg-[#EBF2E4]">
                {[...Array(1)].map((_, i) => (
                  <div>
                    <div className="text-sm">
                      <h1 className="font-bold pb-2 text-[#063C4A]">
                        📰 Shift Restructuring for Weekend
                      </h1>
                      <p className="text-sm text-[#535363]">
                        We are thrilled to announce some exciting changes to
                        Vanilla Lounge, aimed at enhancing the way you export
                        timesheets and integrate Earnings Rates.
                      </p>
                      <h1 className="text-sm pt-2 ">
                        Admin, Vanilla Lounge |{" "}
                        <span className="text-[#72AF32]">29 Apr 2025</span>
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Newsfeed;
