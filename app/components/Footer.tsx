import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

function LanguageSelector() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="bg-[#004432] rounded-full p-2 flex items-center justify-center">
        <FaGlobe className="text-white" size={20} />
      </div>
      <span className="text-white font-nato select-none text-sm sm:text-base font-medium">
        SELECT LANGUAGE
      </span>
      <select
        className="text-sm sm:text-base bg-[#004432] border border-white rounded-md px-0 py-0 cursor-pointer"
        defaultValue=""
      >
        <option value="" disabled hidden></option>
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#004432] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="md:text-xl text-base font-semibold mb-4 font-open-sans">
              Contact Information
            </h2>
            <div>
              <a
                href="tel:(042)99211535"
                className="md:text-base text-sm font-semibold block"
              >
                (042)99211535
              </a>
              <a
                href="mailto:info@boilerengineering.com"
                className="md:text-base text-sm font-semibold block"
              >
                info@boilerengineering.com
              </a>
              <address className="text-sm not-italic pt-2">
                <a
                  href="https://maps.app.goo.gl/9UYRG2kE2hXAJSEU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Board of Examination (For Boiler Engineer) Near Chauburji
                  Orange Line Station, 38-Poonch House, Multan Road, Lahore.
                </a>
              </address>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="md:text-xl text-base font-semibold mb-4 font-open-sans">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline font-open-sans">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:underline font-open-sans"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/photos-gallery"
                  className="hover:underline font-open-sans"
                >
                  Photos Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/online-results"
                  className="hover:underline font-open-sans"
                >
                  Online Results
                </Link>
              </li>
              <li>
                <Link
                  href="/examination"
                  className="hover:underline font-open-sans"
                >
                  Examination
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:underline font-open-sans"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="md:text-xl text-base font-semibold mb-4 font-open-sans">
              Follow Us
            </h2>
            <p className="text-sm font-open-sans">
              Keep up with us on Instagram and Facebook for new products,
              imagery, and events.
            </p>
            <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-white hover:text-[#00220a] rounded-full p-2 sm:p-3 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-white hover:text-[#00220a] rounded-full p-2 sm:p-3 transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-white hover:text-[#00220a] rounded-full p-2 sm:p-3 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Language selector shown only on small screens */}
        <div className="mt-8 px-4 lg:hidden">
          <LanguageSelector />
        </div>
      </footer>

      <div className="bg-[#231f20] md:py-4 py-3">
        <p className="text-center text-white md:text-base text-xs font-nato">
          &copy; {new Date().getFullYear()} Board of Boiler Engineers. All
          rights reserved.
        </p>
      </div>
    </>
  );
}
