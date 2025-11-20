"use client"

import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions for complex business needs. We build scalable, secure, and high-performance software."
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud architecture on AWS, Azure, or Google Cloud designed for growth."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      title: "Strategic IT Consulting",
      description: "Expert guidance to navigate the technology landscape and align IT with business goals."
    },
    {
      title: "UI/UX Design",
      description: "User-centric interfaces that are both beautiful and functional, backed by research."
    },
    {
      title: "Maintenance & Support",
      description: "24/7 monitoring and support to ensure your systems are always running at peak performance."
    }
  ];

  return (
    <section className="bg-zinc-950 px-6 md:px-12 py-24 text-white border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
          Our Expertise
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          We provide end-to-end digital solutions for modern enterprises. 
          From strategy to execution, we help you build the future.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 md:p-12 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300 relative"
          >
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-4 pr-8">{service.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
