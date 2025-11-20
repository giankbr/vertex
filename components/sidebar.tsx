import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[35%] xl:w-[30%] bg-zinc-50 flex flex-col justify-between p-8 lg:p-12 lg:h-screen lg:sticky lg:top-0 border-r border-zinc-200 z-10">
      {/* Header */}
      <div className="mb-12 lg:mb-0">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-black">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
            <path d="M16 4L28 28H4L16 4Z" fill="currentColor"/>
          </svg>
          VERTEX
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900">
          Transforming Businesses with Custom IT Solutions
        </h1>
        
        <p className="text-lg text-zinc-600 leading-relaxed">
          We provide end-to-end software development, digital transformation, and technical consulting to help your business grow and stay ahead of the competition.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#FF4D30] rounded-full transition-all border-b-4 border-[#cc2211] active:border-b-0 active:translate-y-1 hover:brightness-110 shadow-lg shadow-orange-500/20"
          >
            Free Consultation
          </Link>
          <Link 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Footer / Social Proof */}
      <div className="mt-12 lg:mt-0 overflow-hidden w-full">
        <p className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
        {/* Implemented marquee for logos */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-1 font-bold text-xs"><span className="text-lg">★</span> ARCELON</div>
            <div className="font-bold text-sm">JawaArta</div>
            <div className="flex items-center gap-1 font-bold text-sm"><div className="w-4 h-4 rounded-full border-2 border-current"></div> DWS</div>
            <div className="font-bold text-sm flex items-center gap-1"><div className="w-4 h-4 bg-current transform rotate-45"></div> Devin</div>
            <div className="font-bold text-sm">Tangguh</div>
            <div className="font-bold text-xs">WISNU TRANS</div>
            <div className="flex items-center gap-1 font-bold text-xs"><span className="text-lg">★</span> ARCELON</div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-1 font-bold text-xs"><span className="text-lg">★</span> ARCELON</div>
            <div className="font-bold text-sm">JawaArta</div>
            <div className="flex items-center gap-1 font-bold text-sm"><div className="w-4 h-4 rounded-full border-2 border-current"></div> DWS</div>
            <div className="font-bold text-sm flex items-center gap-1"><div className="w-4 h-4 bg-current transform rotate-45"></div> Devin</div>
            <div className="font-bold text-sm">Tangguh</div>
            <div className="font-bold text-xs">WISNU TRANS</div>
            <div className="flex items-center gap-1 font-bold text-xs"><span className="text-lg">★</span> ARCELON</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
