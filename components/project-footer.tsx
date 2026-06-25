import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectFooter() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] px-6 py-16 md:px-12 md:py-20 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,77,46,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-2xl space-y-8">
        <div className="flex items-center justify-center gap-2">
          <ArrowRight className="h-7 w-7 text-white" />
          <span className="text-2xl font-bold tracking-tighter text-white">VERTEX</span>
        </div>

        <h2 className="text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
          Let&apos;s Build Something
          <br />
          Fast. Flawless. Future-proof.
        </h2>

        <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
          Tell us what you&apos;re building. We&apos;ll help you scope, ship, and scale with a team that cares about production quality.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-[#ff4d2e] px-8 text-base font-medium text-white shadow-[0_4px_14px_0_rgba(255,77,46,0.39)] transition-transform hover:scale-105 hover:bg-[#ff3b1a]"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/15 bg-white px-8 text-base font-medium text-black transition-transform hover:scale-105 hover:bg-zinc-100"
          >
            <Link href="/portfolio/kayu-lapis">View Portfolio</Link>
          </Button>
        </div>

        <Link
          href="/contact"
          className="inline-block border-b border-transparent pb-0.5 text-sm font-medium text-zinc-400 transition-colors hover:border-white hover:text-white"
        >
          Book a 30 Min Call
        </Link>
      </div>

      <p className="relative z-10 mt-12 text-sm text-zinc-600">
        © 2025 Vertex.id All rights reserved.
      </p>
    </section>
  )
}
