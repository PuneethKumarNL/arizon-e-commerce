"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import CartItemList from "@/components/cart/cart-item-list"
import CartSummary from "@/components/cart/cart-summary"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const { items, isLoading } = useCart()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
          <p className="mt-4 text-lg">Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItemList />
        </div>
        <div className="lg:col-span-1">
          <CartSummary />
          <div className="mt-6">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
