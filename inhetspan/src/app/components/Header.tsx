"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import ClientHeaderButtonWrapper from '@/app/components/admin/ClientHeaderButtonWrapper';
import { HeaderClient } from '@/app/components/HeaderClient';
import { routes, Route } from '@/dictionaries/routes';
import { usePathname } from 'next/navigation';

const DropdownMenu = ({ dropdownRoutes, onMouseEnter, onMouseLeave }: { dropdownRoutes: Route[], onMouseEnter: () => void, onMouseLeave: () => void }) => {
  return (
    <motion.div 
      className="absolute left-0 -ml-2 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5"
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
            <p className="block px-4 py-3 text-md font-light text-primary hover:bg-gray-100">{route.label}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const showDropdown = (href: string) => {
    setActiveDropdown(href);
  }

  const hideDropdown = () => {
    setActiveDropdown(null);
  }

  const closeSheet = () => setOpen(false);

  return (
    <HeaderClient className='sticky z-10 top-0 left-0 w-full px-10 py-7 transition-transform duration-300'>
      <nav className='flex justify-between items-center relative'>

        {/* Logo */}
        <Link href={'/'}>
          <div className='absolute top-0 -mt-3 pl-4'>
            <Image src='/logo.png' alt='Logo' width={160} height={100} priority />
          </div>
        </Link>

        {/* Navigation */}
        <div className='hidden lg:block'>
          <div className='flex items-center space-x-8 mx-auto'>
            {routes.filter(route => route.includeInHeader).map((route, index) => (
              <div key={index} className="relative">
                <div 
                  onMouseEnter={() => showDropdown(route.href)}
                  className="flex items-center cursor-pointer"
                >
                  <Link href={route.href}>
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
        </div>

        {/* Mobile navigation */}
        <div className='flex items-center gap-4 pr-4'>
          <ClientHeaderButtonWrapper />

          {/* Sheet functionality */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <div className='lg:hidden bg-primary rounded-full p-2 cursor-pointer'>
                <Menu className="h-6 lg:hidden invert" />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className='w-full text-center text-primary'>
              <nav className='flex flex-col gap-4'>
                {routes.map((route, i) => ( route.includeInHeader &&
                  <Link 
                    key={i}
                    href={route.href}
                    onClick={closeSheet}
                    className='block px-4 py-1 text-xl'
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </HeaderClient>
  )
}
