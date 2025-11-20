import { Sidebar } from "@/components/sidebar"
import { BlogList } from "@/components/blog-list"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 lg:ml-auto relative bg-[#0A0A0A] min-h-screen">
        <nav className="absolute top-0 right-0 left-0 p-8 lg:p-12 flex justify-end z-20">
          <ul className="flex flex-wrap justify-end gap-6 text-sm font-medium text-white/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/portfolio/kayu-lapis" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="p-8 lg:p-24 pt-32">
           <BlogList />
        </div>
      </main>
    </div>
  )
}
