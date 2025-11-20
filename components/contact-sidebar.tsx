"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from "framer-motion"

export function ContactSidebar() {
  return (
    <aside className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-0 lg:h-screen bg-zinc-50 p-8 lg:p-12 flex flex-col justify-between z-10 border-r border-zinc-200">
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold text-black">VERTEX</span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's start a conversation.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF4D29] transition-colors">
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm">hello@vertex.dev</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF4D29] transition-colors">
                <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF4D29] transition-colors">
                <MapPin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                <p className="text-gray-600 text-sm">
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 lg:mt-0 pt-8 border-t border-zinc-200"
      >
        <p className="text-sm text-gray-500 mb-4">Follow us</p>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </motion.div>
    </aside>
  )
}
