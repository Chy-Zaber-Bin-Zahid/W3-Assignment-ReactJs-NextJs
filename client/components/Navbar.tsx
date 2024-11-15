'use client'

import { useState } from "react"
import Link from "next/link"
import { Globe, X, List } from "@phosphor-icons/react"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems: string[] = [
    "United States",
    "Trip Boards",
    "List your property",
    "Help",
    "My trips",
    "Sign in",
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-b border-gray-300">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo placeholder */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-sm">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item === "United States" && <Globe size={20} />}
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#111111] z-50 sm:hidden">
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} color="white" />
            </button>
          </div>
          <div className="px-2 py-4">
            {menuItems.map((item, index) => (
              <div key={`${item}-${index}`} className="py-1">
                <Link
                  href="#"
                  className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 transition-colors
                    ${index === 0 ? 'text-white hover:bg-gray-800' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                    ${index === menuItems.length - 1 ? 'text-red-500 hover:text-red-400' : ''}`}
                  onClick={toggleMenu}
                >
                  {item === "United States" && <Globe size={20} />}
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}