"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl space-y-6 md:space-y-8"
    >
      <div className="space-y-2 md:space-y-3">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Let's start a project
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Tell us about your project and we'll get back to you within 24 hours.
        </motion.p>
      </div>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4 md:space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300 text-sm font-medium">Name *</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:bg-white/10 transition-all h-12 rounded-lg" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 text-sm font-medium">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:bg-white/10 transition-all h-12 rounded-lg" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-300 text-sm font-medium">Company</Label>
          <Input 
            id="company" 
            placeholder="Your Company" 
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:bg-white/10 transition-all h-12 rounded-lg" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-300 text-sm font-medium">Subject *</Label>
          <Input 
            id="subject" 
            placeholder="Project Inquiry" 
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:bg-white/10 transition-all h-12 rounded-lg" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-300 text-sm font-medium">Message *</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your project, timeline, and budget..." 
            className="min-h-[180px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:bg-white/10 transition-all rounded-lg resize-none" 
          />
        </div>

        <Button className="w-full md:w-auto bg-[#FF4D29] hover:bg-[#E03E1D] text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-[#FF4D29]/20 hover:shadow-xl hover:shadow-[#FF4D29]/30 transition-all active:scale-95">
          Send Message
        </Button>
      </motion.form>
    </motion.div>
  )
}
