import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteImages } from "@/lib/site-images"

export function CtaSection() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-white">
      <div className="relative overflow-hidden rounded-3xl bg-[#FF4D29] text-white p-8 md:p-12 lg:p-16">
        {/* Background Pattern/Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-6 backdrop-blur-sm">
              Limited-time offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get a high-converting website for your business
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-md">
              Take advantage of our expertise to boost your online presence. 
              Register now to get started with a free consultation!
            </p>
            <Button 
              size="lg" 
              className="bg-[#1a1a1a] text-white hover:bg-black border-0 h-14 px-8 rounded-full text-base font-medium"
            >
              Start Your Project
            </Button>
          </div>

          <div className="relative hidden lg:block">
            {/* Abstract 3D Elements or Dashboard Preview */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
               <Image
                src={siteImages.ctaPreview}
                alt="Dashboard Preview"
                width={500}
                height={500}
                className="relative z-10 rounded-xl shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
