'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = {
  '/': {
    name: 'home',
  },
  '/experience': {
    name: 'experience',
  },
  '/projects': {
    name: 'projects',
  },
  '/skills': {
    name: 'skills',
  },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-neutral-200/50 dark:border-neutral-800/50 py-4 -mx-2 px-2 md:-mx-0 md:px-0">
      <div>
        <nav
          className="flex flex-row items-center justify-between relative"
          id="nav"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link href="/" className="flex items-center">
            <Image 
              src="/logo/logo.png" 
              alt="Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col space-y-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </aside>
  )
}
