"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[35%] xl:w-[30%] bg-zinc-50 flex flex-col justify-between p-8 lg:p-12 lg:h-screen lg:sticky lg:top-0 border-r border-zinc-200 z-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 lg:mb-0"
      >
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-black group">
          <motion.svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="text-black transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300"
            whileHover={{ rotate: 12, scale: 1.1 }}
          >
            <path d="M16 4L28 28H4L16 4Z" fill="currentColor"/>
          </motion.svg>
          <span className="group-hover:tracking-wide transition-all duration-300">VERTEX</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 max-w-xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900"
        >
          Transforming Businesses with Custom IT Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-600 leading-relaxed"
        >
          We provide end-to-end software development, digital transformation, and technical consulting to help your business grow and stay ahead of the competition.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#FF4D30] rounded-full transition-all border-b-4 border-[#cc2211] active:border-b-0 active:translate-y-1 hover:brightness-110 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/portfolio/kayu-lapis" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all hover:shadow-md"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer / Social Proof */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 lg:mt-0 overflow-hidden w-full"
      >
        <p className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
        {/* Marquee animation */}
        <div className="relative flex overflow-hidden">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee-content {
              animation: scroll 20s linear infinite;
            }
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="marquee-content flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 pr-8">
            <div className="flex items-center gap-1 font-bold text-xs hover:scale-110 transition-transform whitespace-nowrap"><span className="text-lg">★</span> ARCELON</div>
            <div className="font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap">JawaArta</div>
            <div className="flex items-center gap-1 font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap"><div className="w-4 h-4 rounded-full border-2 border-current"></div> DWS</div>
            <div className="font-bold text-sm flex items-center gap-1 hover:scale-110 transition-transform whitespace-nowrap"><div className="w-4 h-4 bg-current transform rotate-45"></div> Devin</div>
            <div className="font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap">Tangguh</div>
            <div className="font-bold text-xs hover:scale-110 transition-transform whitespace-nowrap">WISNU TRANS</div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="marquee-content flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 pr-8" aria-hidden="true">
            <div className="flex items-center gap-1 font-bold text-xs hover:scale-110 transition-transform whitespace-nowrap"><span className="text-lg">★</span> ARCELON</div>
            <div className="font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap">JawaArta</div>
            <div className="flex items-center gap-1 font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap"><div className="w-4 h-4 rounded-full border-2 border-current"></div> DWS</div>
            <div className="font-bold text-sm flex items-center gap-1 hover:scale-110 transition-transform whitespace-nowrap"><div className="w-4 h-4 bg-current transform rotate-45"></div> Devin</div>
            <div className="font-bold text-sm hover:scale-110 transition-transform whitespace-nowrap">Tangguh</div>
            <div className="font-bold text-xs hover:scale-110 transition-transform whitespace-nowrap">WISNU TRANS</div>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
