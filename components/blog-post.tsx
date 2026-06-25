"use client"

import Image from "next/image"
import { siteImages } from "@/lib/site-images"
import { motion } from "framer-motion"

export function BlogPost({ slug }: { slug: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl pt-24 lg:pt-32 pb-24 px-8 lg:px-16 lg:pr-24"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 leading-[1.1] text-balance"
      >
        The Future of Digital Transformation in 2025
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-16 bg-gray-800"
      >
        <Image
          src={siteImages.blogHero}
          alt="Digital Transformation"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
          As we move further into the decade, the landscape of enterprise technology is shifting rapidly. 
          The convergence of AI, edge computing, and cloud-native architectures is creating new opportunities 
          for businesses to innovate at unprecedented speeds.
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold text-white mt-16 mb-6">The AI-First Approach</h2>
        <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
          Artificial Intelligence is no longer just an add-on; it's becoming the core of modern software architecture. 
          From predictive analytics to autonomous agents, AI is reshaping how we build and interact with digital systems. 
          Companies that adopt an AI-first mindset are seeing 3x faster time-to-market for new features.
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold text-white mt-16 mb-6">Cloud-Native Evolution</h2>
        <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
          The shift to serverless and microservices continues to accelerate. However, the focus is moving from 
          pure scalability to cost-efficiency and sustainability. Green computing is becoming a major KPI for 
          CTOs, driving architectural decisions that optimize resource usage without compromising performance.
        </p>

        <blockquote className="border-l-4 border-[#FF4D29] pl-6 my-12 italic text-xl lg:text-2xl text-white/90 leading-relaxed">
          "The most successful digital transformations are those that prioritize culture and agility over specific tools."
        </blockquote>

        <h2 className="text-2xl lg:text-3xl font-bold text-white mt-16 mb-6">Security by Design</h2>
        <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
          With the increasing complexity of distributed systems, security cannot be an afterthought. 
          Zero-trust architectures and automated compliance checks are becoming standard practice in the CI/CD pipeline.
        </p>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-white font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Digital Transformation", "AI", "Cloud Computing", "Enterprise Architecture"].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-400 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
