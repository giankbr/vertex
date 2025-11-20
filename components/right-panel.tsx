import Link from "next/link";
import { LatestPortfolio } from "./latest-portfolio";
import { PortfolioGrid } from "./portfolio-grid";
import { ProcessSection } from "./process-section";
import { ServicesSection } from "./services-section";
import { Testimonials } from "./testimonials";

export function RightPanel() {
  return (
    <main className="flex-1 lg:ml-auto relative bg-[#0A0A0A]">
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden lg:flex absolute top-0 right-0 left-0 p-8 lg:p-12 justify-end z-20">
        <ul className="flex flex-wrap justify-end gap-6 text-sm md:text-base font-medium text-white/80">
          <li><Link href="/portfolio/kayu-lapis" className="hover:text-white transition-colors py-2 px-1">Portfolio</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors py-2 px-1">Services</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors py-2 px-1">How it Works</Link></li>
          <li><Link href="/blog" className="hover:text-white transition-colors py-2 px-1">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors py-2 px-1">Contact</Link></li>
        </ul>
      </nav>


      {/* Latest Portfolio Section */}
      <LatestPortfolio />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      <PortfolioGrid />
      {/* Testimonials */}
      <Testimonials />
      
      {/* Footer */}
      <footer className="bg-white p-6 md:p-12 border-t border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
           <div>
              <h4 className="font-bold mb-4">VERTEX.</h4>
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">f</div>
                 <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">x</div>
                 <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">in</div>
              </div>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-gray-900">Services</h4>
              <ul className="space-y-2 text-gray-500">
                 <li>Custom Software</li>
                 <li>Cloud Infrastructure</li>
                 <li>Mobile Apps</li>
                 <li>IT Consulting</li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-500">
                 <li>About us</li>
                 <li>Case Studies</li>
                 <li>Blog</li>
                 <li>Careers <span className="bg-[#ccf381] text-[#052e16] text-[10px] px-1 rounded">We're hiring!</span></li>
                 <li>Contact us</li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-4 text-gray-900">Resources</h4>
              <ul className="space-y-2 text-gray-500">
                 <li>Blog</li>
                 <li>FAQ</li>
                 <li>Help center</li>
                 <li>Privacy policy</li>
                 <li>Term of Services</li>
              </ul>
           </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-xs text-gray-400 text-center">
           Copyright © VERTEX 2025.
        </div>
      </footer>
    </main>
  );
}
