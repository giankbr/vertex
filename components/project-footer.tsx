import Link from "next/link"
import { Button } from "@/components/ui/button"

const floatingImages = [
  { src: "/kayu-lapis-homepage-laptop.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/kayu-lapis-detail-abstract.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/kayu-lapis-journal-section.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/kayu-lapis-product-catalog-laptop.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/laptop-mockup-industrial-website.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/laptop-mockup-mining-equipment-website.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/laptop-mockup-wood-industry-website.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/laptop-mockup-insurance-app-website.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/modern-ui-design-interface-card-.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/white-delivery-truck-with-branding-on-side-driving.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/kayu-lapis-homepage-laptop.jpg", href: "/portfolio/kayu-lapis" },
  { src: "/kayu-lapis-detail-abstract.jpg", href: "/portfolio/kayu-lapis" },
]

export function ProjectFooter() {
  return (
    <div className="relative min-h-[900px] w-full overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-end py-20 text-center mt-8 rounded-2xl">
      <div className="absolute top-0 left-0 right-0 h-[500px] flex items-center justify-center">
        <div className="relative w-[800px] h-[800px] animate-spin-slow">
          {floatingImages.map((item, index) => {
            const angle = (index / floatingImages.length) * 360
            const radius = 350
            
            return (
              <Link
                key={index}
                href={item.href}
                className="absolute left-1/2 top-1/2 w-40 h-28 -ml-20 -mt-14 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 hover:scale-110 hover:border-white/30 transition-all duration-300 cursor-pointer"
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                }}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt="Portfolio preview"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 space-y-8 mt-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8 text-white"
          >
            <path d="M21 12L3 12" />
            <path d="M15 6L21 12L15 18" />
          </svg>
          <span className="text-2xl font-bold tracking-tighter text-white">VERTEX</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          Let's Build Something
          <br />
          Fast. Flawless. Future-proof.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-[#ff4d2e] hover:bg-[#ff3b1a] text-white rounded-full px-8 h-12 text-base font-medium shadow-[0_4px_14px_0_rgba(255,77,46,0.39)] transition-transform hover:scale-105"
          >
            Start Your Project
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-black hover:bg-zinc-100 border-transparent rounded-full px-8 h-12 text-base font-medium transition-transform hover:scale-105"
          >
            View Portfolio
          </Button>
        </div>

        <div className="pt-4">
          <Link 
            href="/contact" 
            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5"
          >
            Book a 30 Min Call
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-zinc-600 text-sm">
        © 2025 Vertex.id All rights reserved.
      </div>
    </div>
  )
}
