import { BlogSidebar } from "@/components/blog-sidebar"
import { BlogPost } from "@/components/blog-post"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen bg-white">
      <BlogSidebar />
      
      <main className="flex-1 lg:ml-[420px] relative bg-[#0A0A0A] min-h-screen">
        <nav className="absolute top-0 right-0 p-8 lg:p-12 flex justify-end z-20">
          <ul className="flex gap-6 lg:gap-8 text-sm font-medium text-white/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio/kayu-lapis" className="hover:text-white transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <BlogPost slug={params.slug} />
      </main>
    </div>
  )
}
