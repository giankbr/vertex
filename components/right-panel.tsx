import Link from "next/link";
import { LatestPortfolio } from "./latest-portfolio";
import { PortfolioGrid } from "./portfolio-grid";
import { ProcessSection } from "./process-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
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

      <SiteFooter />
    </main>
  );
}
