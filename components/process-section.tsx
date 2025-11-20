"use client"

import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by deeply understanding your business goals, user needs, and technical requirements."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We architect a scalable technical solution and design intuitive user interfaces."
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert engineers build your solution using modern best practices and rigorous testing."
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support to ensure long-term success."
    }
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-24 border-t border-zinc-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-6">
          How We Work
        </h2>
        <p className="text-zinc-500 text-lg max-w-xl">
          A transparent, agile process designed to deliver results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between h-full min-h-[240px] border-t border-black pt-6 group"
          >
            <span className="text-sm font-mono text-zinc-400 mb-8 block group-hover:text-black transition-colors">
              /{step.number}
            </span>
            <div>
              <h3 className="text-2xl font-medium text-black mb-4">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
