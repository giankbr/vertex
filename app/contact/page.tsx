import { ContactForm } from "@/components/contact-form"
import { ContactSidebar } from "@/components/contact-sidebar"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <ContactSidebar />
      <main className="flex-1 relative bg-[#0A0A0A] min-h-screen flex flex-col">
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex absolute top-0 right-0 left-0 p-8 lg:p-12 justify-end z-20">
          <ul className="flex flex-wrap justify-end gap-6 text-sm font-medium text-white/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/portfolio/kayu-lapis" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </nav>
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-24 pt-8 md:pt-16 lg:pt-32 pb-24">
          <ContactForm />
        </div>
      </main>
    </div>
  )
}
