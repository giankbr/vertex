"use client"

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";

export function PortfolioGrid() {
  const portfolioItems = [
    {
      title: "PT Danan Wingus Sakti",
      category: "Oil & Gas",
      year: "2024",
      image: "/laptop-mockup-industrial-website.jpg"
    },
    {
      title: "Multi Power Aditama",
      category: "Heavy Equipment",
      year: "2025",
      image: "/laptop-mockup-mining-equipment-website.jpg"
    },
    {
      title: "Kayu Lapis",
      category: "Manufacturing",
      year: "2024",
      image: "/laptop-mockup-wood-industry-website.jpg"
    },
    {
      title: "Insura",
      category: "Fintech",
      year: "2025",
      image: "/laptop-mockup-insurance-app-website.jpg"
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white p-8 lg:p-12 min-h-screen pt-32">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6"
        >
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">Featured Portfolio</h2>
          <p className="text-gray-400 max-w-md text-sm lg:text-right leading-relaxed">
            Take a closer look at how we deliver professional, user-centered website solutions tailored to businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 border border-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-6 right-6">
                    <motion.div 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-black" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-medium mb-1 group-hover:text-[#FF4D30] transition-colors"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-gray-500 text-sm">{item.year} • {item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
