"use client"

import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"

const POSTS = [
  {
    id: 1,
    title: "The Future of Digital Transformation in 2025",
    excerpt: "How AI and cloud computing are reshaping the enterprise landscape.",
    date: "Nov 19, 2025",
    category: "Technology",
    slug: "future-digital-transformation",
  },
  {
    id: 2,
    title: "Building Scalable Microservices Architecture",
    excerpt: "Best practices for designing resilient and maintainable distributed systems.",
    date: "Nov 15, 2025",
    category: "Engineering",
    slug: "scalable-microservices",
  },
  {
    id: 3,
    title: "UX Design Patterns for Enterprise Software",
    excerpt: "Creating intuitive interfaces for complex business applications.",
    date: "Nov 10, 2025",
    category: "Design",
    slug: "ux-patterns-enterprise",
  },
  {
    id: 4,
    title: "Optimizing Cloud Costs with Serverless",
    excerpt: "A guide to reducing infrastructure overhead while maintaining performance.",
    date: "Nov 05, 2025",
    category: "DevOps",
    slug: "optimizing-cloud-costs",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "Why processing data closer to the source is becoming critical for modern apps.",
    date: "Oct 28, 2025",
    category: "Infrastructure",
    slug: "edge-computing-rise",
  },
  {
    id: 6,
    title: "Securing Your Supply Chain",
    excerpt: "Strategies to protect your software development lifecycle from vulnerabilities.",
    date: "Oct 20, 2025",
    category: "Security",
    slug: "securing-supply-chain",
  },
]

export function BlogList() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Insights & Thoughts</h1>
        <p className="text-gray-400 text-lg">Our latest thinking on technology, design, and business.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[#FF4D29] text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF4D29]/10">
                  {post.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF4D29] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
              <div className="text-xs text-gray-500 font-medium pt-4 border-t border-white/5">{post.date}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
