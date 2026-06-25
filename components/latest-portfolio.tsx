import { ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { siteImages } from "@/lib/site-images"

const gridItems = [
  { href: "/portfolio/kayu-lapis", image: siteImages.latestGrid[0], label: "Operations dashboard" },
  { href: "/portfolio/kayu-lapis", image: siteImages.latestGrid[1], label: "Analytics platform" },
  { href: "/portfolio/kayu-lapis", image: siteImages.latestGrid[2], label: "Mobile product" },
  { href: "/portfolio/kayu-lapis", image: siteImages.latestGrid[3], label: "Team portal" },
]

export function LatestPortfolio() {
  return (
    <section className="px-6 pb-8 pt-24 md:px-8 md:pb-12 md:pt-32 lg:px-12">
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Latest Portfolio</h2>
      </div>

      <div className="space-y-4 md:space-y-6">
        <Link
          href="/portfolio/kayu-lapis"
          className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-900 md:rounded-3xl"
        >
          <Image
            src={siteImages.featured}
            alt="Quaka Logistics branding and fleet rollout"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 md:p-8">
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">Quaka Logistics</h3>
            <p className="text-sm text-gray-200 md:text-base">Brand identity and digital operations rollout</p>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gridItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative block aspect-square overflow-hidden rounded-xl bg-gray-800 md:rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-md">
                  <ArrowUpRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
