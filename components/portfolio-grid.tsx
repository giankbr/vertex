"use client"

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

export function PortfolioGrid() {
  const portfolioItems = [
    {
      title: "PT Danan Wingus Sakti",
      category: "Oil & Gas",
      year: "2024",
      image: siteImages.portfolio.industrial,
    },
    {
      title: "Multi Power Aditama",
      category: "Heavy Equipment",
      year: "2025",
      image: siteImages.portfolio.mining,
    },
    {
      title: "Kayu Lapis",
      category: "Manufacturing",
      year: "2024",
      image: siteImages.portfolio.wood,
    },
    {
      title: "Insura",
      category: "Fintech",
      year: "2025",
      image: siteImages.portfolio.fintech,
    },
  ];

  return (
    <section className="min-h-screen bg-[#0A0A0A] p-8 pt-32 text-white lg:p-12">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">Featured Portfolio</h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 lg:text-right">
            Take a closer look at how we deliver professional, user-centered website solutions tailored to businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-[#1A1A1A]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-6 right-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="h-6 w-6 text-black" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.h3
                className="mb-1 text-xl font-medium transition-colors group-hover:text-[#FF4D30]"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-sm text-gray-500">{item.year} • {item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
