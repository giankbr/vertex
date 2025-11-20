"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Vertex helped us modernize our legacy systems. The transition was seamless, and our operational efficiency has improved by 40%.",
      name: "Sarah Chen",
      role: "CTO, TechFlow"
    },
    {
      quote: "The mobile app Vertex built for us has completely transformed how we engage with our customers. The UI is intuitive and performance is flawless.",
      name: "Michael Ross",
      role: "Product Manager, RetailGo"
    },
    {
      quote: "Their technical expertise and consulting guidance were invaluable during our cloud migration. Highly recommended for complex IT projects.",
      name: "David Miller",
      role: "Director of Engineering"
    },
    {
      quote: "Vertex isn't just a vendor; they are a true partner. They understood our business goals and delivered a solution that exceeded expectations.",
      name: "Emily Zhang",
      role: "CEO, StartUp Inc"
    }
  ];

  return (
    <section className="bg-white text-black p-6 md:p-8 lg:p-12">
      <div className="flex flex-col gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-base">We partner with ambitious companies to build software that matters.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 p-6 md:p-8 rounded-3xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <motion.p 
                className="text-gray-700 mb-6 text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src="/diverse-group-avatars.png" alt={testimonial.name} fill className="object-cover" />
                </motion.div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
