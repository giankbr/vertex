import { ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function LatestPortfolio() {
  return (
    <section className="px-6 md:px-8 lg:px-12 pt-24 md:pt-32 pb-8 md:pb-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Portfolio</h2>
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* Main Featured Item (Truck) */}
        <Link href="/portfolio/kayu-lapis" className="block group relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-900">
          <Image
            src="/white-delivery-truck-with-branding-on-side-driving.jpg"
            alt="Quaka Logistics Branding"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Quaka Logistics</h3>
            <p className="text-gray-200 text-sm md:text-base">Brand Identity & Vehicle Wrap Design</p>
          </div>
        </Link>

        {/* Grid of Square Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Link key={item} href="/portfolio/kayu-lapis" className="block group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-gray-800">
              <Image
                src={`/modern-ui-design-interface-card-.jpg?height=400&width=400&query=modern ui design interface card ${item}`}
                alt={`Portfolio item ${item}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
