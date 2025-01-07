import { ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-28">
            <div className="text-center">
              <h2 className="text-lg text-gray-600 mb-6">
                Lets Learn Together, Grow Together
              </h2>
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                <span className="block">
                  Loved by <span className="text-red-500">40,0000 +</span> Engineers
                </span>
                <span className="block text-green-500">
                  around the World
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
                Be a part of the most exclusive
                <br />
                community of India
              </p>
              <div className="mt-8 sm:mt-10 flex justify-center">
                <button className="inline-flex items-center justify-center px-8 py-2.5 border-2 border-green-500 text-base font-medium rounded-lg text-green-500 bg-transparent hover:bg-green-50 transition-all min-w-[180px]">
                  Become a member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                      <a
                        href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-green-500 hover:text-green-600"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>
                      <a
                        href="https://t.me/offcampusjobsupdatess"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <FaTelegramPlane className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/lets-code-forever/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.youtube.com/@letscodewithavinash"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="text-red-600 hover:text-red-700"
                      >
                        <FaYoutube className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/lets__code/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-pink-500 hover:text-pink-600"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
