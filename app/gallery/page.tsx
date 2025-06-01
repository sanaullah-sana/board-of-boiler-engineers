"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


export default function Gallery() {

  return (
      <>
         <div className="overflow-x-hidden">
           <Header />
   
           {/* Intro Banner Section */}
           <section
             style={{ backgroundImage: "url('/gallery-intro-banner.png')" }}
             className="relative bg-cover bg-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] w-full flex items-center justify-center px-4"
           >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg h-[60%] bg-black/90 blur-[60px] z-0"></div>
             <h2 className="relative z-10 text-white font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-raleway">
               GALLERY
             </h2>
           </section>
           {/* /Intro Banner Section */}
   
           {/* Cards Section */}
<section className="p-6 bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <Image
        src="/gallery-img-1.png"
        alt="Card 1"
        width={300}
        height={300}
        className="mx-auto mb-4 rounded-md"
      />
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-opan-sans leading-snug mb-2">
        Training Workshop conducted for <br />board staff
      </h3>
      <p className="font-opan-sans text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
        boiler engineering examination has been uploaded on the website.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <Image
        src="/gallery-img-2.png"
        alt="Card 2"
        width={300}
        height={300}
        className="mx-auto mb-4 rounded-md"
      />
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-opan-sans leading-snug mb-2">
        Examination center Punjab<br /> University wahdat road lahore
      </h3>
      <p className="font-opan-sans text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
        boiler engineering examination has been uploaded on the website.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <Image
        src="/gallery-img-3.png"
        alt="Card 3"
        width={300}
        height={300}
        className="mx-auto mb-4 rounded-md"
      />
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-opan-sans leading-snug mb-2">
        Chief Inspector Reviews ongoing<br />examination Process
      </h3>
      <p className="font-opan-sans text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
        Date-sheet of examination session March/April 2023 is available on the website.
      </p>
    </div>
  </div>
</section>

   
           {/* Footer */}
           <Footer />
         </div>
       </>
  );
}