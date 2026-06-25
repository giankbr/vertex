import Link from "next/link"

const columns = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "#" },
      { label: "Cloud Infrastructure", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "IT Consulting", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Case Studies", href: "/portfolio/kayu-lapis" },
      { label: "Blog", href: "/blog" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 4L28 28H4L16 4Z" fill="currentColor" />
              </svg>
              VERTEX
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Custom software, cloud infrastructure, and digital products for teams that need to ship with confidence.
            </p>
            <div className="flex gap-3">
              {["f", "x", "in"].map((label) => (
                <span
                  key={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-zinc-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{column.title}</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © VERTEX 2025. All rights reserved.</p>
          <p>Jakarta, Indonesia · hello@vertex.id</p>
        </div>
      </div>
    </footer>
  )
}
