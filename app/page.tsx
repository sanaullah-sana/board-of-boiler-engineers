"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <>
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/asif-ali-farrukh.png"
              alt="Asif Ali Farrukh"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              quality={100}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#004432] font-nato">
                Asif Ali Farrukh
              </h3>
              <p className="text-sm text-gray-600 mb-2 font-bold">
                Director General BEBP
              </p>
              <p className="text-gray-700 text-sm">
                Board of Examination (For Boiler Engineers) has been
                successfully taking examination of boiler engineers since 1926.
                It is a very joyous and delightful occasion to launch official
                website of the Board...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/muhammad-nawaz-cheema-img.png"
              alt="Muhammad Nawaz Cheema"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              quality={100}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#004432] font-nato">
                Muhammad Nawaz Cheema
              </h3>
              <p className="text-sm text-gray-600 mb-2 font-bold">
                Chief Inspector BEBP
              </p>
              <p className="text-gray-700 text-sm">
                Board of Examination (For Boiler Engineers) has been
                successfully taking examination of boiler engineers since 1926.
                It is a very joyous and delightful occasion to launch official
                website of the Board...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 text-center max-w-screen-xl mx-auto">
            {[
              { icon: "/download-icon.png", label: "Downloads" },
              { icon: "/fee-structure-icon.png", label: "Fee Structure" },
              { icon: "/syllabus-icon.png", label: "Syllabus" },
              { icon: "/past-paper-icon.png", label: "Past Papers" },
              { icon: "/gallery-icon.png", label: "Photo Gallery" },
              { icon: "/roll-no-icon.png", label: "Roll Number" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-28 sm:w-32 transform transition duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-[#004432] w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="object-contain sm:w-10 sm:h-10 cursor-pointer"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Updates Section */}
      <section className="bg-white py-10 px-4 md:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="/info-img-1.png"
              alt="Datesheet section May 2025 announced"
              className="w-52 h-56 object-contain rounded-md bg-gray-100 self-start mx-auto md:self-start md:mx-0"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center md:text-left">
              Datesheet section May 2025 announced
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center md:text-left">
              Boiler engineering examination has been announced on the website.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="/info-img-2.png"
              alt="Roll number slips are available now (class 3rd)"
              className="w-52 h-56 object-contain rounded-md bg-gray-100 self-start mx-auto md:self-start md:mx-0"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center md:text-left">
              Roll number slips are available now (class 3rd)
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center md:text-left">
              Boiler engineering examination has been uploaded on the website.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="/info-img-3.png"
              alt="Result for class 2nd are announced (April)"
              className="w-52 h-56 object-contain rounded-md bg-gray-100 self-start mx-auto md:self-start md:mx-0"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center md:text-left">
              Result for class 2nd are announced (April)
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center md:text-left">
              Date-sheet of examination session March/April 2025 is available on
              the website.
            </p>
          </div>
        </div>
      </section>
      {/* FAQs Section */}
<section className="bg-[#004432] py-16 px-4">
     <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-white">
      FREQUENTLY ASKED QUESTION
    </h2>
  <div className="max-w-5xl mx-auto text-white bg-[#004432]">
    <div className="bg-white rounded-tr-2xl rounded-bl-2xl p-6 shadow-xl text-black space-y-4 text-sm sm:text-base">
      {/* FAQ Item Template */}
      {[1, 2, 3, 4, 5].map((num) => {
        const open = eval(`open${num}`);
        const setOpen = eval(`setOpen${num}`);
        const questions = [
          'What are the 3 classes of boiler engineers?',
          'What education and experience is required to apply for 3rd class boiler engineer competency certificate?',
          'What education and experience is required to apply for 2nd class boiler engineer competency certificate?',
          'What education and experience is required to apply for 1st class boiler engineer competency certificate?',
          'Is experience/service certificate compulsory to apply for all classes of boiler engineering examination?'
        ];
        const answers = [
          'Details about the 3 classes of boiler engineers.',
          'You must have completed basic engineering training and hands-on experience.',
          'Requires experience as a 3rd class engineer and additional technical qualifications.',
          'You need extensive experience and must pass written and oral exams.',
          'Yes, service certificates are mandatory to verify your experience.'
        ];
        return (
          <div key={num} className="border-b">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center py-3 text-left"
            >
              <div className="flex items-start gap-3">
                <span className="bg-[#004733] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                  {num}
                </span>
                <span>{questions[num - 1]}</span>
              </div>
              <span className="[#004432] text-2xl md:text-3xl font-bold cursor-pointer">
                {open ? '−' : '+'}
              </span>
            </button>
            {open && (
              <p className="pl-9 pb-3 text-gray-700 text-sm">{answers[num - 1]}</p>
            )}
          </div>
        );
      })}

      {/* View More Button */}
      <div className="flex justify-end pt-4">
        <button className="cursor-pointer bg-[#004733] text-white text-sm md:text-base px-4 py-2 rounded-md hover:bg-[#035c40] transition">
          VIEW MORE
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </>
  );
}