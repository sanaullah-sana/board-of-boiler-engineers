"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Header />

      {/* Intro Banner Section */}
<section
  style={{ backgroundImage: "url('/about-intro-banner-img.png')" }}
  className="relative bg-cover bg-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] w-full flex items-center justify-center px-4"
>
  {/* Responsive Shadow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg h-[60%] bg-black bg-opacity-90 blur-3xl z-0"></div>

  {/* Heading */}
  <h2 className="relative z-10 text-white font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-raleway">
    ABOUT US
  </h2>
</section>

      {/* /Intro Banner Section */}

      {/* About Content Section */}
      <section className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div
          style={{ backgroundImage: "url('/about-background-img.png')" }}
          className="max-w-5xl w-full mx-auto text-center space-y-6 bg-white bg-opacity-90 p-6 sm:p-8 md:p-10 rounded-lg shadow-md bg-cover bg-center bg-no-repeat"
        >
          <p className="text-[#4a4949] text-sm sm:text-base md:text-lg">
            The Board of Examination (For Boiler Engineer) is an examination body for the conduct of
            examinations of various classes of boiler engineers. The Board holds examinations twice a
            year and around 2000 candidates of class 1st, 2nd and 3rd are examined every 6 months.
          </p>
          <p className="text-[#4a4949] text-sm sm:text-base md:text-lg">
            Since 1926, the examination of boiler engineers had been conducted by “Board of Examining
            Engineers, Punjab” under Punjab Boiler Rules, 1926 and Boiler Act, 1923. However, through the
            promulgation of “Punjab Pressure Vessels Regulations, 2018” the Board was renamed as “Board
            of Examination (For Boiler Engineers)” and is responsible for conducting the examination of
            boiler engineers.
          </p>
          <p className="text-[#4a4949] text-sm sm:text-base md:text-lg">
            The Board comprises the Chairman and four (4) members. The Director General, IPWM, Punjab is
            the Chairman and the Chief Inspector of Boilers, Punjab is the Secretary of the Board. The
            other members are Mr. Muhammad Ismail Abid, Syed Talat M Hassan, and Mr. Rahmatullah.
          </p>
        </div>
      </section>
      {/* /About Content Section */}

      <Footer />
    </div>
    </>
  );
}
