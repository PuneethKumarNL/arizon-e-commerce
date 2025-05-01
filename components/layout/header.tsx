"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import MiniCart from "@/components/cart/mini-cart"
import { useCart } from "@/hooks/use-cart"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const { items } = useCart()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleMiniCart = () => setIsMiniCartOpen(!isMiniCartOpen)
  const closeMiniCart = () => setIsMiniCartOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="https://res.cloudinary.com/dszd8jabc/image/upload/v1744490892/Designer_1_nwl8aw.png" alt="Mellow" width={80} height={30} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-sm font-medium hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm font-medium hover:text-gray-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-gray-600">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-gray-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden md:block" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <div className="relative">
              <button className="flex items-center" aria-label="Cart" onClick={toggleMiniCart}>
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    {items.length}
                  </span>
                )}
              </button>
              {isMiniCartOpen && <MiniCart onClose={closeMiniCart} />}
            </div>
            <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white p-4 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image src="/placeholder.svg?height=40&width=120&text=MELLOW" alt="Mellow" width={120} height={40} />
          </Link>
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8 flex space-x-4">
          <Button variant="outline" className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" className="flex-1">
            <User className="mr-2 h-4 w-4" />
            Account
          </Button>
        </div>
      </div>
    </header>
  )
}
