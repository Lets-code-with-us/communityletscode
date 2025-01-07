import { ArrowRight } from 'lucide-react';

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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}