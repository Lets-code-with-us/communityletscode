
import { Bell, MessageCircle, Zap, CheckCircle, Users, Target, ArrowRight,Link, ArrowDown, } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";


const JobUpdates = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-28">
            <div className="text-center mb-16">
              
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                <span className="block">
                  Trusted by <span className="text-red-500">10,000+</span> Job Seekers
                </span>
                <span className="block text-green-500">
                  for Career Updates
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
                Choose the perfect plan for your career growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Updates Card */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6">
    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
      <Bell className="h-6 w-6 text-green-600" />
      Free Job Updates
    </h2>
  </div>
  <div className="p-6">
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <MessageCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Community Channels</h3>
          <p className="text-gray-600">
            Join our WhatsApp and Telegram Channels for updates
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Zap className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Daily Updates</h3>
          <p className="text-gray-600">
            Apply links redirected to our LinkedIn page
          </p>
        </div>
      </div>

      <button
        
        aria-label="Join Free Tier"
        className="inline-flex items-center justify-center w-full px-8 py-2.5 border-2 border-green-500 text-base font-medium rounded-lg text-green-500 bg-transparent hover:bg-green-50 transition-all"
      >
        Join Fo Free 
        <ArrowDown className="ml-2 h-5 w-5" />
      </button>

      {/* Social Media Icons Section */}
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


              {/* Premium Updates Card */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Target className="h-6 w-6 text-red-600" />
                    Premium Batch wise jobs updates
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Users className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Exclusive Access lifetime</h3>
                        <p className="text-gray-600">Early notifications and premium job updates batch wise lifetime</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Placement Materials</h3>
                        <p className="text-gray-600">Resume ,cover letter & cold email templates with many placement resources</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Link className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Verified Opportunities</h3>
                        <p className="text-gray-600">Direct career portal apply links</p>
                      </div>
                    </div>
                    <a
      href="https://topmate.io/letscode/1126097" // Replace with your desired link
      className="inline-flex items-center justify-center w-full px-8 py-2.5 border-2 border-red-500 text-base font-medium rounded-lg text-red-500 bg-transparent hover:bg-red-50 transition-all"
    >
      Get Premium Access
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobUpdates;