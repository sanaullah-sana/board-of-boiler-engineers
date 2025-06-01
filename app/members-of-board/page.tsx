"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function MembersOfBoard() {

  return (
    <>
        <div className="overflow-x-hidden">
          <Header />
    
          {/* Intro Banner Section */}
          <section
            style={{ backgroundImage: "url('/member-of-board-img.png')" }}
            className="relative bg-cover bg-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] w-full flex items-center justify-center px-4"
          >
            {/* Responsive Shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg h-[60%] bg-black/90 blur-[60px] z-0"></div>
    
            {/* Heading */}
            <h2 className="relative z-10 text-white font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-raleway">
              MEMBERS OF BOARD
            </h2>
          </section>
          {/* /Intro Banner Section */}
           {/* Info Section */}
              <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Asif Ali Farrukh",
                      title: "Director General BEBP",
                      image: "/asif-ali-farrukh.png",
                    },
                    {
                      name: "Muhammad Nawaz Cheema",
                      title: "Chief Inspector BEBP",
                      image: "/muhammad-nawaz-cheema-img.png",
                    },
                  ].map((person, idx) => (
                    <div key={idx} className="bg-white shadow-lg rounded-xl overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                        quality={100}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#004432] font-nato">
                          {person.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 font-bold">{person.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* /Info Section */}
              <section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src="/tallat-m-hassan-img.png"
        alt="Tallat M Hassan"
        width={600}
        height={400}
        className="object-cover w-full h-auto"
        quality={100}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#004432] font-nato">Tallat M Hassan</h3>
        <p className="text-sm text-gray-600 mb-2 font-bold">Member of Examination Board</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src="/rehmatullah-img.png"
        alt="Rehamatullah"
        width={600}
        height={400}
        className="object-cover w-full h-auto"
        quality={100}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#004432] font-nato">Rehmat Ullah</h3>
        <p className="text-sm text-gray-600 mb-2 font-bold">Member Of Examination Board</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src="/ismail-abid-img.png"
        alt="Ismail Abid"
        width={600}
        height={400}
        className="object-cover w-full h-auto"
        quality={100}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#004432] font-nato">M Ismail Abid</h3>
        <p className="text-sm text-gray-600 mb-2 font-bold">Member Of Examination Board</p>
      </div>
    </div>

  </div>
</section>
              {/* Footer  */}
          <Footer />
        </div>
    </>
  );
}