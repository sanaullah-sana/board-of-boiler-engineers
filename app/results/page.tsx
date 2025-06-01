"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaDownload } from "react-icons/fa";

export default function Results() {


  return (
    <>
      <div className="overflow-x-hidden">
        <Header />

        {/* Intro Banner Section */}
<section
  style={{ backgroundImage: "url('/results-page-intro-banner.png')" }}
  className="relative bg-cover bg-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] w-full flex items-center justify-center px-4"
>
  {/* Responsive Shadow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg h-[60%] bg-black/90 blur-[60px] z-0"></div>

  {/* Heading with Search Icon */}
  <h2 className="relative z-10 flex items-center text-white font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-raleway gap-3">
    RESULTS
    <FaSearch />
  </h2>
</section>

        {/* /Intro Banner Section */}
         {/* Download Results */}
<section className="p-4 space-y-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#004432] p-4 text-white rounded w-full max-w-[600px] mx-auto">
    <p className="font-nato">Class 3rd section April Result</p>
    <button className="flex items-center text-white underline hover:opacity-80 transition font-bold cursor-pointer font-opan-sans justify-start sm:justify-end">
      <span>Download Result</span>
      <FaDownload className="ml-2" size={18} />
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#004432] p-4 text-white rounded w-full max-w-[600px] mx-auto">
    <p className="font-nato">Class 2nd section April Result</p>
    <button className="flex items-center text-white underline hover:opacity-80 transition font-bold cursor-pointer font-opan-sans justify-start sm:justify-end">
      <span>Download Result</span>
      <FaDownload className="ml-2" size={18} />
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#004432] p-4 text-white rounded w-full max-w-[600px] mx-auto">
    <p className="font-nato">Class 1st section April Result</p>
    <button className="flex items-center text-white underline hover:opacity-80 transition font-bold cursor-pointer font-opan-sans justify-start sm:justify-end">
      <span>Download Result</span>
      <FaDownload className="ml-2" size={18} />
    </button>
  </div>
</section>
         {/* /Download Results */}
         {/* Online Result Section */}
<section className="w-full max-w-md mx-auto p-4 sm:p-6 bg-[#004432] rounded-xl shadow-md space-y-4 my-8 sm:my-10">
  {/* Row 1: Heading */}
  <h2 className="text-xl sm:text-2xl font-bold text-center text-white">ONLINE RESULT</h2>

  {/* Row 2: Select Class */}
  <div>
    <select className="w-full bg-white text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004432]">
      <option value="">-- Select Class --</option>
      <option value="class1">Class 1</option>
      <option value="class2">Class 2</option>
      <option value="class3">Class 3</option>
    </select>
  </div>

  {/* Row 3: Select Section */}
  <div>
    <select className="w-full bg-white text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004432]">
      <option value="">-- Select Section --</option>
      <option value="A">Section A</option>
      <option value="B">Section B</option>
      <option value="C">Section C</option>
    </select>
  </div>

  {/* Row 4: Roll Number Input */}
  <div>
    <input
      type="text"
      placeholder="Enter Roll Number"
      className="w-full bg-white text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004432]"
    />
  </div>

  {/* Row 5: Search Button */}
  <button className="w-full flex items-center justify-center gap-2 bg-white text-[#004432] font-semibold py-2 rounded hover:bg-gray-100 transition cursor-pointer">
    <FaSearch />
    <span>Search</span>
  </button>
</section>


        <Footer />
      </div>
    </>
  );
}
