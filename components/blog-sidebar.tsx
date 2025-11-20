"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function BlogSidebar() {
  return (
    <aside className="w-full lg:w-[420px] lg:fixed lg:h-screen bg-white p-8 lg:p-12 flex flex-col justify-between z-10 border-r border-gray-100">
      <div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">Author</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-500">Senior Tech Lead</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Published</h3>
            <p className="text-base font-medium text-gray-900">November 19, 2025</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Category</h3>
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-900">
              Technology
            </span>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">Share</h3>
            <div className="flex gap-3">
              <button className="text-gray-500 hover:text-black transition-colors text-sm font-medium">Twitter</button>
              <button className="text-gray-500 hover:text-black transition-colors text-sm font-medium">LinkedIn</button>
              <button className="text-gray-500 hover:text-black transition-colors text-sm font-medium">Copy Link</button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 lg:mt-0"
      >
        <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
          <h3 className="font-bold text-gray-900 mb-2">Need a custom solution?</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Let's discuss how we can help transform your business with our technical expertise.
          </p>
          <Button className="w-full bg-[#FF4D29] hover:bg-[#E03E1D] text-white rounded-full h-12 shadow-lg shadow-[#FF4D29]/20 hover:shadow-xl hover:shadow-[#FF4D29]/30 transition-all active:scale-95">
            Book a Consultation
          </Button>
        </div>
      </motion.div>
    </aside>
  )
}
