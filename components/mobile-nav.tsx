"use client"

import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Home, Mail, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/portfolio/kayu-lapis', label: 'Portfolio', icon: Briefcase },
    { href: '#services', label: 'Services', icon: Zap },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20 }}
      className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl shadow-black/20 border border-gray-200/50 px-4 py-3">
        <ul className="flex items-center gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <motion.li key={item.href}>
                <Link
                  href={item.href}
                  className="relative flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-full transition-colors group"
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#FF4D30]/10 rounded-full"
                      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    />
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    className={`w-5 h-5 relative z-10 transition-colors ${
                      isActive 
                        ? 'text-[#FF4D30]' 
                        : 'text-gray-600 group-hover:text-[#FF4D30]'
                    }`}
                  />
                  
                  {/* Label - hidden on smallest screens, shown on larger mobile */}
                  <span 
                    className={`hidden sm:block text-[10px] font-medium relative z-10 transition-colors ${
                      isActive 
                        ? 'text-[#FF4D30]' 
                        : 'text-gray-600 group-hover:text-[#FF4D30]'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
