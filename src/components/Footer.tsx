import { Code2, Mail, MapPin,  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">Let's Code</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Building the future of tech communities, one connection at a time.
            </p>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
  <h3 className="text-white font-semibold mb-4">Contact Us</h3>
  <ul className="space-y-2">
    <li className="flex items-center gap-4"> {/* Updated gap */}
      <MapPin size={16} className="text-gray-400" />
      <span className="text-gray-400 hover:text-white">New Delhi, India</span>
    </li>
    <li className="flex items-center gap-4"> {/* Updated gap */}
      <Mail size={16} className="text-gray-400" />
      <span className="text-gray-400 hover:text-white">letscode@lets-code.co.in</span>
    </li>
  </ul>
</div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li> <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/terms-of-refund" className="text-gray-400 hover:text-white">Refund & Cancelation Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Let's Code. All rights reserved.
            </p>
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
        </div>
      </div>
    </footer>
  );
}