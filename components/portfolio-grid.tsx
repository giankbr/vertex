import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';

export function PortfolioGrid() {
  return (
    <section className="bg-[#0A0A0A] text-white p-8 lg:p-12 min-h-screen pt-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">Featured Portfolio</h2>
          <p className="text-gray-400 max-w-md text-sm lg:text-right leading-relaxed">
            Take a closer look at how we deliver professional, user-centered website solutions tailored to businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 border border-white/5">
               <Image 
                 src="/laptop-mockup-industrial-website.jpg" 
                 alt="PT Danan Wingus Sakti" 
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <h3 className="text-xl font-medium mb-1">PT Danan Wingus Sakti</h3>
            <p className="text-gray-500 text-sm">2024 • Oil & Gas</p>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 border border-white/5">
               <Image 
                 src="/laptop-mockup-mining-equipment-website.jpg" 
                 alt="Multi Power Aditama" 
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <h3 className="text-xl font-medium mb-1">Multi Power Aditama</h3>
            <p className="text-gray-500 text-sm">2025 • Heavy Equipment</p>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 border border-white/5">
               <Image 
                 src="/laptop-mockup-wood-industry-website.jpg" 
                 alt="Kayu Lapis" 
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <h3 className="text-xl font-medium mb-1">Kayu Lapis</h3>
            <p className="text-gray-500 text-sm">2024 • Manufacturing</p>
          </div>

          {/* Item 4 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 border border-white/5">
               <Image 
                 src="/laptop-mockup-insurance-app-website.jpg" 
                 alt="Insura" 
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            <h3 className="text-xl font-medium mb-1">Insura</h3>
            <p className="text-gray-500 text-sm">2025 • Fintech</p>
          </div>

        </div>
      </div>
    </section>
  );
}
