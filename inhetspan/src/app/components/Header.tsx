"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientHeaderButtonWrapper from '@/app/components/admin/ClientHeaderButtonWrapper';
import { HeaderClient } from '@/app/components/HeaderClient';
import { routes, Route } from '@/dictionaries/routes';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const DropdownMenu = ({ dropdownRoutes, onMouseEnter, onMouseLeave }: { dropdownRoutes: Route[], onMouseEnter: () => void, onMouseLeave: () => void }) => {
  return (
    <motion.div 
      className="absolute left-0 -ml-2 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.15 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-2">
        {dropdownRoutes.map((route, index) => (
          <Link key={index} href={route.href}>
            <p className="block px-4 py-3 text-md font-light text-primary hover:bg-secondary">{route.label}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const showDropdown = (href: string) => {
    setActiveDropdown(href);
  };

  const hideDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <HeaderClient className='sticky top-0 left-0 w-full bg-secondary px-10 py-7 transition-transform duration-300 z-10'>
      <nav className='flex justify-between items-center relative'>
        <Image src='/logo.png' alt='Logo' width={160} height={100} priority className='absolute pl-4' />
        <div className='flex items-center space-x-8 mx-auto'>
          {routes.filter(route => route.includeInHeader).map((route, index) => (
            <div key={index} className="relative">
              <div 
                onMouseEnter={() => showDropdown(route.href)}
                className="flex items-center cursor-pointer"
              >
                <Link href={route.href} key={route.href}>
                  <p className={`text-primary text-lg font-light textWithAnimatedUnderline ${pathname === route.href ? 'textWithUnderline' : ''}`}>
                    {route.label}
                  </p>
                </Link>
                {route.dropdown && <ChevronDown className="ml-1 mb-1 w-4 h-4 text-primary"/>}
              </div>
              {route.dropdown && activeDropdown === route.href && (
                <DropdownMenu 
                  dropdownRoutes={route.dropdown}
                  onMouseEnter={() => showDropdown(route.href)}
                  onMouseLeave={hideDropdown}
                />
              )}
            </div>
          ))}
        </div>
        <div className='flex items-center gap-4 pr-4'>
          <ClientHeaderButtonWrapper />
        </div>
      </nav>
    </HeaderClient>
  );
}
