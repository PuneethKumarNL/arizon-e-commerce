"use client"

import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"

export default function CartSummary() {
  const { subtotal } = useCart()
  const shipping = subtotal > 0 ? 10 : 0
  const total = subtotal + shipping

  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>{subtotal > 0 ? formatPrice(shipping) : "Free"}</span>
        </div>

        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Including taxes</p>
        </div>
      </div>
    </div>
  )
}
