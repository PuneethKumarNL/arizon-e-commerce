"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"

interface MiniCartProps {
  onClose: () => void
}

export default function MiniCart({ onClose }: MiniCartProps) {
  const { items, removeItem, subtotal } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)

  // Close mini cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  if (items.length === 0) {
    return (
      <div
        ref={cartRef}
        className="absolute right-0 top-full mt-2 w-80 rounded-lg border border bg-white p-4 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center py-6">
          <ShoppingBag className="mb-2 h-12 w-12 text-gray-300" />
          <p className="text-center text-gray-500">Your cart is empty</p>
          <Button asChild variant="outline" className="mt-4" onClick={onClose}>
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cartRef}
      className="absolute right-0 top-full mt-2 w-80 max-h-[80vh] overflow-auto rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Your Cart ({items.length})</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-700 truncate">{item.title}</h4>
              <p className="text-sm text-gray-500">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="flex items-center justify-between font-medium">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="mt-4 space-y-2">
        <Button asChild className="w-full" onClick={onClose}>
          <Link href="/cart">View Cart</Link>
        </Button>
        <Button variant="outline" className="w-full">
          Checkout
        </Button>
      </div>
    </div>
  )
}
